import { api } from "@/shared";
import { ISlide } from "@/shared/types/Slides";

export const getSlidesApi = async () => {
  return await api.get<ISlide[]>("/slides");
};
