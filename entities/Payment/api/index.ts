import { api } from "@/shared";
import { IUserResponse } from "@/shared/types/Account";

export interface IPaymentUrlDTO {
  email: string;
  count: string;
}

export interface IPaymentFreekassaDTO {
  AMOUNT: string;
  MERCHANT_ORDER_ID: string;
  SIGN: string;
  us_count: number;
  P_EMAIL: string;
  us_promo_id: string;
}

export interface IPaymentWebmoneyDTO {
  LMI_PAYMENT_NO: string;
  promo: string;
  LMI_PAYEE_PURCHASE: string;
  LMI_PAYMENT_AMOUNT: number;
  LMI_PREREQUEST: string;
}

export const getPaymentsListApi = async () => {
  return await api.get("/payment/list");
};

export const paymentDownloadDataApi = async (
  id: number,
  user: IUserResponse,
) => {
  return await api.post<string>(`/payment/${id}/key/download`, user);
};

export const makeUrlByRateApi = async (
  rateId: number,
  method: string,
  data: IPaymentUrlDTO,
) => {
  return await api.post(`/payment/url/${rateId}/${method}`, data);
};

export const paymentByFreekassaApi = async (data: IPaymentFreekassaDTO) => {
  return await api.post("/payment/freekassa", data);
};

export const paymentByWebmoneyApi = async (data: IPaymentWebmoneyDTO) => {
  return await api.post("/payment/webmoney", data);
};
