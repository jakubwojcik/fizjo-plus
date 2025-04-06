import massageImg from "@/assets/images/services/massage.jpg";
import neurologicalImg from "@/assets/images/services/neurological.jpg";
import orthopedicImg from "@/assets/images/services/orthopedic.jpg";
import pediatricImg from "@/assets/images/services/pediatric.jpg";
import physiotherapyImg from "@/assets/images/services/physiotherapy.jpg";
import postTraumaImg from "@/assets/images/services/postTrauma.jpg";
import postureImg from "@/assets/images/services/posture.jpg";
import sportsImg from "@/assets/images/services/sports.jpg";
import { ServiceImage } from "@/types/ui";

export const headerMenuHeight = 72;

export const services = [
  "orthopedic",
  "sports",
  "postTrauma",
  "neurological",
  "geriatric",
  "posture",
  "pediatric",
  "massage",
  "physiotherapy",
] as const;

export const SERVICE_IMAGES: Record<(typeof services)[number], ServiceImage> = {
  geriatric: {
    image: physiotherapyImg,
    objectPosition: "center",
  },
  massage: {
    image: massageImg,
    objectPosition: "center top",
  },
  neurological: {
    image: neurologicalImg,
    objectPosition: "center",
  },
  orthopedic: {
    image: orthopedicImg,
    objectPosition: "left 70%",
  },
  pediatric: {
    image: pediatricImg,
    objectPosition: "center 20%",
  },
  physiotherapy: {
    image: physiotherapyImg,
    objectPosition: "center",
  },
  postTrauma: {
    image: postTraumaImg,
    objectPosition: "center 55%",
  },
  posture: {
    image: postureImg,
    objectPosition: "center",
  },
  sports: {
    image: sportsImg,
    objectPosition: "center center",
  },
} as const;
