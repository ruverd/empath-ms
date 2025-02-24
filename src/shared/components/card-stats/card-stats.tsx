import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import type { CardStatsProps } from "./card-stats.types";

export const CardStats = ({
  icon: Icon,
  title,
  highlightText,
  auxText,
}: CardStatsProps) => {
  const renderAuxText = () => {
    if (auxText) {
      return (
        <span className="text-sm font-medium text-primary-cloud">
          {auxText}
        </span>
      );
    }

    return null;
  };

  return (
    <Card className="border border-shades-violet-2 bg-transparent px-1.5 py-2 flex flex-col-reverse">
      <CardHeader className="p-0">
        <CardTitle className="flex items-center gap-0.5 text-primary-cloud justify-center">
          <Icon />
          <span className="text-xs font-medium">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex flex-row items-center justify-center">
        <strong className="font-bold text-lg text-shades-aqua-8">
          {highlightText}
        </strong>
        {renderAuxText()}
      </CardContent>
    </Card>
  );
};
