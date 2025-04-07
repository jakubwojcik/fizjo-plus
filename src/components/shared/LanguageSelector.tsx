import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui-library/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui-library/dropdown-menu"; // Assuming dropdown-menu was added here by shadcn cli

const languageMap: Record<string, string> = {
  en: "English",
  pl: "Polski",
};

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  const currentLangAbbr = currentLanguage.split("-")[0].toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="px-2 text-primary-foreground"
          size="sm"
          variant="ghost"
        >
          {currentLangAbbr}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.keys(languageMap).map((lng) => (
          <DropdownMenuItem
            key={lng}
            disabled={currentLanguage.startsWith(lng)}
            onClick={() => changeLanguage(lng)}
          >
            {languageMap[lng]} ({lng.toUpperCase()})
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
