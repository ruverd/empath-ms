import { Badge } from "../ui/badge";

interface ComingSoonPageProps {
  featureName: string;
}

export const ComingSoonPage = ({ featureName }: ComingSoonPageProps) => {
  return (
    <div className="flex min-h-[calc(100vh-68px)] items-center justify-center p-6">
      <div className="relative flex flex-col items-center justify-center p-8 border border-primary-violet rounded-2xl bg-gradient-to-b from-[rgba(17,0,55,0.7)] to-[#2B1553] max-w-lg w-full gap-6">
        <Badge variant="default" className="absolute -top-3">
          Coming Soon
        </Badge>
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-2xl font-bold text-shades-violet-8">
            {featureName}
          </h1>
          <p className="text-base text-secondary-foreground">
            We're working hard to bring you an amazing{" "}
            {featureName.toLowerCase()} experience. Stay tuned for exciting
            updates as we enhance our platform to serve you better!
          </p>
        </div>
      </div>
    </div>
  );
};
