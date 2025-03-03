import Image from "next/image";

interface Props {
  name: string;
  size: number;
  preview: string;
  onRemove: () => void;
}

export const handleFormatSize = (size: number) => {
  const i = size == 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
  return (
    +(size / Math.pow(1024, i)).toFixed(2) * 1 +
    " " +
    ["B", "kB", "MB", "GB", "TB"][i]
  );
};

export const File = ({ name, size, preview, onRemove }: Props) => {
  return (
    <div className="ticket-chat__footer-files-card">
      <Image
        src={preview}
        alt=""
        width={34}
        height={34}
        className="ticket-chat__footer-files-card-photo"
      />
      <div>
        <div className="ticket-chat__footer-files-card-name">{name}</div>
        <div className="ticket-chat__footer-files-card-size">
          {handleFormatSize(size)}
        </div>
      </div>
      <button
        className="ticket-chat__footer-files-card-delete"
        onClick={onRemove}
      >
        <Image
          src={require("@/shared/assets/icons/delete-file.svg")}
          alt=""
          width={16}
          height={16}
        />
      </button>
    </div>
  );
};
