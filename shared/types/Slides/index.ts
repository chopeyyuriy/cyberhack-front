import { IProduct } from "../Products";

export interface ISlide {
  id: number;
  game_id: number;
  product_id: number;
  product: IProduct;
  image: string;
}
