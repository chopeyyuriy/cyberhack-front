import Image from "next/image";
import { handleFormatSize } from "../../Footer/File";

interface Props {
  files: { name: string; size: number; url: string }[];
}

export const Files = ({ files }: Props) => (
  <div className="ticket-chat__chat__message-files">
    {files?.map(({ name, size, url }, i) => (
      <div className="ticket-chat__chat__message-files-card" key={i}>
        <Image src={url} alt="" height={88} width={154} />
        <div className="ticket-chat__chat__message-files-card-name">{name}</div>
        <div className="ticket-chat__chat__message-files-card-size">
          {handleFormatSize(size)}
        </div>
      </div>
    ))}
  </div>
);
