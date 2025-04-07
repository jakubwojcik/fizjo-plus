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
      name: t("sections.pricing.categories.massage"),
      services: [
        {
          name: t("sections.pricing.services.massage.relaxing"),
          variants: [
            { duration: "30min", price: 100 },
            { duration: "55min", price: 140 },
          ],
        },
        {
          name: t("sections.pricing.services.massage.fascia"),
          variants: [
            { duration: "30min", price: 100 },
            { duration: "55min", price: 140 },
          ],
        },
        {
          name: t("sections.pricing.services.massage.wholebody"),
          variants: [{ duration: "55min", price: 160 }],
        },
        {
          name: t("sections.pricing.services.massage.therapeutic"),
          variants: [
            { duration: "30min", price: 100 },
            { duration: "55min", price: 140 },
          ],
        },
        {
          name: t("sections.pricing.services.massage.sports"),
          variants: [
            { duration: "30min", price: 100 },
            { duration: "55min", price: 140 },
          ],
        },
        {
          name: t("sections.pricing.services.massage.lymphatic"),
          variants: [{ duration: "55min", price: 160 }],
        },
      ],
    },
    {
      name: t("sections.pricing.categories.other"),
      services: [
        {
          name: t("sections.pricing.services.other.physiotherapy"),
          variants: [{ duration: "55min", price: 140 }],
        },
        {
          name: t("sections.pricing.services.other.kinesiotherapy"),
          variants: [{ duration: "55min", price: 140 }],
        },
        {
          name: t("sections.pricing.services.other.tmj"),
          variants: [{ duration: "55min", price: 180 }],
        },
        {
          name: t("sections.pricing.services.other.shockwave"),
          variants: [{ duration: "20min", price: 90 }],
        },
        {
          name: t("sections.pricing.services.other.pediatric"),
          variants: [{ duration: "55min", price: 160 }],
        },
      ],
    },
  ];

  const displayCategories = categories || defaultCategories;

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
                  <TableHead>{t("sections.pricing.table.duration")}</TableHead>
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
                            {priceFormat.format(variant.price)}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </Fragment>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
