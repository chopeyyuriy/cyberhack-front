import { useTranslations } from "next-intl";
import Image from "next/image";

interface Props {
  disabled: boolean;
  onSend: () => void;
  onAddFile: (file: { file: File; preview: string }) => void;
}

export const Actions = ({ disabled, onSend, onAddFile }: Props) => {
  const t = useTranslations("tickets");

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result; // буде щось типу "data:image/jpeg;base64,..."
        onAddFile({ file, preview: base64String?.toString() ?? "" });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="ticket-chat__footer-top__actions">
      <div className="ticket-chat__footer-top__actions-file">
        <input
          type="file"
          value=""
          onChange={handleFileChange}
          accept="image/*"
        />
        <Image
          src={require("@/shared/assets/icons/image.svg")}
          alt=""
          width={18}
          height={18}
        />
      </div>
      <button disabled={disabled} onClick={onSend}>
        {t("send")}
      </button>
    </div>
  );
};
