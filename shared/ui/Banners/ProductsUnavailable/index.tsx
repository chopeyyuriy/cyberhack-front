import Image from "next/image";
import { FC } from "react";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";

import "./styles.scss";

const ProductsUnavailableBanner: FC = () => {
  return (
    <div className="products-unavailable-banner">
      <Image
        src={require("@/shared/assets/icons/white-cart.svg")}
        alt="icon"
        width={24}
        height={24}
        className="products-unavailable-banner__icon"
      />

      <h2
        className={cn(
          "products-unavailable-banner__title",
          unbounded.className,
        )}
      >
        Товары, приобретенные через Digiseller, не доступны для просмотра в
        личном кабинете!
      </h2>
      <button className="products-unavailable-banner__button">Перейти</button>
    </div>
  );
};

export default ProductsUnavailableBanner;
