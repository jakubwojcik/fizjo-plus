/* eslint-disable perfectionist/sort-objects */
import { IntroductionBanner } from "@/components/layout/IntroductionBanner";
import { Section } from "@/components/layout/Section";
import { RichTrans } from "@/components/shared/RichTrans";
import { AboutSection } from "@/components/views/sections/AboutSection";
import { ContactSection } from "@/components/views/sections/ContactSection";
import { FirstVisitSection } from "@/components/views/sections/FirstVisitSection";
import { HomeVisitsSection } from "@/components/views/sections/HomeVisitsSection";
import { PricingSection } from "@/components/views/sections/PricingSection";
import { ServicesSection } from "@/components/views/sections/ServicesSection";

const sections = {
  aboutUs: {
    component: <AboutSection />,
    contentKey: "sections.aboutUs.content",
    linkHash: "about-me",
    linkKey: "navigation.aboutUs",
    titleKey: "sections.aboutUs.title",
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
  // eslint-disable-next-line sort-keys
  pricing: {
    component: <PricingSection />,
    contentKey: "sections.pricing.content",
    linkHash: "pricing",
    linkKey: "navigation.pricing",
    titleKey: "sections.pricing.title",
  },
  // eslint-disable-next-line sort-keys
  homeVisits: {
    component: <HomeVisitsSection />,
    contentKey: "sections.homeVisits.content",
    linkHash: "home-visits",
    linkKey: "navigation.homeVisits",
    titleKey: "sections.homeVisits.title",
  },
  // eslint-disable-next-line sort-keys
  contact: {
    component: <ContactSection />,
    contentKey: "sections.contact.content",
    linkHash: "contact",
    linkKey: "navigation.contact",
    titleKey: "sections.contact.title",
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
