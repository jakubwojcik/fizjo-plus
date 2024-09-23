import { Link } from "@tanstack/react-router";

import { Logo } from "@/components/layout/Logo.tsx";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui-library/navigation-menu.tsx";

type TopbarLink = {
  href: string;
  title: string;
  id: string;
};

const topbarLinks: TopbarLink[] = [
  {
    href: "/#jak-moge-pomoc",
    id: "jak-moge-pomoc",
    title: "Jak mogę pomóc",
  },
  {
    href: "/#cennik",
    id: "cennik",
    title: "Cennik",
  },
  {
    href: "/#umow-wizyte",
    id: "umow-wizyte",
    title: "Umów wizytę",
  },
  {
    href: "/#metody-leczenia",
    id: "metody-leczenia",
    title: "Metody leczenia",
  },
  {
    href: "/#o-mnie",
    id: "o-mnie",
    title: "O mnie",
  },
  {
    href: "/#kontakt",
    id: "kontakt",
    title: "Kontakt",
  },
  {
    href: "/#faq",
    id: "faq",
    title: "FAQ",
  },
];

export const HeaderMenu = () => {
  const topbarLinksComponents = topbarLinks.map(({ href, id, title }) => (
    <NavigationMenuItem key={id}>
      <Link
        className="[&.active]:bg-white [&.active]:text-foreground py-2 px-3 rounded-md text-background hover:bg-white hover:text-foreground transition-colors ease-in-out uppercase font-raleway font-semibold text-sm"
        to={href}
      >
        {title}
      </Link>
    </NavigationMenuItem>
  ));
  return (
    <div className="bg-foreground">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center px-3 py-3">
        <Logo />
        <NavigationMenu>
          <NavigationMenuList className="flex gap-1">
            {topbarLinksComponents}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};
