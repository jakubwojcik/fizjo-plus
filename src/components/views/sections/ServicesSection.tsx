"use client";

import { useTranslation } from "react-i18next";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui-library/card";

const PLACEHOLDER_IMAGES = {
  geriatric: "physiotherapy-elderly",
  neurological: "physiotherapy-neuro",
  orthopedic: "physiotherapy-ortho",
  postTrauma: "physiotherapy-trauma",
  posture: "physiotherapy-posture",
  sports: "physiotherapy-sports",
} as const;

export const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    "orthopedic",
    "sports",
    "postTrauma",
    "neurological",
    "geriatric",
    "posture",
  ] as const;

  return (
    <>
      <p className="text-base-content/80">
        {t("sections.howCanIHelp.content")}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((serviceKey) => (
          <Card key={serviceKey} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <img
                alt={t(`sections.howCanIHelp.services.${serviceKey}.title`)}
                className="h-full w-full object-cover"
                src={`https://placehold.co/600x400/e2e8f0/64748b?text=${PLACEHOLDER_IMAGES[serviceKey]}`}
              />
            </div>
            <CardHeader>
              <CardTitle>
                {t(`sections.howCanIHelp.services.${serviceKey}.title`)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {t(`sections.howCanIHelp.services.${serviceKey}.description`)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid gap-4 text-sm text-muted-foreground">
        <p>{t("sections.howCanIHelp.additional.homeVisits")}</p>
        <p>{t("sections.howCanIHelp.additional.location")}</p>
        <p>{t("sections.howCanIHelp.additional.equipment")}</p>
      </div>
    </>
  );
};
