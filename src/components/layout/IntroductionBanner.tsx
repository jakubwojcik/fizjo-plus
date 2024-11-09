import { Trans } from "react-i18next";

import michalCwikPortrait from "@/assets/images/michal_cwik_portrait.webp";
import michalCwikSignature from "@/assets/michal_cwik_signature.svg";

export const IntroductionBanner = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row w-full border-b-2 border-gray-700 gap-2 pt-6 md:pb-0">
      <div className="flex self-start sm:self-end items-end shrink-0 w-auto justify-normal">
        <img
          alt="Portrait of Michał Ćwik"
          className="h-32 md:h-52"
          src={michalCwikPortrait}
        />

        <img
          alt="Signature of Michał Ćwik"
          className="h-16 translate-y-[-5px]"
          src={michalCwikSignature}
        />
      </div>
      <div className="flex flex-col items-end justify-around py-2">
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
