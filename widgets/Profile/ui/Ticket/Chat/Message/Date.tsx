import Image from "next/image";

interface Props {
  date: string;
}
export const Date = ({ date }: Props) => (
  <div className="ticket-chat__chat__message-date">
    {date}
    <Image
      src={require("@/shared/assets/icons/read.svg")}
      alt=""
      height={8}
      width={14}
    />
  </div>
);
