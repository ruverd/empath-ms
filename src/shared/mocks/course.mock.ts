import type {
  Course,
  CourseInstructor,
  CourseLesson,
  CourseTag,
} from "@/shared/types/course.types";

import avatar1 from "@/assets/mock/avatar-1.png";
import avatar2 from "@/assets/mock/avatar-2.png";
import avatar3 from "@/assets/mock/avatar-3.png";
import course1 from "@/assets/mock/course-1.png";
import course2 from "@/assets/mock/course-2.png";
import course3 from "@/assets/mock/course-3.png";
import course4 from "@/assets/mock/course-4.png";
import course5 from "@/assets/mock/course-5.png";
import course6 from "@/assets/mock/course-6.png";

export const MOCK_INSTRUCTORS = [
  {
    name: "Heather Johnson",
    imageUrl: avatar1,
  },
  {
    name: "Matt Pincus",
    imageUrl: avatar2,
  },
  {
    name: "Stan Golubchik",
    imageUrl: avatar3,
  },
] as CourseInstructor[];

export const MOCK_TAGS = [
  {
    title: "Learning Pathway",
    variant: "secondary",
  },
  {
    title: "Featured",
    variant: "primary",
  },
  {
    title: "Trending #1",
    variant: "primary",
  },
  {
    title: "Client Conversations",
    variant: "secondary",
  },
  {
    title: "Sales",
    variant: "secondary",
  },
  {
    title: "Tag 1",
    variant: "secondary",
  },
  {
    title: "Tag 2",
    variant: "secondary",
  },
  {
    title: "Tag 3",
    variant: "secondary",
  },
] as CourseTag[];

export const MOCK_LESSONS = [
  {
    id: "1",
    title: "Lesson 1",
    duration: 100,
    number: 1,
  },
  {
    id: "2",
    title: "Lesson 2",
    duration: 100,
    number: 2,
  },
  {
    id: "3",
    title: "Lesson 3",
    duration: 100,
    number: 3,
  },
  {
    id: "4",
    title: "Lesson 4",
    duration: 100,
    number: 4,
  },
  {
    id: "5",
    title: "Lesson 5",
    duration: 100,
    number: 5,
  },
  {
    id: "6",
    title: "Lesson 6",
    duration: 100,
    number: 6,
  },
  {
    id: "7",
    title: "Lesson 7",
    duration: 100,
    number: 7,
  },
  {
    id: "8",
    title: "Lesson 8",
    duration: 100,
    number: 8,
  },
] as CourseLesson[];

export const MOCK_COURSES = [
  {
    id: "1",
    imageUrl: course1,
    title: "CompTIA Security+ certified",
    lessons: MOCK_LESSONS,
    duration: 90,
    level: "beginner",
    instructor: MOCK_INSTRUCTORS[0],
    totalStudents: 100,
    totalRatings: 4.5,
    totalReviews: 100,
    highlightTag: MOCK_TAGS[0],
    tags: [MOCK_TAGS[0]],
    isNew: false,
    isFeatured: false,
    isActive: true,
    createdAt: new Date(),
  },
  {
    id: "2",
    imageUrl: course2,
    title: "Introduction to Security Operations and Tools",
    lessons: MOCK_LESSONS,
    duration: 90,
    level: "beginner",
    instructor: MOCK_INSTRUCTORS[1],
    totalStudents: 150,
    totalRatings: 4,
    totalReviews: 210,
    tags: MOCK_TAGS,
    isNew: false,
    isFeatured: false,
    isActive: true,
    createdAt: new Date(),
  },
  {
    id: "3",
    imageUrl: course3,
    title: "Financing a Deal",
    lessons: MOCK_LESSONS,
    duration: 90,
    level: "beginner",
    instructor: MOCK_INSTRUCTORS[1],
    totalStudents: 120,
    totalRatings: 3,
    totalReviews: 320,
    tags: MOCK_TAGS,
    isNew: false,
    isFeatured: false,
    isActive: true,
    createdAt: new Date(),
  },
  {
    id: "4",
    imageUrl: course4,
    title: "Introduction to Empathy in Business",
    lessons: MOCK_LESSONS.slice(0, 4),
    duration: 85,
    level: "beginner",
    instructor: MOCK_INSTRUCTORS[0],
    totalStudents: 1394,
    totalRatings: 4.5,
    totalReviews: 537,
    tags: MOCK_TAGS.slice(1),
    isNew: true,
    isFeatured: false,
    isActive: true,
    createdAt: new Date(),
  },
  {
    id: "5",
    imageUrl: course5,
    title: "M&A 101: An Intro to Everyone",
    lessons: MOCK_LESSONS.slice(0, 7),
    duration: 77,
    level: "beginner",
    instructor: MOCK_INSTRUCTORS[1],
    totalStudents: 1500,
    totalRatings: 4.5,
    totalReviews: 338,
    tags: MOCK_TAGS.slice(1),
    isNew: true,
    isFeatured: true,
    isActive: true,
    createdAt: new Date(),
  },
  {
    id: "6",
    imageUrl: course6,
    title: "The Fundamentals of MSP Security Operations ",
    lessons: MOCK_LESSONS.slice(0, 7),
    duration: 65,
    level: "beginner",
    instructor: MOCK_INSTRUCTORS[2],
    totalStudents: 1124,
    totalRatings: 4.5,
    totalReviews: 137,
    tags: MOCK_TAGS.slice(1),
    isNew: true,
    isFeatured: true,
    isActive: true,
    createdAt: new Date(),
  },
] as Course[];

export type CourseAssigned = {
  course: Course;
  percentageCompleted?: number;
  currentLesson?: number;
  isOnTrack?: boolean;
  dueDate?: Date;
};

export const MOCK_ASSIGNED_COURSES = [
  {
    course: MOCK_COURSES[0],
    percentageCompleted: 4,
    currentLesson: 1,
    isOnTrack: true,
  },
  {
    course: MOCK_COURSES[1],
    percentageCompleted: 20,
    currentLesson: 2,
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
  },
  {
    course: MOCK_COURSES[2],
    percentageCompleted: 75,
    currentLesson: 3,
  },
] as CourseAssigned[];

export const DASHBOARD_MOCK = {
  courses: MOCK_COURSES,
  assignedCourses: MOCK_ASSIGNED_COURSES,
};
