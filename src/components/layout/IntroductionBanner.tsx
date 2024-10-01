import { Trans } from "react-i18next";

import michalCwikPortrait from "@/assets/images/michal_cwik_portrait.webp";
import michalCwikSignature from "@/assets/michal_cwik_signature.svg";

export const IntroductionBanner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full border-b-2 border-gray-300 gap-2 pt-6 pb-2 md:pb-0">
      <div className="flex md:items-end shrink-0 sm:w-full md:w-auto justify-end md:justify-normal">
        <img
          alt="Portrait of Michał Ćwik"
          className="h-52 hidden md:block"
          src={michalCwikPortrait}
        />

        <img
          alt="Signature of Michał Ćwik"
          className="h-16 translate-y-[-5px]"
          src={michalCwikSignature}
        />
      </div>
      <div className="flex items-center py-2">
        <p className="text-right">
          <Trans
            components={{ break: <br /> }}
            i18nKey="introductionBanner.motto"
          />
        </p>
      </div>
    </div>
  );
};
