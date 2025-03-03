import { Card } from "./Card";
import { Date } from "./Date";
import { Files } from "./Files";
import { User } from "./User";

interface Props {
  mine?: boolean;
  texts: string[];
  date: string;
  userName: string;
  files: { name: string; size: number; url: string }[];
}

export const Message = ({ mine, texts, date, userName, files }: Props) => {
  return (
    <div className={`ticket-chat__chat__message ${mine && "mine"}`}>
      <User userName={userName} />
      {texts?.map((t, i) => <Card key={i} text={t} />)}
      {files?.length > 0 ? <Files files={files} /> : null}
      <Date date={date} />
    </div>
  );
};
