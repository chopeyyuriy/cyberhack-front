import { IProduct, IProductRate } from "../Products";

export interface IPayment {
  id: number;
  product: IProduct;
  rate: IProductRate;
  system: string;
  key: string;
  count: number;
  promo: string;
  created_at: string;
}
