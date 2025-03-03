import { IAccount, IUserFile, IUserResponse } from "../Account";

export interface ITicketTheme {
  id: number;
  name_ru: string;
  name_en: string;
}

export interface ITicket {
  id: number;
  name_ru: string;
  description_ru: string;
  name_en: string;
  description_en: string;
}

export interface ITicketAttachment {
  file: IUserFile;
}

export interface IUserTicket {
  id: number;
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: any;
    avatar: number;
    adminlvl: number;
    is_bot: boolean;
    created_at: string;
    updated_at: string;
  };
  status: number;
  status_title: string;
  theme: {
    id: number;
    name_ru: string;
    description_ru: string;
    name_en: string;
    description_en: string;
  };
  is_bot: number;
  created_at: string;
  updated_at: string;
}
export interface IUserTicketsListResp {
  current_page: number;
  data: Array<IUserTicket>;
  first_page_url: string;
  from: any;
  last_page: number;
  last_page_url: string;
  links: Array<{
    url?: string;
    label: string;
    active: boolean;
  }>;
  next_page_url: any;
  path: string;
  per_page: number;
  prev_page_url: any;
  to: any;
  total: number;
}

export interface ITicketMessage {
  id: number;
  ticket_id: number;
  from_user_id: number;
  from_user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: any;
    created_at: string;
    updated_at: string;
    adminlvl: number;
    is_bot: number;
    avatar: number;
  };
  to_user_id: number;
  text: string;
  files: Array<{
    id: number;
    url: string;
    user_id: number;
    created_at: string;
    updated_at: string;
    type: string;
    size: number;
    name: string;
  }>;
}
