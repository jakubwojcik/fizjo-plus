import { Link } from "@tanstack/react-router";

import LogoImage from "@/assets/logo/dark_h.svg?react";

export const Logo = () => {
  return (
    <Link className="h-12" to="/">
      <LogoImage />
    </Link>
  );
};
