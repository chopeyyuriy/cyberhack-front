import { api } from "@/shared";

export const checkBanForUserApi = async () => {
  return await api.post("/ban/check");
};
