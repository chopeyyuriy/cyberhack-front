"use client";

import {
  AuthCheckbox,
  ModalContainer,
  PrimaryButton,
  SeparatorLine,
} from "@/shared";
import Image from "next/image";
import { FC, useState } from "react";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";

import "./styles.scss";

export enum TICKET_TYPE {
  SOFT_NOT_WORKING,
  PAYMENT_PROBLEMS,
  RESET_HWID,
  COLLABORATION,
  ANOTHER_PROBLEM,
}

export interface ITicketModalProps {
  close: () => void;
}

const TicketModal: FC<ITicketModalProps> = ({ close }) => {
  const [currentItem, setCurrentItem] = useState<TICKET_TYPE | null>(null);

  return (
    <ModalContainer>
      <div className="ticket-modal">
        <div className="ticket-modal__top">
          <Image
            src={require("@/shared/assets/images/profile/modal-top-bg.svg")}
            alt="background"
            width={516}
            height={74}
            className="ticket-modal__background"
          />
          <div className="ticket-modal__wrapper">
            <h2 className={cn("ticket-modal__title", unbounded.className)}>
              Создание тикета
            </h2>
            <span className="ticket-modal__description">
              Выберите тему вопроса, который хотите решить
            </span>
          </div>
          <span className="ticket-modal__close" onClick={close}>
            <Image
              src={require("@/shared/assets/icons/clear-search.svg")}
              width={16}
              height={16}
              alt="close-icon"
              className="ticket-modal__icon"
            />
          </span>
        </div>
        <SeparatorLine light />
        <ul className="ticket-modal-list">
          <li
            className="ticket-modal-list__item"
            onClick={() => setCurrentItem(TICKET_TYPE.ANOTHER_PROBLEM)}
          >
            <div className="ticket-modal-list__image">
              <Image
                src={require("@/shared/assets/icons/soft.svg")}
                alt="icon"
              />
            </div>
            <div className="ticket-modal-list__wrapper">
              <h2 className="ticket-modal-list__title">Не работает софт</h2>
              <span className="ticket-modal-list__description">
                Здесь вы можете сообщить о проблемах с софтом
              </span>
            </div>
            <AuthCheckbox
              value={currentItem === TICKET_TYPE.SOFT_NOT_WORKING}
            />
          </li>
          <li
            className="ticket-modal-list__item"
            onClick={() => setCurrentItem(TICKET_TYPE.ANOTHER_PROBLEM)}
          >
            <div className="ticket-modal-list__image">
              <Image
                src={require("@/shared/assets/icons/soft.svg")}
                alt="icon"
              />
            </div>
            <div className="ticket-modal-list__wrapper">
              <h2 className="ticket-modal-list__title">Не работает софт</h2>
              <span className="ticket-modal-list__description">
                Здесь вы можете сообщить о проблемах с софтом
              </span>
            </div>
            <AuthCheckbox
              value={currentItem === TICKET_TYPE.PAYMENT_PROBLEMS}
            />
          </li>
          <li
            className="ticket-modal-list__item"
            onClick={() => setCurrentItem(TICKET_TYPE.ANOTHER_PROBLEM)}
          >
            <div className="ticket-modal-list__image">
              <Image
                src={require("@/shared/assets/icons/soft.svg")}
                alt="icon"
              />
            </div>
            <div className="ticket-modal-list__wrapper">
              <h2 className="ticket-modal-list__title">Не работает софт</h2>
              <span className="ticket-modal-list__description">
                Здесь вы можете сообщить о проблемах с софтом
              </span>
            </div>
            <AuthCheckbox value={currentItem === TICKET_TYPE.RESET_HWID} />
          </li>
          <li
            className="ticket-modal-list__item"
            onClick={() => setCurrentItem(TICKET_TYPE.ANOTHER_PROBLEM)}
          >
            <div className="ticket-modal-list__image">
              <Image
                src={require("@/shared/assets/icons/soft.svg")}
                alt="icon"
              />
            </div>
            <div className="ticket-modal-list__wrapper">
              <h2 className="ticket-modal-list__title">Не работает софт</h2>
              <span className="ticket-modal-list__description">
                Здесь вы можете сообщить о проблемах с софтом
              </span>
            </div>
            <AuthCheckbox value={currentItem === TICKET_TYPE.COLLABORATION} />
          </li>
          <li
            className="ticket-modal-list__item"
            onClick={() => setCurrentItem(TICKET_TYPE.ANOTHER_PROBLEM)}
          >
            <div className="ticket-modal-list__image">
              <Image
                src={require("@/shared/assets/icons/soft.svg")}
                alt="icon"
              />
            </div>
            <div className="ticket-modal-list__wrapper">
              <h2 className="ticket-modal-list__title">Не работает софт</h2>
              <span className="ticket-modal-list__description">
                Здесь вы можете сообщить о проблемах с софтом
              </span>
            </div>
            <AuthCheckbox value={currentItem === TICKET_TYPE.ANOTHER_PROBLEM} />
          </li>
        </ul>
        <SeparatorLine light />
        <div className="w-full p-6">
          <PrimaryButton
            text="Создать тикет"
            click={() => console.log("make ticket")}
            classes="ticket-modal__button"
            color="#59B3A8"
            textColor="#0E1012"
          />
        </div>
      </div>
    </ModalContainer>
  );
};

export default TicketModal;
