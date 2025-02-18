import { api } from "@/shared";
import { IUserResponse } from "@/shared/types/Account";
import { ITicket, ITicketMessage, ITicketTheme } from "@/shared/types/Ticket";

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
  return await api.get<ITicket[]>("/ticket/list");
};

export const getTicketByIdApi = async (id: number) => {
  return await api.get<ITicket>(`/ticket/${id}`);
};

export const getTicketMessagesApi = async (id: number) => {
  return await api.get<ITicketMessage[]>(`/ticket/messages/${id}`);
};

export const closeTicketByIdApi = async (id: number) => {
  return await api.put(`/ticket/${id}/close`);
};

export const getTicketThemeApi = async () => {
  return await api.get<ITicketTheme[]>("/ticket/theme");
};
