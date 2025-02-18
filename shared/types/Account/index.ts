export interface IAccount {
  name: string;
  email: string;
  avatar: string;
  updated_at: string;
  created_at: string;
  id: number;
}

export interface ILoginResponse {
  token_type: string;
  token: string;
}

export interface IUserFile {
  url: string;
  type: string;
  name: string;
  size: string;
}

export interface IUserResponse {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  avatar: string;
  adminlvl: number;
  is_bot: boolean;
  created_at: string;
  updated_at: string;
}
