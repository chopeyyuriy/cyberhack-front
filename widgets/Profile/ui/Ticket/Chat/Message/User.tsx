import Image from "next/image";

interface Props {
  userName: string;
  avatar: number;
}

export const User = ({ userName, avatar }: Props) => (
  <div className="ticket-chat__chat__message-user">
    <Image
      src={require(`@/shared/assets/icons/avatars/animoji-${avatar}.png`)}
      alt=""
      height={32}
      width={32}
    />{" "}
    {userName}
  </div>
);
