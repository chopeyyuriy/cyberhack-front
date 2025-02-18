import { api } from "@/shared";
import { IBotProblem, IBotProblemSolution } from "@/shared/types/Bot";

export const getBotProblemsApi = async () => {
  return await api.get<IBotProblem[]>("/bot/problems");
};

export const getBotProblemByIdApi = async (id: number) => {
  return await api.get<IBotProblem>(`/bot/problem/${id}`);
};

export const getBotSolutionByProblemIdApi = async (id: number) => {
  return await api.get<IBotProblemSolution[]>(`/bot/problem/${id}/solutions`);
};
