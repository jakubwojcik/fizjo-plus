"use client";

import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { Trans, useTranslation } from "react-i18next";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui-library/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui-library/carousel";
import { serviceImages, services } from "@/constants/ui";

export const ServicesSection = () => {
  const { t } = useTranslation();
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

  return (
    <>
      <p className="text-base-content/80">{t("sections.services.content")}</p>

      <Carousel
        className="mt-8 w-full relative px-4"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
      >
        <CarouselContent className="-ml-4">
          {services.map((serviceKey) => (
            <CarouselItem
              key={serviceKey}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="overflow-hidden h-full">
                <div className="relative h-48 w-full">
                  <img
                    alt={t(
                      `sections.services.treatmentMethods.${serviceKey}.title`,
                    )}
                    className="h-full w-full object-cover"
                    src={serviceImages[serviceKey].image}
                    style={{
                      objectFit: serviceImages[serviceKey].objectFit || "cover",
                      objectPosition: serviceImages[serviceKey].objectPosition,
                    }}
                  />
                </div>
                <CardHeader>
                  <CardTitle>
                    {t(
                      `sections.services.treatmentMethods.${serviceKey}.title`,
                    )}
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full" />
      </Carousel>
    </>
  );
};
