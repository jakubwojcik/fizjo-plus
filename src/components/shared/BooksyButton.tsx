import { Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

import BooksyLogo from "@/assets/logos/booksy_dark_h.svg?react";
import { Button } from "@/components/ui-library/button";
import { FIZJO_PLUS_BOOKSY_URL } from "@/constants";
import { cn } from "@/lib/utils";

interface BooksyButtonProps {
  subTitleClassNames?: string;
}

export const BooksyButton = ({ subTitleClassNames }: BooksyButtonProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        "flex flex-col items-end gap-4 sm:flex-row sm:items-center",
      )}
    >
      <a href={FIZJO_PLUS_BOOKSY_URL} rel="noopener noreferrer" target="_blank">
        <Button className="hover:shadow-aura-booksy bg-booksy hover:bg-booksy-hover transition-shadow duration-[100] ease-in-out font-bold px-4 md:px-8">
          <div>{t("booksy.cta")}</div>
          <BooksyLogo className="invert ml-1 mt-[2px] -me-2" height={16} />
        </Button>
      </a>

      <div
        className={cn("flex items-center gap-2 text-white", subTitleClassNames)}
      >
        <Phone className="inline-block h-4 w-4" />
        <a className="text-sm" href={`tel:${t("sections.contact.phone")}`}>
          {t("sections.contact.phone")}
        </a>
      </div>
    </div>
  );
};
