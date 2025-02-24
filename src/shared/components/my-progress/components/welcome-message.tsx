import { MAP_TEXTS } from "./welcome-message.constants";
import type { WelcomeMessageProps } from "./welcome-message.types";

export const WelcomeMessage = ({ name }: WelcomeMessageProps) => {
  return (
    <header className="flex flex-col items-center">
      <span className="text-lg font-bold text-accent-foreground">
        {MAP_TEXTS.WELCOME_MESSAGE}
      </span>
      <h3 className="text-2xl font-bold text-primary-cloud max-w-[200px] truncate">
        {name}!
      </h3>
    </header>
  );
};
