import { api } from "@/shared";

export const getAccountsApi = async (platform?: number, sort?: number) => {
  return api.get<any[]>(`/accounts`, {
    params: {
      platform,
      sort
    }
  });
};

export const getAccountApi = async (path: string) => {
  return api.get<any>(`/accounts/${path}`);
};

export const searchAccountsApi = async (query: string | null) => {
  return await api.get("/accounts/search", {
    params: {
      q: query,
    },
  });
};