import type { ProgressCircleProps } from "./progress-circle.types";

export const ProgressCircle = ({ percentage }: ProgressCircleProps) => {
  const size = 40;
  const strokeWidth = 4;
  const radius = size / 2;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg height={size} width={size} className="rotate-[-90deg]">
        <defs>
          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#5C15A7" />
            <stop offset="100%" stopColor="#0098BD" />
          </linearGradient>
        </defs>
        {/* Background track */}
        <circle
          stroke="#2c004f"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress indicator with gradient */}
        <circle
          stroke="url(#progressGradient)"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      {/* Percentage text */}
      <span
        className="absolute text-[#72e9ff] text-[10px] font-bold"
        style={{ transform: "translate(-50%, -50%)", left: "50%", top: "50%" }}
      >
        {percentage}%
      </span>
    </div>
  );
};
