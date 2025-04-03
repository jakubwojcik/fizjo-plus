import { ReactNode } from "react";

export type MenuLink = {
  href: string;
  title: string;
  id: string;
};

export type Section = {
  titleKey: string;
  contentKey: string;
  linkHash: string;
  linkKey: string;
};

export type TimelineStep = {
  title: string;
  content?: string | ReactNode;
  component?: ReactNode;
};
