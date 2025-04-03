"use client";

import { useTranslation } from "react-i18next";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui-library/avatar";
import { Card, CardContent } from "@/components/ui-library/card";

export const AboutSection = () => {
  const { t } = useTranslation();

  const team = ["michal", "natalia"];

  return (
    <>
      <p className="text-base-content/80">{t("sections.aboutMe.content")}</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {team.map((memberKey) => (
          <Card key={memberKey}>
            <CardContent className="flex items-center gap-4 p-6">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  alt={t(`sections.aboutMe.team.${memberKey}.name`)}
                  src={`/team/${memberKey}.jpg`}
                />
                <AvatarFallback>
                  {t(`sections.aboutMe.team.${memberKey}.name`)[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">
                  {t(`sections.aboutMe.team.${memberKey}.name`)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(`sections.aboutMe.team.${memberKey}.role`)}
                </p>
                <p className="mt-2 text-sm">
                  {t(`sections.aboutMe.team.${memberKey}.bio`)}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
