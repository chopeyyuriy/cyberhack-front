import { ILoginDTO, IRegistrationDTO } from "@/entities/Session";

import { api } from "@/shared";
import {
  IAccount,
  ILoginResponse,
  IUserResponse,
} from "@/shared/types/Account";

const isServer = typeof window === "undefined";

export interface IResetPasswordConfirmDTO {
  email: string;
  code: string;
}

export interface IResetPasswordDTO {
  email: string;
  code: string;
  password: string;
  rep_password: string;
  avatar: number;
}

export const registrationApi = async (data: IRegistrationDTO) => {
  return await api.post<IAccount>("/register", {
    ...data,
  });
};

export const loginBySocmedia = async (type: string) => {
  return await api.get(`/login/${type}`);
};

export const confirmLoginBySocmedia = async (type: string, data: any) => {
  return await api.post(`/login/${type}/callback`, data);
};

export const loginApi = async (data: ILoginDTO) => {
  return await api.post<ILoginResponse>("/auth", {
    ...data,
  });
};

export const updateAvatarApi = async (avatar: number) => {
  return await api.post("/profile/avatar", {
    avatar,
  });
};

export const sendVerificationEmail = async () => {
  return await api.post("/profile/send-email-verification");
};

export const сonfirmEmailApi = async (token: string) => {
  return await api.post("/profile/confirm-email-verification", null, {
    params: { token },
  });
};

export const updateProfileApi = async (name: string) => {
  return await api.post("/profile/update-profile", {
    name,
  });
};

export const getUserApi = async () => {
  if (isServer) {
    const { cookies } = await import("next/headers");
    const token = cookies().get("accessToken")?.value;

    if (!token) return { data: null };
  } else {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1",
    );

    if (!token) return { data: null };
  }

  return await api.get<IUserResponse>("/user");
};

export const getWalletApi = async () => {
  return await api.get("/meta/wallet");
};

export const checkUserApi = async (user: IUserResponse) => {
  return await api.post<{
    status: "#BAN" | "OK";
  }>("/check-user", user);
};

export const resetPasswordRequestApi = async (email: string) => {
  return await api.post("/user/reset-password/request", {
    email,
  });
};

export const resetPasswordConfirmApi = async (
  data: IResetPasswordConfirmDTO,
) => {
  return await api.post("/user/reset-password/confirm", data);
};

export const resetPasswordApi = async (data: IResetPasswordDTO) => {
  return await api.post("/user/reset-password", data);
};
