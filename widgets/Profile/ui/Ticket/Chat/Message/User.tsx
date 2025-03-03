import Image from "next/image";

interface Props {
  userName: string;
}

export const User = ({ userName }: Props) => (
  <div className="ticket-chat__chat__message-user">
    {/* <Image
      src={require("@/shared/assets/icons/avatar.png")}
      alt=""
      height={32}
      width={32}
    />{" "} */}
    {userName}
  </div>
);
