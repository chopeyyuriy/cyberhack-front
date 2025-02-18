import { api } from "@/shared";
import { IProblem } from "@/shared/types/Problem";

export const getProblemsApi = async () => {
  return await api.get<IProblem[]>("/problems");
};

export const getProblemByIdApi = async (id: number) => {
  return await api.get(`/problems/${id}`);
};
