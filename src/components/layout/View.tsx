import { ReactNode } from "react";

import { HeaderMenu } from "@/components/layout/HeaderMenu.tsx";
import { AuthGuard } from "@/components/shared/AuthGuard.tsx";
import { ScrollArea } from "@/components/ui-library/scroll-area";

type ViewProps = {
  children: ReactNode;
  isProtected?: boolean;
};

export const View = ({ children, isProtected }: ViewProps) => {
  const viewComponent = (
    <>
      <HeaderMenu />
      <ScrollArea className="pt-20">
        <div className="px-3 mx-auto max-w-screen-lg">{children}</div>
      </ScrollArea>
    </>
  );

  if (!isProtected) {
    return viewComponent;
  }

  return <AuthGuard>{viewComponent}</AuthGuard>;
};
