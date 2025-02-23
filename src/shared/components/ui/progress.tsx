import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as React from "react";

import { cn } from "@/shared/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-shades-violet-2",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 rounded-full transition-all"
      style={{
        background: "linear-gradient(90deg, #5C15A7 0%, #0086A6 94.17%)",
        width: `${value}%`,
      }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
