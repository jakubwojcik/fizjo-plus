import { ReactNode } from "react";

import { HeaderMenu } from "@/components/layout/HeaderMenu.tsx";

type ViewProps = {
  children: ReactNode;
};

export const View = ({ children }: ViewProps) => {
  return (
    <>
      <HeaderMenu />
      <div className="px-3 mx-auto max-w-screen-lg">{children}</div>
    </>
  );
};
