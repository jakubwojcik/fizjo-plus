import { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer.tsx";
import { HeaderMenu } from "@/components/layout/HeaderMenu.tsx";

type ViewProps = {
  children: ReactNode;
};

export const View = ({ children }: ViewProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderMenu />
      <div className="flex-grow mt-[132px] sm:mt-[80px] overflow-y-auto">
        <div className="flex-grow px-3 mx-auto max-w-screen-lg pb-4">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};
