import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

import BooksyLogo from "@/assets/logos/booksy_dark_h.svg?react";
import FizjoPlusLogo from "@/assets/logos/fizjoplus_old.svg?react";
import { Button } from "@/components/ui-library/button";
import { FIZJO_PLUS_BOOKSY_URL } from "@/constants";
import { menuLinks } from "@/constants/ui";
import { useHashScroll } from "@/hooks/useHashScroll";

import { DesktopMenu } from "./DesktopMenu";

export const HeaderMenu = () => {
  const { t } = useTranslation();
  useHashScroll();

  return (
    <div className="bg-foreground fixed w-full z-10 py-2">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center px-3 py-3">
        <Link className="h-10 max-w-30" to="/">
          <FizjoPlusLogo />
        </Link>
        <DesktopMenu links={menuLinks} />
        {/* <MobileMenu links={menuLinks} /> */}
        <a
          href={FIZJO_PLUS_BOOKSY_URL}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button className="hover:shadow-aura-booksy bg-booksy hover:bg-booksy-hover transition-shadow duration-[100] ease-in-out font-bold px-4 md:px-8">
            <div>{t("introductionBanner.cta")}</div>
            <BooksyLogo className="invert ml-1 mt-[2px] -me-2" height={16} />
          </Button>
        </a>
      </div>
    </div>
  );
};
