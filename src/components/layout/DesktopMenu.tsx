import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui-library/navigation-menu";
import { cn } from "@/lib/utils";
import { MenuLink } from "@/types/ui";

interface DesktopMenuProps {
  links: MenuLink[];
}

export const DesktopMenu = ({ links }: DesktopMenuProps) => {
  const { t } = useTranslation();

  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        {links.map(({ href, id, title }) => (
          <NavigationMenuItem key={id} className="self-end">
            <Link
              className={cn(
                "py-2 px-3 rounded-md text-background hover:bg-white hover:text-foreground transition-colors ease-in-out uppercase font-raleway font-semibold text-sm [&.active]:bg-white [&.active]:text-foreground",
                id === "book-appointment" &&
                  "ring-2 ring-inset ring-blue-600 hover:ring-0",
              )}
              to={href}
            >
              {t(title)}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
