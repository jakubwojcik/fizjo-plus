import { ReactNode } from "react";

import { HeaderMenu } from "@/components/layout/HeaderMenu.tsx";
import { ScrollArea } from "@/components/ui-library/scroll-area";

type ViewProps = {
  children: ReactNode;
};

export const View = ({ children }: ViewProps) => {
  return (
    <>
      <HeaderMenu />
      <ScrollArea className="pt-32 lg:pt-20">
        <div className="px-3 mx-auto max-w-screen-lg">{children}</div>
      </ScrollArea>
    </>
  );
};
