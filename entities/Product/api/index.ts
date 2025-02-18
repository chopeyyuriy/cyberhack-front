import { api } from "@/shared";
import { IProduct } from "@/shared/types/Products";

export const getProductsByGameApi = async (
  game: string,
  status?: number,
  sort?: number,
) => {
  return api.get<any[]>(`/products/${game}`, {
    params: {
      status,
      sort,
    },
  });
};

export const getProductByGameApi = async (
  gamePath?: string,
  productPath?: number | string,
) => {
  return api.get<any>(`/product/${gamePath}/${productPath}`);
};

export const searchProductsApi = async (query: string | null) => {
  return await api.get("/products/search", {
    params: {
      q: query,
    },
  });
};
