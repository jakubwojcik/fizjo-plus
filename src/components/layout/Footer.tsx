import { useTranslation } from "react-i18next";

import FizjoPlusLogo from "@/assets/logos/fizjoplus_old.svg?react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="py-6 px-4 flex flex-col items-center justify-center text-center mt-auto border-t border-gray-200 bg-muted gap-4">
      <div className="h-8 w-auto mb-2 invert opacity-20">
        <FizjoPlusLogo />
      </div>
      <div>
        <p className="text-xs text-gray-500">
          &copy; {currentYear} Fizjo+ Michał Ćwik
        </p>
        <p className="text-xs text-gray-500">{t("footer.copyright")}</p>
      </div>
    </footer>
  );
};
