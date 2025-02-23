import { IconInfo } from "../../icons";
import { Badge } from "../../ui/badge";
import { MAP_TEXTS } from "./section-badges.constants";
import { SectionHeader } from "./section-header";

export const SectionBadges = () => {
  return (
    <section className="flex flex-col gap-4 mt-4">
      <SectionHeader title={MAP_TEXTS.BADGES}>
        <IconInfo />
      </SectionHeader>
      <div className="flex flex-col justify-center items-center">
        <Badge>{MAP_TEXTS.COMING_SOON}</Badge>
      </div>
    </section>
  );
};
