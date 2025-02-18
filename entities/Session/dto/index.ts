export interface IRegistrationDTO {
  email: string;
  name: string;
  password: string;
  repeat_password: string;
  avatar?: number;
}

export interface ILoginDTO {
  email: string;
  password: string;
}

export interface IUpdateAccountDTO {
  email: string;
  name: string;
  email_verified_at?: string;
}
