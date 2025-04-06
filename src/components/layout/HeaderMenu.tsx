import { Link } from "@tanstack/react-router";

import FizjoPlusLogo from "@/assets/logos/fizjoplus_old.svg?react";
import { BooksyButton } from "@/components/shared/BooksyButton";
import { useHashScroll } from "@/hooks/useHashScroll";

export const HeaderMenu = () => {
  useHashScroll();

  return (
    <div className="bg-foreground fixed w-full z-10 py-2">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center px-3 py-3">
        <Link className="h-10 max-w-30" to="/">
          <FizjoPlusLogo />
        </Link>
        <BooksyButton />
      </div>
    </div>
  );
};
