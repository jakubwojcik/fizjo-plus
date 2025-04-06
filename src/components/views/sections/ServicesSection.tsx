"use client";

import { Trans, useTranslation } from "react-i18next";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui-library/card";
import { SERVICE_IMAGES, services } from "@/constants/ui";

export const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-base-content/80">{t("sections.services.content")}</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((serviceKey) => (
          <Card key={serviceKey} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <img
                alt={t(
                  `sections.services.treatmentMethods.${serviceKey}.title`,
                )}
                className="h-full w-full object-cover"
                src={SERVICE_IMAGES[serviceKey].image}
                style={{
                  objectFit: SERVICE_IMAGES[serviceKey].objectFit || "cover",
                  objectPosition: SERVICE_IMAGES[serviceKey].objectPosition,
                }}
              />
            </div>
            <CardHeader>
              <CardTitle>
                {t(`sections.services.treatmentMethods.${serviceKey}.title`)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                <Trans
                  i18nKey={`sections.services.treatmentMethods.${serviceKey}.description`}
                />
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
