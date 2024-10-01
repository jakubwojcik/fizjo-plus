import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

import { headerMenuHeight } from "@/constants/ui";

export const useHashScroll = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -headerMenuHeight;
        const yPosition =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ behavior: "smooth", top: yPosition });
      }
    }
  }, [location]);
};
