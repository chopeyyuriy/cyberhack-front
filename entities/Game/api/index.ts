import { api } from "@/shared";
import { IGame, IGameStatistics } from "@/shared/types/Products";

export const getGamesApi = async () => {
  try {
    return await api.get<IGame[]>("/games");
  } catch {
    return [];
  }
};

export const getGamesStatisticsApi = async () => {
  return await api.get<IGameStatistics[]>("/games/statistics");
};

export const searchGamesApi = async (
  query: string | null,
  isPopular?: number,
  platform?: number,
  category?: number[],
  page?: number,
) => {
  return await api.get("/games/search", {
    params: {
      q: query,
      is_popular: Number(isPopular),
      platform,
      category: category ? category.join(",") : undefined,
      page,
    },
  });
};

export const getGameInfoApi = async (path: string) => {
  return await api.get<IGame>(`/games/${path}`);
};

export const getGameByIDApi = async (id: number) => {
  return await api.get<IGame>(`/games/${id}/id`);
};

export const getSelectionsApi = async () => {
  try {
    const response = await api.get("/selection");
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
