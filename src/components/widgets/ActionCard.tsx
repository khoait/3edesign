import { H2, H4 } from "../typography";
import { ButtonLink } from "./button";

export interface ActionCardProps {
  title: string;
  description?: string;
  cta?: string;
  ctaUrl?: string;
  image?: React.ReactNode;
  imageDark?: React.ReactNode;
}

function ActionCard({
  title,
  description,
  cta,
  ctaUrl,
  image,
  imageDark,
}: ActionCardProps) {
  return (
    <div className="relative h-full w-full pt-12">
      <div className="relative block h-full w-full rounded-lg bg-gray-100 px-8 pb-10 pt-36 md:px-16 md:pb-20 dark:bg-gray-800">
        <H2>{title}</H2>
        <div className="mt-4 max-w-sm">
          <H4
            variant="secondary"
            as="p"
            className="inline-flex flex-col flex-wrap sm:flex-row">
            {description}
          </H4>
        </div>

        <div className="mt-16">
          <ButtonLink href={ctaUrl}>{cta}</ButtonLink>
        </div>
      </div>

      {image ? (
        <div className="{title} absolute left-16 top-0 dark:hidden">
          {image}
        </div>
      ) : null}

      {imageDark ? (
        <div className="{title} absolute left-16 top-0 hidden dark:block">
          {imageDark}
        </div>
      ) : null}
    </div>
  );
}

export { ActionCard };
