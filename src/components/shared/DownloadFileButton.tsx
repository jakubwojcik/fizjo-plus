import { Button } from "@/components/ui-library/button";
import { cn } from "@/lib/utils";

interface DownloadFileButtonProps {
  href: string;
  title: string;
}

export const DownloadFileButton = ({
  href,
  title,
}: DownloadFileButtonProps) => {
  return (
    <Button
      asChild
      className={cn("text-sm", "hover:bg-primary/90", "active:bg-primary/70")}
      variant="outline"
    >
      <a download href={href}>
        {title}
      </a>
    </Button>
  );
};
