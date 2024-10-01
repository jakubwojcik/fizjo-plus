import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      {/* <div className="w-full p-4 shadow-md">
        <NavigationMenu>
          <NavigationMenuList className="gap-2 bg-background px-2 py-2">
            <NavigationMenuItem>
              <Link className="[&.active]:font-bold" to="/">
                Home
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
      </div> */}

      <Outlet />
    </>
  ),
  errorComponent: () => <div>ErrorComponent (To implement)</div>,
});
