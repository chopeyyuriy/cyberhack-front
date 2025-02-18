import { FC } from "react";

import cn from "classnames";
import { unbounded } from "@/shared/fonts";

import "./styles.scss";
import Image from "next/image";

const NoPurchasesCard: FC = () => {
  return (
    <div className="no-purchases-card">
      <Image
        src={require("@/shared/assets/icons/cart.svg")}
        alt={"icon"}
        width={64}
        height={64}
        className="no-purchases-card__icon"
      />
      <h2 className={cn("no-purchases-card__title", unbounded.className)}>
        У вас нет товаров
      </h2>
      <span className="no-purchases-card__description">
        Вам нужно приобрести товар, что бы он отобразился в этом блоке
      </span>
    </div>
  );
};

export default NoPurchasesCard;
