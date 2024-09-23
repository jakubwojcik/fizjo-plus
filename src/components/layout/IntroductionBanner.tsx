import michalCwikPortrait from "@/assets/images/michal_cwik_portrait.webp";
import michalCwikSignature from "@/assets/michal_cwik_signature.svg";

export const IntroductionBanner = () => {
  return (
    <div className="flex w-full shadow-[inset_0_-20px_0_#f1f1f1]">
      <div className="h-64 flex items-end shrink-0 ">
        <img
          alt="Portrait of Michał Ćwik"
          className="h-52"
          src={michalCwikPortrait}
        />
        <img
          alt="Signature of Michał Ćwik"
          className="h-16 translate-y-[-10px]"
          src={michalCwikSignature}
        />
      </div>
      <div className="h-64 flex items-center">
        <p className="text-right">
          W Fizjo+ dokładnie analizuję problem każdego Pacjenta, aby stworzyć
          indywidualny plan terapii.
          <br />
          <br />
          Moją misją jest nie tylko łagodzenie bólu podczas wizyty, ale przede
          wszystkim przywracanie pełnej sprawności i poprawa jakości życia.
        </p>
      </div>
    </div>
  );
};
