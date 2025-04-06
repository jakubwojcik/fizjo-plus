"use client";

import { useTranslation } from "react-i18next";

import { Card, CardContent } from "@/components/ui-library/card";

export const AboutSection = () => {
  const { t } = useTranslation();

  const team = ["michal", "natalia"];

  return (
    <>
      <p className="text-base-content/80">{t("sections.aboutUs.content")}</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {team.map((memberKey) => (
          <Card key={memberKey}>
            <CardContent className="flex items-center gap-4 p-6">
              <div>
                <h3 className="text-lg font-semibold">
                  {t(`sections.aboutUs.team.${memberKey}.name`)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(`sections.aboutUs.team.${memberKey}.role`)}
                </p>
                <p className="mt-2 text-sm">
                  {t(`sections.aboutUs.team.${memberKey}.bio`)}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
