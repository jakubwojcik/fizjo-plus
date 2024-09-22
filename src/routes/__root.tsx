import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui-library/navigation-menu";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="w-full p-4 shadow-md mb-4">
        <NavigationMenu>
          <NavigationMenuList className="gap-2 bg-background px-2 py-2">
            <NavigationMenuItem>
              <Link className="[&.active]:font-bold" to="/">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className="[&.active]:font-bold" to="/register">
                Register
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className="[&.active]:font-bold" to="/login">
                Login
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className="[&.active]:font-bold" to="/logout">
                Logout | 🔑
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  errorComponent: () => <div>ErrorComponent (To implement)</div>,
});
