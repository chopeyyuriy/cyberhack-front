import { ITicketMessage } from "@/shared/types/Ticket";
import { Message } from "./Message/Message";
import { handleFormatDate } from "../../TicketsList";
import { useEffect, useRef } from "react";
import { useAppSelector } from "@/store";

interface Props {
  messages: GroupedMessage[];
}

interface File {
  id: number;
  url: string;
  user_id: number;
  created_at: string;
  updated_at: string;
  type: string;
  size: number;
  name: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  adminlvl: number;
  is_bot: number;
  avatar: number;
}

export interface GroupedMessage {
  from_user_id: number;
  from_user: User;
  texts: string[];
  allFiles: File[];
  date: string;
  id: number;
}

export const Chat = ({ messages }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const user = useAppSelector((state) => state.session.user);

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="ticket-chat__chat">
      <div className="ticket-chat__chat-wrapper" ref={wrapperRef}>
        {messages.map(({ id, from_user, texts, allFiles, date }) => (
          <Message
            key={id}
            texts={texts}
            date={handleFormatDate(date)}
            userName={from_user.name}
            files={allFiles?.map(({ name, size, url }) => ({
              name,
              size,
              url,
            }))}
            mine={from_user.id === user?.id}
          />
        ))}
      </div>
    </div>
  );
};
