import Image from "next/image";

interface Props {
  userName: string;
  avatar: number;
  mine?: boolean;
}

export const User = ({ userName, avatar, mine }: Props) => (
  <div className="ticket-chat__chat__message-user">
    <Image
      src={
        mine
          ? require(`@/shared/assets/icons/avatars/animoji-${avatar}.png`)
          : require(`@/shared/assets/icons/support.jpg`)
      }
      alt=""
      height={32}
      width={32}
    />{" "}
    {mine ? userName : "Support"}
  </div>
);
