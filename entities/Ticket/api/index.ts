import { api } from "@/shared";
import { IUserResponse } from "@/shared/types/Account";
import {
  ITicket,
  ITicketMessage,
  ITicketTheme,
  IUserTicket,
  IUserTicketsListResp,
} from "@/shared/types/Ticket";

export const createTicketApi = async (
  user: IUserResponse,
  theme_id: number,
) => {
  return await api.post("/ticket", {
    user,
    theme_id,
  });
};

export const getTicketsListApi = async () => {
  return await api.get<ITicket[]>("/ticket/theme");
};

export const getUserTickets = async (page: number) => {
  return await api.get<IUserTicketsListResp>("/ticket/list", {
    params: { page },
  });
};

export const getUserTicketById = async (id?: string) => {
  return await api.get<IUserTicket>(`/ticket/${id}`);
};

export const createUserTicket = async (theme_id: number) => {
  return await api.post<ITicket>("/ticket", { theme_id });
};

export const closeUserTicketById = async (id?: number) => {
  return await api.put<IUserTicket>(`/ticket/${id}/close`);
};

export const getUserTicketMessages = async (id?: string) => {
  return await api.get<ITicketMessage[]>(`/ticket/messages/${id}`);
};

export const sendUserTicketMessage = async (data: FormData) => {
  return await api.post<IUserTicket>("/ticket/send-message", data);
};
