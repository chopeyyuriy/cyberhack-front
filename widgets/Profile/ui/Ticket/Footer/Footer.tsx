"use client";
import { useState } from "react";
import { Actions } from "./Actions";
import { File } from "./File";
import { Input } from "./Input";
import { sendUserTicketMessage } from "@/entities/Ticket/api";
import { useParams } from "next/navigation";

interface Props {
  onRefetchMessages: () => void;
}

export const Footer = ({ onRefetchMessages }: Props) => {
  const { ticketId } = useParams();
  const [value, setValue] = useState("");
  const [files, setFiles] = useState<{ file: File; preview: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChangeValue = (val: string) => setValue(val);

  const handleSend = () => {
    if (!loading) {
      setLoading(true);
      const data = new FormData();

      data.append("ticket_id", ticketId?.toString());
      data.append("text", value);

      files.forEach(({ file }, i) => data.append(`image[${i}]`, file));

      sendUserTicketMessage(data)
        .then((resp) => {
          setLoading(false);
          if (resp.status === 200) {
            onRefetchMessages();
            setValue("");
            setFiles([]);
          }
        })
        .catch(() => setLoading(false));
    }
  };

  const handleAddFile = (file: { file: File; preview: string }) =>
    setFiles([...files, file]);

  const handleRemoveFile = (index: number) =>
    setFiles(files.filter((f, i) => i !== index));

  return (
    <div className="ticket-chat__footer">
      <div className="ticket-chat__footer-top">
        <Input value={value} onChange={handleChangeValue} />
        <Actions
          disabled={value?.length === 0 || loading}
          onSend={handleSend}
          onAddFile={handleAddFile}
        />
      </div>
      {files?.length > 0 ? (
        <div className="ticket-chat__footer-files">
          {files?.map(({ file, preview }, i) => (
            <File
              key={i}
              name={file.name}
              size={file.size}
              preview={preview}
              onRemove={() => handleRemoveFile(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};
