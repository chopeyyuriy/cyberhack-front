"use client";

import { FC, Fragment, useState } from "react";

import Image from "next/image";

import cn from "classnames";

import { PurchaseStatus } from "@/shared";
import { PURCHASE_STATUS } from "@/shared/ui/Slugs/PurchaseStatus";

import "./styles.scss";
import { unbounded } from "@/shared/fonts";
import { PurchaseModal } from "@/features/Account";

export interface IPurchasesListProps {
  topics: string[];
  items: {
    image: string;
    title: string;
    game: string;
    price: number;
    date: string;
    status: PURCHASE_STATUS;
  }[];
}

const PurchasesList: FC<IPurchasesListProps> = ({ topics, items }) => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  return (
    <div className="purchases-list">
      <div className="purchases-list__top">
        {topics.map((item, index) => (
          <span className="purchases-list__column" key={index}>
            {item}
          </span>
        ))}
      </div>
      <ul className="purchases-list__list">
        {items.map((item, index) => (
          <Fragment key={index}>
            <li
              className={cn("purchases-list__item", {
                "purchases-list__item_secondary": index % 2 === 1,
              })}
              key={index}
              onClick={() => setIsModalOpened(true)}
            >
              <div className="purchases-list__wrapper">
                <Image
                  src={require("@/shared/assets/images/category-card-placeholder.png")}
                  alt="image"
                  width={42}
                  height={42}
                  className="purchases-list__image"
                />
                <div className="purchases-list__content">
                  <h4
                    className={cn("purchases-list__title", unbounded.className)}
                  >
                    {item.title}
                  </h4>
                  <span className="purchases-list__description">
                    {item.game}
                  </span>
                </div>
              </div>
              <div className="purchases-list__price">{item.price}$</div>
              <div className="purchases-list__date">{item.date}</div>
              <PurchaseStatus status={PURCHASE_STATUS.DELIVERED} />
              <Image
                src={require("@/shared/assets/icons/more.svg")}
                alt="icon"
                width={24}
                height={24}
                className="purchases-list__icon"
              />
            </li>
            {isModalOpened && (
              <PurchaseModal
                image="image"
                title={item.title}
                game={item.game}
                code="26H66-WGCRP-TPRKH-7UJND"
                loaderHref="loader"
                price={item.price}
                status={item.status}
                date={item.date}
                number="2222"
                helpHref="help"
                makeReviewHref="review"
                onClose={() => setIsModalOpened(false)}
              />
            )}
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default PurchasesList;
