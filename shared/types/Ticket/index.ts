import { IAccount, IUserFile, IUserResponse } from "../Account";

export interface ITicketTheme {
  id: number;
  name_ru: string;
  name_en: string;
}

export interface ITicket {
  id: number;
  user: IUserResponse;
  theme: ITicketTheme;
  is_bot: boolean;
  created_at: string;
  updated_at: string;
}

export interface ITicketAttachment {
  file: IUserFile;
}

export interface ITicketMessage {
  id: number;
  from: IUserResponse;
  text: string;
  params: string | object;
  attachments: ITicketAttachment;
  created_at: string;
  updated_at: string;
}
