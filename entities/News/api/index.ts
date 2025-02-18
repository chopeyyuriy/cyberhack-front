import { api } from "@/shared";

export const getNewsApi = async (page?: number, game_id?: number, search?: string) => {
  return await api.get<any>("/news", {
    params: {
      page,
      game_id,
      search
    }
  });
};