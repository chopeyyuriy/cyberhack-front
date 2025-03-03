import { useTranslations } from "next-intl";
import Image from "next/image";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export const Input = ({ value, onChange }: Props) => {
  const t = useTranslations("tickets");

  return (
    <div className="ticket-chat__footer-top__input">
      <Image
        src={require("@/shared/assets/icons/edit-3.svg")}
        alt=""
        width={24}
        height={24}
      />
      <textarea
        placeholder={t("describeProblem")}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </div>
  );
};
