import { IntroductionBanner } from "@/components/layout/IntroductionBanner";
import { Section } from "@/components/layout/Section";
import { RichTrans } from "@/components/shared/RichTrans";
import { AboutSection } from "@/components/views/sections/AboutSection";
import { ContactSection } from "@/components/views/sections/ContactSection";
import { FirstVisitSection } from "@/components/views/sections/FirstVisitSection";
import { ServicesSection } from "@/components/views/sections/ServicesSection";

const sections = {
  aboutMe: {
    component: <AboutSection />,
    contentKey: "sections.aboutMe.content",
    linkHash: "about-me",
    linkKey: "navigation.aboutMe",
    titleKey: "sections.aboutMe.title",
  },
  contact: {
    component: <ContactSection />,
    contentKey: "sections.contact.content",
    linkHash: "contact",
    linkKey: "navigation.contact",
    titleKey: "sections.contact.title",
  },
  firstVisit: {
    component: <FirstVisitSection />,
    contentKey: "sections.firstVisit.content",
    linkHash: "first-visit",
    linkKey: "navigation.firstVisit",
    titleKey: "sections.firstVisit.title",
  },
  services: {
    component: <ServicesSection />,
    contentKey: "sections.services.content",
    linkHash: "services",
    linkKey: "navigation.services",
    titleKey: "sections.services.title",
  },
};

export const Index = () => (
  <div className="px-2">
    <IntroductionBanner />

    {Object.values(sections).map(
      ({ component, contentKey, linkHash, titleKey }) => (
        <Section key={linkHash} id={linkHash} titleKey={titleKey}>
          {component || <RichTrans i18nKey={contentKey} />}
        </Section>
      ),
    )}
  </div>
);
