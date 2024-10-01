import { Logo } from "@/components/layout/Logo.tsx";
import { menuLinks } from "@/constants/ui";
import { useHashScroll } from "@/hooks/useHashScroll";

import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

export const HeaderMenu = () => {
  useHashScroll();

  return (
    <div className="bg-foreground fixed w-full z-10">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center px-3 py-3">
        <Logo />
        <DesktopMenu links={menuLinks} />
        <MobileMenu links={menuLinks} />
      </div>
    </div>
  );
};
