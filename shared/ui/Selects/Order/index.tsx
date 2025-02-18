import { AuthCheckbox } from "@/shared";
import { FC } from "react";

import cn from "classnames";

import "./styles.scss";

export interface IOrderSelectProps {
  selectedItem: number;
  selectItem: (value: number) => void;
  options: {
    discount?: number;
    title: string;
    price: number;
    oldPrice?: number;
    currency: string;
  }[];
}

const OrderSelect: FC<IOrderSelectProps> = ({
  selectedItem,
  options,
  selectItem,
}) => {
  return (
    <ul className="order-select">
      {options.map((item, index) => (
        <li
          className={cn("order-select__item", {
            "order-select__item_active": selectedItem === index,
          })}
          key={index}
          onClick={() => selectItem(index)}
        >
          <AuthCheckbox value={selectedItem === index} />
          {
            item.title &&
            <span className="order-select__title">{item.title}</span>
          }
          {!!item.discount && (
            <span className="order-select__discount">-{item.discount}%</span>
          )}
          <span className="order-select__price">{item.price}{item.currency}</span>
          {item.oldPrice && (
            <span className="order-select__price_through">
              {item.oldPrice}₽
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default OrderSelect;
