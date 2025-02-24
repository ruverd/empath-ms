import * as useThemeHook from "@/shared/hooks/use-theme";
import {
  MOCK_ASSIGNED_COURSES,
  MOCK_COURSES,
} from "@/shared/mocks/course.mock";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { CardAssigned } from "./card-assigned";

describe("CardAssigned", () => {
  beforeEach(() => {
    vi.spyOn(useThemeHook, "useTheme").mockReturnValue({
      theme: "light",
      setTheme: vi.fn(),
    });
  });

  it("should match light theme snapshot", () => {
    vi.spyOn(useThemeHook, "useTheme").mockReturnValue({
      theme: "light",
      setTheme: vi.fn(),
    });

    const { container } = render(
      <CardAssigned {...MOCK_ASSIGNED_COURSES[0]} />
    );
    expect(container).toMatchSnapshot();
  });

  it("should match dark theme snapshot", () => {
    vi.spyOn(useThemeHook, "useTheme").mockReturnValue({
      theme: "dark",
      setTheme: vi.fn(),
    });

    const { container } = render(
      <CardAssigned {...MOCK_ASSIGNED_COURSES[0]} />
    );
    expect(container).toMatchSnapshot();
  });

  it("should match snapshot without highlight tag", () => {
    const { container } = render(
      <CardAssigned
        course={{
          ...MOCK_COURSES[0],
          highlightTag: undefined,
        }}
        percentageCompleted={75}
        currentLesson={5}
        isOnTrack={true}
        dueDate={new Date("2024-04-15")}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("should match snapshot for not started course", () => {
    const { container } = render(
      <CardAssigned
        course={{
          ...MOCK_COURSES[0],
          highlightTag: {
            title: "Required",
            variant: "primary",
          },
        }}
        percentageCompleted={0}
        currentLesson={1}
        isOnTrack={true}
        dueDate={new Date("2024-05-01")}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("should match snapshot for almost complete course", () => {
    const { container } = render(
      <CardAssigned
        course={{
          ...MOCK_COURSES[0],
          highlightTag: {
            title: "Almost Done",
            variant: "primary",
          },
        }}
        percentageCompleted={90}
        currentLesson={9}
        isOnTrack={true}
        dueDate={new Date("2024-04-10")}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("should renders course title and image", () => {
    render(
      <CardAssigned
        course={MOCK_COURSES[0]}
        percentageCompleted={50}
        currentLesson={1}
        isOnTrack={true}
      />
    );

    expect(screen.getByText(MOCK_COURSES[0].title)).toBeInTheDocument();
    expect(screen.getByAltText("Course Image")).toHaveAttribute(
      "src",
      MOCK_COURSES[0].imageUrl
    );
  });

  it("should renders highlight tag when provided", () => {
    render(<CardAssigned {...MOCK_ASSIGNED_COURSES[0]} />);

    expect(
      screen.getByText(MOCK_ASSIGNED_COURSES[0].course?.highlightTag?.title!)
    ).toBeInTheDocument();
  });

  it("should renders current lesson when no highlight tag", () => {
    render(<CardAssigned {...MOCK_ASSIGNED_COURSES[1]} />);

    const lessonString = `Lesson ${MOCK_ASSIGNED_COURSES[1].currentLesson}`;

    expect(screen.getByText(lessonString)).toBeInTheDocument();
  });

  it("should renders due date when provided", () => {
    const dueDate = new Date("2024-04-30");
    render(<CardAssigned {...MOCK_ASSIGNED_COURSES[1]} />);

    expect(screen.getByText(/Due:/)).toBeInTheDocument();
  });

  it("should renders on track status when isOnTrack is true", () => {
    render(<CardAssigned {...MOCK_ASSIGNED_COURSES[0]} />);

    expect(screen.getByText("On Track")).toBeInTheDocument();
  });

  it("should renders progress circle with correct percentage", () => {
    render(<CardAssigned {...MOCK_ASSIGNED_COURSES[2]} />);

    const percentage = `${MOCK_ASSIGNED_COURSES[2].percentageCompleted}%`;
    expect(screen.getByText(percentage)).toBeInTheDocument();
  });

  it("should renders start lesson button", () => {
    render(<CardAssigned {...MOCK_ASSIGNED_COURSES[2]} />);

    expect(
      screen.getByRole("button", { name: "Start Lesson" })
    ).toBeInTheDocument();
  });
});
