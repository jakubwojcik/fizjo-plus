import { MenuLink, Section } from "@/types/ui";

export const sections: Record<string, Section> = {
  // aboutMe: {
  //   contentKey: "sections.aboutMe.content",
  //   linkHash: "about-me",
  //   linkKey: "navigation.aboutMe",
  //   titleKey: "sections.aboutMe.title",
  // },
  // bookAppointment: {
  //   contentKey: "sections.bookAppointment.content",
  //   linkHash: "book-appointment",
  //   linkKey: "navigation.bookAppointment",
  //   titleKey: "sections.bookAppointment.title",
  // },
  // faq: {
  //   contentKey: "sections.faq.content",
  //   linkHash: "faq",
  //   linkKey: "navigation.faq",
  //   titleKey: "sections.faq.title",
  // },
  // howCanIHelp: {
  //   contentKey: "sections.howCanIHelp.content",
  //   linkHash: "how-can-i-help",
  //   linkKey: "navigation.howCanIHelp",
  //   titleKey: "sections.howCanIHelp.title",
  // },
  // pricing: {
  //   contentKey: "sections.pricing.content",
  //   linkHash: "pricing",
  //   linkKey: "navigation.pricing",
  //   titleKey: "sections.pricing.title",
  // },
  // treatmentMethods: {
  //   contentKey: "sections.treatmentMethods.content",
  //   linkHash: "treatment-methods",
  //   linkKey: "navigation.treatmentMethods",
  //   titleKey: "sections.treatmentMethods.title",
  // },
};

export const menuLinks: MenuLink[] = Object.values(sections).map(
  ({ linkHash, linkKey }) => ({
    href: `/#${linkHash}`,
    id: linkHash,
    title: linkKey,
  }),
);

export const headerMenuHeight = 72;
