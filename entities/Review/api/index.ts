import { api } from "@/shared";

export const leaveReview = async (
  type: string,
  productID: number,
  data: any,
) => {
  return await api.post<any>(`/review/${type}/${productID}`, data);
};

export const getUserReviews = async (page = 1) => {
  return await api.get<any>(`/review/user`, {
    params: { page },
  });
};

export const getReviewsForProduct = async (
  type: string,
  productID: number,
  page?: number = 1,
) => {
  return await api.get<any>(`/review/${type}/${productID}`, {
    params: { page },
  });
};
