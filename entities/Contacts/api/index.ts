import { api } from "@/shared";

export interface ICreateContactDTO {
  name: string;
  email: string;
  theme: string;
  message: string;
}

export const createContactApi = async (data: ICreateContactDTO) => {
  return await api.post("/contacts", data);
};
