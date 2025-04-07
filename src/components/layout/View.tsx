import { ReactNode } from "react";

import { HeaderMenu } from "@/components/layout/HeaderMenu.tsx";

type ViewProps = {
  children: ReactNode;
};

export const View = ({ children }: ViewProps) => {
  return (
    <div className="flex flex-col h-full">
      <HeaderMenu />
      <div className="mt-[132px] sm:mt-[80px] overflow-y-auto">
        <div className="flex-grow px-3 mx-auto max-w-screen-lg">{children}</div>
      </div>
    </div>
  );
};
