"use client";
import { FC } from "react";
import Image from "next/image";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";

import PurchaseStatus, {
  PURCHASE_STATUS,
} from "@/shared/ui/Slugs/PurchaseStatus";

import { ModalContainer, PrimaryButton, SeparatorLine } from "@/shared";

import "./styles.scss";
import CopyToClipboard from "react-copy-to-clipboard";

export interface IPurchaseModalProps {
  image: string;
  title: string;
  game: string;
  code: string;
  loaderHref: string;
  price: number;
  status: PURCHASE_STATUS;
  date: string;
  number: string;
  helpHref: string;
  makeReviewHref: string;
  onClose: () => void;
}

const PurchaseModal: FC<IPurchaseModalProps> = (props) => {
  return (
    <ModalContainer>
      <div className="purchase-modal">
        <div className="purchase-modal__top">
          <Image
            src={require("@/shared/assets/images/profile/modal-top-bg.svg")}
            alt="bg"
            width={450}
            height={96}
            className="purchase-modal__background"
          />
          <div className="purchase-modal__picture">
            <Image
              src={require("@/shared/assets/images/category-card-placeholder.png")}
              alt="image"
              width={48}
              height={48}
              className="purchase-modal__image"
            />
          </div>
          <div className="purchase-modal__wrapper">
            <h2 className={cn("purchase-modal__title", unbounded.className)}>
              {props.title}
            </h2>
            <span className="purchase-modal__subtitle">{props.game}</span>
          </div>
          <div className="purchase-modal__close" onClick={props.onClose}>
            <Image
              src={require("@/shared/assets/icons/clear-search.svg")}
              alt="close"
              width={16}
              height={16}
              className="purchase-modal__close-icon"
            />
          </div>
        </div>
        <div className="purchase-modal__container">
          <CopyToClipboard text={props.code}>
            <div className="purchase-modal-clipboard">
              <span className="purchase-modal-clipboard__text">
                {props.code}
              </span>
              <Image
                src={require("@/shared/assets/icons/copy.svg")}
                alt="copy"
                width={20}
                height={20}
                className="purchase-modal-clipboard__icon"
              />
            </div>
          </CopyToClipboard>
          <PrimaryButton
            text="Скачать лоадер"
            color="#59B3A8"
            textColor="#0E1012"
            href={props.loaderHref}
            classes="purchase-modal-clipboard__button"
          />
          <p className="purchase-modal__description">
            Все файлы, которые относятся к продукту (лоадер, инструкция,
            медиа...) вы можете скачать в одном архиве.
          </p>
        </div>
        <SeparatorLine light />
        <ul className="purchase-modal__list">
          <li className="purchase-modal__item">
            <span className="purchase-modal__name">Цена</span>
            <span className="purchase-modal__value">{props.price}₽</span>
          </li>
          <li className="purchase-modal__item">
            <span className="purchase-modal__name">Статус</span>
            <PurchaseStatus status={props.status} />
          </li>
          <li className="purchase-modal__item">
            <span className="purchase-modal__name">Дата</span>
            <span className="purchase-modal__value">{props.date}</span>
          </li>
          <li className="purchase-modal__item">
            <span className="purchase-modal__name">Номер заказа</span>
            <span className="purchase-modal__value">#{props.number}</span>
          </li>
        </ul>
        <div className="purchase-modal__buttons">
          <PrimaryButton
            text="Нужна помощь?"
            color="#C0C6D1"
            textColor="#0E1012"
            href={props.helpHref}
            classes="purchase-modal__button"
          />
          <PrimaryButton
            text="Оставить Отзыв"
            color="#E1C58B"
            textColor="#0E1012"
            href={props.helpHref}
            classes="purchase-modal__button"
          />
        </div>
      </div>
    </ModalContainer>
  );
};

export default PurchaseModal;
