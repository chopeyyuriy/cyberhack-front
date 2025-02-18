import { api } from "@/shared";
import { IUserResponse } from "@/shared/types/Account";

export const uploadUserFileApi = async (user: IUserResponse) => {
  return await api.post("/user/file", user);
};

export const saveProfileSettingsApi = async (user: IUserResponse) => {
  return await api.post<IUserResponse>("/profile/settings/save", user);
};

export const sendEmailConfirmationCodeApi = async (user: IUserResponse) => {
  return await api.post("/profile/email/send-code", user);
};


export const changePassword = async (password: string, repPassword: string) => {
  return await api.post("/user/change-password", {
    password,
    rep_password: repPassword
  });
};