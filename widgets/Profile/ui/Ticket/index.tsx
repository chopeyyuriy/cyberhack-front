"use client";
import { useEffect, useRef, useState } from "react";
import { Chat, GroupedMessage } from "./Chat/Chat";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import "./styles.scss";
import { ITicketMessage, IUserTicket } from "@/shared/types/Ticket";
import { useParams } from "next/navigation";
import {
  getUserTicketById,
  getUserTicketMessages,
} from "@/entities/Ticket/api";
import useSound from "use-sound";

export const Ticket = () => {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState<IUserTicket | undefined>();
  const [messages, setMessages] = useState<GroupedMessage[]>([]);
  const gotMessagesCount = useRef(0);
  const [messagesCount, setMessagesCount] = useState(0);
  const [play] = useSound(
    "https://cyberhack.pro/storage/song/receive-msg.mp3",
    {
      volume: 0.01,
    },
  );

  const handleGetTicket = () =>
    ticketId &&
    getUserTicketById(ticketId?.toString()).then((resp) =>
      setTicket(resp?.data),
    );

  const handleGroupMessages = (
    messages: ITicketMessage[],
  ): GroupedMessage[] => {
    const result: GroupedMessage[] = [];

    let currentGroup: GroupedMessage | null = null;

    messages.forEach((msg) => {
      const isNewUser =
        !currentGroup ||
        currentGroup.from_user_id !== msg.from_user_id ||
        currentGroup.allFiles?.length > 0;
      const hasFiles = msg.files && msg.files.length > 0;

      if (isNewUser || hasFiles) {
        currentGroup = {
          id: msg.id,
          from_user_id: msg.from_user_id,
          from_user: msg.from_user,
          texts: [],
          allFiles: [],
          date: msg?.created_at,
        };
        result.push(currentGroup);
      }

      if (currentGroup) {
        currentGroup.texts.push(msg.text);
        currentGroup.date = msg?.created_at;
      }

      if (hasFiles) {
        currentGroup && currentGroup.allFiles.push(...msg.files);
      }
    });

    return result;
  };

  const handleGetMessages = (firstTime?: boolean) =>
    ticketId &&
    getUserTicketMessages(ticketId?.toString()).then((resp) => {
      const messages = resp.data;
      const adminMessages =
        messages?.filter(({ from_user_id }) => from_user_id === 1)?.length ?? 0;

      setMessages(handleGroupMessages(resp?.data ?? []));
      if (!firstTime && gotMessagesCount.current < adminMessages) {
        play();
      }
      gotMessagesCount.current = adminMessages;
      if (messages.length !== messagesCount) {
        setMessagesCount(messages.length);
      }
    });

  useEffect(() => {
    handleGetTicket();
    handleGetMessages(true);
    const interval = setInterval(() => handleGetMessages(), 5000);

    return () => {
      clearInterval(interval);
    };
  }, [ticketId]);

  if (!ticket) {
    return;
  }

  return (
    <div className={`ticket-chat ${ticket?.status === 2 && "closed"}`}>
      <Header ticket={ticket} />
      <Chat messages={messages} messagesCount={messagesCount} />
      {ticket?.status === 2 ? null : (
        <Footer onRefetchMessages={() => handleGetMessages()} />
      )}
    </div>
  );
};
