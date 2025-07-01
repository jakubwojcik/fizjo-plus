import { Fragment } from "react";
import { useTranslation } from "react-i18next";

import { Card, CardContent } from "@/components/ui-library/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui-library/table";
import { cn } from "@/lib/utils";

export interface ServiceVariant {
  duration: string;
  price: number;
  discountedPrice?: number;
}

export interface Service {
  name: string;
  variants: ServiceVariant[];
}

export interface ServiceCategory {
  name: string;
  services: Service[];
}

const priceFormat = new Intl.NumberFormat("pl-PL", {
  currency: "PLN",
  minimumFractionDigits: 0,
  style: "currency",
});

interface PricingTableProps {
  categories?: ServiceCategory[];
  className?: string;
}

export const PricingTable = ({ categories, className }: PricingTableProps) => {
  const { t } = useTranslation();

  const defaultCategories: ServiceCategory[] = [
    {
      name: t("sections.pricing.categories.therapy"),
      services: [
        {
          name: t("sections.pricing.services.therapy.manual"),
          variants: [
            { duration: "30min", price: 100 },
            { duration: "50-55min", price: 150 },
          ],
        },
        {
          name: t("sections.pricing.services.therapy.kinesiotherapy"),
          variants: [
            { duration: "30min", price: 100 },
            { duration: "50-55min", price: 150 },
          ],
        },
        {
          name: t("sections.pricing.services.therapy.personal_training"),
          variants: [{ duration: "60min", price: 150 }],
        },
        {
          name: t("sections.pricing.services.therapy.corrective_gymnastics"),
          variants: [{ duration: "45min", price: 150 }],
        },
        {
          name: t("sections.pricing.services.therapy.kinesiotaping"),
          variants: [{ discountedPrice: 90, duration: "1x", price: 40 }],
        },
        {
          name: t("sections.pricing.services.therapy.diagnostic_visit"),
          variants: [{ duration: "30min", price: 150 }],
        },
        {
          name: t("sections.pricing.services.therapy.home_visit"),
          variants: [{ duration: "", price: 180 }],
        },
      ],
    },
    {
      name: t("sections.pricing.categories.massage"),
      services: [
        {
          name: t("sections.pricing.services.massage.general"),
          variants: [
            { duration: "30min", price: 100 },
            { duration: "50-55min", price: 150 },
          ],
        },
        {
          name: t("sections.pricing.services.massage.cupping"),
          variants: [
            { duration: "30min", price: 100 },
            { duration: "50-55min", price: 150 },
          ],
        },
        {
          name: t("sections.pricing.services.massage.lymphatic"),
          variants: [
            { duration: "30min", price: 100 },
            { duration: "50-55min", price: 150 },
          ],
        },
      ],
    },
    {
      name: t("sections.pricing.categories.shockwave"),
      services: [
        {
          name: t("sections.pricing.services.shockwave.single_area"),
          variants: [{ duration: "1x", price: 100 }],
        },
        {
          name: t("sections.pricing.services.shockwave.double_area"),
          variants: [{ duration: "2x", price: 160 }],
        },
        {
          name: t("sections.pricing.services.shockwave.combo_manual"),
          variants: [{ duration: "30min + 1x", price: 180 }],
        },
      ],
    },
    {
      name: t("sections.pricing.categories.physiotherapy"),
      services: [
        {
          name: t("sections.pricing.services.physiotherapy.ultrasound"),
          variants: [
            { duration: "5min", price: 20 },
            { duration: "10x", price: 200 },
          ],
        },
        {
          name: t("sections.pricing.services.physiotherapy.sollux"),
          variants: [
            { duration: "15-20min", price: 20 },
            { duration: "10x", price: 200 },
          ],
        },
        {
          name: t("sections.pricing.services.physiotherapy.electrotherapy"),
          variants: [
            { duration: "20min", price: 20 },
            { duration: "10x", price: 200 },
          ],
        },
        {
          name: t("sections.pricing.services.physiotherapy.package_30"),
          variants: [{ duration: "10×3", price: 550 }],
        },
      ],
    },
  ];

  const displayCategories = categories || defaultCategories;

  const getColumnType = (category: ServiceCategory) => {
    const allVariants = category.services.flatMap(
      (service) => service.variants,
    );

    // Regex patterns
    const timePattern = /\d+min/; // matches {number}min
    const sessionPattern = /\d+[x×]/; // matches {number}x or {number}×

    let hasTimeOnly = false;
    let hasSessionOnly = false;
    let hasCombo = false;

    allVariants.forEach((variant) => {
      if (!variant.duration) return;

      const hasTime = timePattern.test(variant.duration);
      const hasSession = sessionPattern.test(variant.duration);

      if (hasTime && hasSession) {
        hasCombo = true;
      } else if (hasTime) {
        hasTimeOnly = true;
      } else if (hasSession) {
        hasSessionOnly = true;
      }
    });

    // Determine column type based on what we found
    if (hasCombo || (hasTimeOnly && hasSessionOnly)) {
      return "duration_sessions";
    } else if (hasSessionOnly) {
      return "sessions";
    } else {
      return "duration";
    }
  };

  return (
    <div className={cn("space-y-6", className)}>
      {displayCategories.map((category, categoryIndex) => (
        <Card key={categoryIndex}>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40%]">
                    {t("sections.pricing.table.service")}
                  </TableHead>
                  <TableHead>
                    {t(`sections.pricing.table.${getColumnType(category)}`)}
                  </TableHead>
                  <TableHead className="text-right">
                    {t("sections.pricing.table.price")}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {category.services.map((service, serviceIndex) => (
                  <Fragment key={serviceIndex}>
                    {service.variants.map((variant, variantIndex) => (
                      <TableRow key={`${serviceIndex}-${variantIndex}`}>
                        {variantIndex === 0 && (
                          <TableCell
                            className="font-medium"
                            rowSpan={service.variants.length}
                          >
                            {service.name}
                          </TableCell>
                        )}
                        <TableCell>{variant.duration}</TableCell>
                        <TableCell className="text-right">
                          <div className="font-medium">
                            {variant.discountedPrice
                              ? `${priceFormat.format(variant.price)}-${priceFormat.format(variant.discountedPrice)}`
                              : service.name ===
                                  t(
                                    "sections.pricing.services.therapy.home_visit",
                                  )
                                ? `od ${priceFormat.format(variant.price)}`
                                : priceFormat.format(variant.price)}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </Fragment>
                ))}
              </TableBody>
            </Table>
            {category.name ===
              t("sections.pricing.categories.physiotherapy") && (
              <div className="mt-4 text-sm text-muted-foreground whitespace-pre-line">
                {t("sections.pricing.notes.package_validity")}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
