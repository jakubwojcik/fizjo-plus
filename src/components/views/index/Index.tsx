import { IntroductionBanner } from "@/components/layout/IntroductionBanner.tsx";
import { Section } from "@/components/layout/Section";
import { RichTrans } from "@/components/shared/RichTrans";
import { sections } from "@/constants/ui";

export const Index = () => (
  <div className="px-2">
    <IntroductionBanner />

    {Object.values(sections).map(({ contentKey, linkHash, titleKey }) => (
      <Section id={linkHash} titleKey={titleKey}>
        <RichTrans i18nKey={contentKey} />
      </Section>
    ))}
  </div>
);
