import { api } from "@/shared";
import { IAvatar } from "@/shared/types/Avatars";

export const getAvatarsApi = async () => {
  return await api.get<IAvatar[]>("/avatars");
};
