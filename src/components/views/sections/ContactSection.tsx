import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import FacebookIcon from "@/assets/icons/facebook.svg?react";
import fizjoPlusLogo from "@/assets/logos/fizjoplus_old.svg";
import { Card, CardContent } from "@/components/ui-library/card";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui-library/table";

export const ContactSection = () => {
  const { t } = useTranslation();
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 5;
      const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 5;

      setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 });
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const hours = [
    {
      day: t("sections.contact.openingHours.monday.day"),
      hours: t("sections.contact.openingHours.monday.hours"),
    },
    {
      day: t("sections.contact.openingHours.tuesday.day"),
      hours: t("sections.contact.openingHours.tuesday.hours"),
    },
    {
      day: t("sections.contact.openingHours.wednesday.day"),
      hours: t("sections.contact.openingHours.wednesday.hours"),
    },
    {
      day: t("sections.contact.openingHours.thursday.day"),
      hours: t("sections.contact.openingHours.thursday.hours"),
    },
    {
      day: t("sections.contact.openingHours.friday.day"),
      hours: t("sections.contact.openingHours.friday.hours"),
    },
  ];

  // const center = {
  //   lat: 50.061755137724596,
  //   lng: 19.9615649,
  // };

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card
        ref={cardRef}
        className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 shadow-lg transition-transform duration-200 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-primary/50 before:to-primary/10"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/10" />
        <div className="absolute -left-16 -bottom-16 h-32 w-32 rounded-full bg-primary/5" />
        <div className="absolute left-1/2 top-0 h-1 w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <CardContent className="relative space-y-6 p-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {t("sections.contact.labels.phone")}
            </span>
            <a
              className="text-xl font-semibold transition-colors hover:text-primary"
              href={`tel:${t("sections.contact.phone")}`}
            >
              {t("sections.contact.phone")}
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {t("sections.contact.labels.email")}
            </span>
            <a
              className="transition-colors hover:text-primary"
              href={`mailto:${t("sections.contact.email")}`}
            >
              {t("sections.contact.email")}
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {t("sections.contact.labels.address")}
            </span>
            <a
              className="transition-colors hover:text-primary"
              href="https://maps.app.goo.gl/WDKGW26n5SmrGy289"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t("sections.contact.address")}
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {t("sections.contact.labels.social")}
            </span>
            <a
              className="flex gap-2 w-fit rounded-lg bg-[#1877F2] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#0c5cdb] hover:text-white"
              href="https://facebook.com/PlusFizjo"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FacebookIcon className="h-5 w-5 invert" />
              {t("sections.contact.social.facebook")}
            </a>
          </div>
        </CardContent>

        <div className="absolute bottom-4 right-4 opacity-10">
          <img
            alt="FizjoPlus"
            className="h-auto w-[100px] invert"
            src={fizjoPlusLogo}
          />
        </div>
      </Card>

      <Card>
        <CardContent className="p-6">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {t("sections.contact.labels.hours")}
          </span>
          <Table>
            <TableBody>
              {hours.map((row) => (
                <TableRow key={row.day}>
                  <TableCell>{row.day}</TableCell>
                  <TableCell>{row.hours}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* <div className="md:col-span-2 h-[400px] overflow-hidden rounded-lg border">
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? ""}>
          <Map
            defaultCenter={center}
            defaultZoom={15}
            disableDefaultUI={true}
            fullscreenControl={false}
            gestureHandling="greedy"
            mapId="fizjoplus-contact-map"
            mapTypeControl={false}
            mapTypeId="roadmap"
            streetViewControl={false}
            style={{ height: "100%", width: "100%" }}
            styles={[
              {
                elementType: "labels.text.fill",
                featureType: "all",
                stylers: [{ color: "#6b7280" }],
              },
              {
                elementType: "geometry.fill",
                featureType: "water",
                stylers: [{ color: "#dbeafe" }],
              },
            ]}
            zoomControl={true}
          >
            <Marker position={center} />
          </Map>
        </APIProvider>
      </div> */}
    </div>
  );
};
