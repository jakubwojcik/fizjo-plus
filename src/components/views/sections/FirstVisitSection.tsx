"use client";

import { Trans, useTranslation } from "react-i18next";

import { BooksyButton } from "@/components/shared/BooksyButton";
import { DownloadFileButton } from "@/components/shared/DownloadFileButton";
import { Timeline, TimelineItem } from "@/components/ui-library/timeline";

export const FirstVisitSection = () => {
  const { t } = useTranslation();

  const stepKeys = ["contact", "questionnaire", "documents", "preparation"];

  return (
    <>
      <Timeline>
        {stepKeys.map((stepKey, index) => (
          <TimelineItem key={stepKey} index={index + 1}>
            <div className="rounded-lg bg-base-200 p-4">
              <h3 className="font-semibold pt-1">
                {t(`sections.firstVisit.steps.${stepKey}.title`)}
              </h3>
              <div className="text-sm text-base-content/70">
                <Trans
                  i18nKey={`sections.firstVisit.steps.${stepKey}.content`}
                />
              </div>
              {stepKey === "contact" && (
                <div className="mt-4">
                  <BooksyButton subTitleClassNames="text-foreground" />
                </div>
              )}
              {stepKey === "questionnaire" && (
                <div className="mt-4">
                  <DownloadFileButton
                    href="/documents/ankieta.pdf"
                    title={t("sections.firstVisit.downloadForm")}
                  />
                </div>
              )}
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
};
