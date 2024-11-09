import { Trans } from "react-i18next";

interface RichTransProps {
  i18nKey: string;
  components?: Record<string, React.ReactNode>;
}

export const RichTrans = ({ components = {}, i18nKey }: RichTransProps) => (
  <Trans
    components={{
      blue: <span className="text-booksy" />,
      br: <br />,
      list: <ul className="list-disc p-0 space-y-1" />,
      listitem: <li className="ml-5" />,
      ...components,
    }}
    i18nKey={i18nKey}
  />
);
