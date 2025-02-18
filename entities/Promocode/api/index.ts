import { api } from "@/shared";

export const checkPromocodeForUserApi = async (
  productId: number,
  promocode: string,
) => {
  return await api.post(
    "/promo/check",
    {
      product_id: productId,
    },
    {
      params: {
        p: promocode,
      },
    },
  );
};
