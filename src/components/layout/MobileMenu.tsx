import { Link } from "@tanstack/react-router";
import { MenuIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui-library/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui-library/navigation-menu";
import { ScrollArea } from "@/components/ui-library/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui-library/sheet";
import { cn } from "@/lib/utils";
import { MenuLink } from "@/types/ui";

interface MobileMenuProps {
  links: MenuLink[];
}

export const MobileMenu = ({ links }: MobileMenuProps) => {
  const { t } = useTranslation();

  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button className="text-background" size="icon" variant="ghost">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="pt-20 w-[320px]" side="right">
        <ScrollArea>
          <NavigationMenu className="block max-w-full">
            <NavigationMenuList className="block space-x-0">
              {links.map(({ href, id, title }) => (
                <NavigationMenuItem key={id}>
                  <Link
                    className={cn(
                      "block py-4 px-6 rounded-md uppercase font-raleway font-semibold hover:bg-white hover:text-foreground transition-colors [&.active]:bg-white [&.active]:text-foreground",
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
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
