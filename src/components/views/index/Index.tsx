import { IntroductionBanner } from "@/components/layout/IntroductionBanner.tsx";
import { Section } from "@/components/layout/Section";
import { RichTrans } from "@/components/shared/RichTrans";

const temporarySections = {
  aboutMe: {
    contentKey: "sections.aboutMe.content",
    linkHash: "about-me",
    linkKey: "navigation.aboutMe",
    titleKey: "sections.aboutMe.title",
  },
  howCanIHelp: {
    contentKey: "sections.howCanIHelp.content",
    linkHash: "how-can-i-help",
    linkKey: "navigation.howCanIHelp",
    titleKey: "sections.howCanIHelp.title",
  },
};

export const Index = () => (
  <div className="px-2">
    <IntroductionBanner />

    {Object.values(temporarySections).map(
      ({ contentKey, linkHash, titleKey }) => (
        <Section key={linkHash} id={linkHash} titleKey={titleKey}>
          <RichTrans i18nKey={contentKey} />
        </Section>
      ),
    )}
  </div>
);
