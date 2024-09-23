import { ReactNode } from "react";

import { HeaderMenu } from "@/components/layout/HeaderMenu.tsx";
import { AuthGuard } from "@/components/shared/AuthGuard.tsx";

type ViewProps = {
  children: ReactNode;
  isProtected?: boolean;
};

export const View = ({ children, isProtected }: ViewProps) => {
  const viewComponent = (
    <>
      <HeaderMenu />
      <div className="px-3 mx-auto max-w-screen-lg">{children}</div>
    </>
  );

  if (!isProtected) {
    return viewComponent;
  }

  return <AuthGuard>{viewComponent}</AuthGuard>;
};
