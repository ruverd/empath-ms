import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/shared/components/ui/card";
import { useTheme } from "@/shared/hooks/use-theme";
import { cn } from "@/shared/lib/utils";
import * as React from "react";

type CardCourseVariant = "vertical" | "horizontal";

interface CardCourseRootProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardCourseVariant;
}

interface CardCourseCoverProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

interface CardCourseContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

interface CardCourseTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

interface CardCourseInfoProps extends React.HTMLAttributes<HTMLDivElement> {}

interface CardCourseActionProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardCourseRoot = React.forwardRef<HTMLDivElement, CardCourseRootProps>(
  ({ className, variant = "vertical", children, ...props }, ref) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
      <Card
        ref={ref}
        className={cn(
          "border border-primary-violet overflow-hidden",
          variant === "horizontal" ? "grid grid-cols-2" : "flex flex-col",
          isDark && "border-primary-violet",
          className
        )}
        {...props}
      >
        {children}
      </Card>
    );
  }
);
CardCourseRoot.displayName = "CardCourseRoot";

const CardCourseCover = React.forwardRef<
  HTMLImageElement,
  CardCourseCoverProps
>(({ className, src, alt, ...props }, ref) => {
  return (
    <div
      className={cn(
        "relative aspect-video w-full h-full overflow-hidden",
        className
      )}
    >
      <img
        ref={ref}
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        {...props}
      />
    </div>
  );
});
CardCourseCover.displayName = "CardCourseCover";

const CardCourseContainer = React.forwardRef<
  HTMLDivElement,
  CardCourseContainerProps
>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("flex flex-col flex-1", className)} {...props}>
      {children}
    </div>
  );
});
CardCourseContainer.displayName = "CardCourseContainer";

const CardCourseTitle = React.forwardRef<
  HTMLHeadingElement,
  CardCourseTitleProps
>(({ className, children, ...props }, ref) => {
  return (
    <CardHeader ref={ref} className={cn("", className)} {...props}>
      {children}
    </CardHeader>
  );
});
CardCourseTitle.displayName = "CardCourseTitle";

const CardCourseInfo = React.forwardRef<HTMLDivElement, CardCourseInfoProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <CardContent ref={ref} className={cn("flex-1", className)} {...props}>
        {children}
      </CardContent>
    );
  }
);
CardCourseInfo.displayName = "CardCourseInfo";

const CardCourseAction = React.forwardRef<
  HTMLDivElement,
  CardCourseActionProps
>(({ className, children, ...props }, ref) => {
  return (
    <CardFooter ref={ref} className={cn("mt-auto", className)} {...props}>
      {children}
    </CardFooter>
  );
});
CardCourseAction.displayName = "CardCourseAction";

export const CardCourse = {
  Root: CardCourseRoot,
  Cover: CardCourseCover,
  Container: CardCourseContainer,
  Title: CardCourseTitle,
  Info: CardCourseInfo,
  Action: CardCourseAction,
};
