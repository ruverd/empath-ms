import { createBrowserRouter } from "react-router-dom";

import { CoursesPage } from "./pages/couses.page";
import { DashboardPage } from "./pages/dashboard";
import { LearningPage } from "./pages/learning.page";
import { LivePage } from "./pages/live.page";
import { MembersPage } from "./pages/members.page";
import { NotFoundPage } from "./pages/not-found.page";
import { AppLayout } from "./shared/layouts/app.layout";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/members",
        element: <MembersPage />,
      },
      {
        path: "/courses",
        element: <CoursesPage />,
      },
      {
        path: "/learning",
        element: <LearningPage />,
      },
      {
        path: "/live",
        element: <LivePage />,
      },
    ],
  },
]);
