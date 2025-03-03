"use client";
import { useEffect, useState } from "react";
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

export const Ticket = () => {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState<IUserTicket | undefined>();
  const [messages, setMessages] = useState<GroupedMessage[]>([]);

  const handleGetTicket = () =>
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
          date: msg?.from_user.created_at,
        };
        result.push(currentGroup);
      }

      currentGroup && currentGroup.texts.push(msg.text);

      if (hasFiles) {
        currentGroup && currentGroup.allFiles.push(...msg.files);
      }
    });

    return result;
  };

  const handleGetMessages = () =>
    getUserTicketMessages(ticketId?.toString()).then((resp) =>
      setMessages(handleGroupMessages(resp?.data ?? [])),
    );

  useEffect(() => {
    if (ticketId) {
      handleGetTicket();
      handleGetMessages();
    }
  }, [ticketId]);

  return (
    <div className="ticket-chat">
      <Header ticket={ticket} />
      <Chat messages={messages} />
      <Footer onRefetchMessages={() => handleGetMessages()} />
    </div>
  );
};
