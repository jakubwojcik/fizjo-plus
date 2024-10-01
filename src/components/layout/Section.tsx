import { ReactNode } from "@tanstack/react-router";

import { RichTrans } from "@/components/shared/RichTrans";

interface SectionProps {
  children: ReactNode;
  titleKey: string;
  id?: string;
}

export const Section = ({ children, id, titleKey }: SectionProps) => (
  <section className="w-full py-8" id={id}>
    <h2 className="text-3xl font-bold mb-6">
      <RichTrans i18nKey={titleKey} />
    </h2>
    <div>{children}</div>
  </section>
);
