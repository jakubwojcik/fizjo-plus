import { TimelineStep } from "@/types/ui";

export const enum BUCKET {
  IMAGES = "images",
}

export const FIZJO_PLUS_BOOKSY_URL =
  "https://booksy.com/pl-pl/263535_fizjo-centrum-fizjoterapii_fizjoterapia_8820_krakow";

export const FIRST_VISIT_STEPS: Record<string, TimelineStep> = {
  CONTACT: {
    content: "Contact us to schedule your first visit.",
    title: "Contact",
  },
  DOCUMENTS: {
    content: "Upload the required documents to complete your registration.",
    title: "Documents",
  },
  PREPARATION: {
    content: "We will prepare your first visit.",
    title: "Preparation",
  },
  QUESTIONNAIRE: {
    content: "Fill out the questionnaire to help us understand your needs.",
    title: "Questionnaire",
  },
};
