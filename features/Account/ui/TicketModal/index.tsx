"use client";

import {
  AuthCheckbox,
  ModalContainer,
  PrimaryButton,
  SeparatorLine,
} from "@/shared";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";

import "./styles.scss";
import { useLocale, useTranslations } from "next-intl";
import { createUserTicket, getTicketsListApi } from "@/entities/Ticket/api";
import { ITicket } from "@/shared/types/Ticket";
import toast from "react-hot-toast";

export enum TICKET_TYPE {
  SOFT_NOT_WORKING,
  PAYMENT_PROBLEMS,
  RESET_HWID,
  COLLABORATION,
  ANOTHER_PROBLEM,
}

export const TICKET_TYPES = [
  {
    id: "1",
    image: require("@/shared/assets/icons/soft.svg"),
    bg: "linear-gradient(180deg, rgba(138, 218, 209, 0) 0%, rgba(138, 218, 209, 0.12) 100%)",
  },
  {
    id: "2",
    image: require("@/shared/assets/icons/payment.svg"),
    bg: "linear-gradient(180deg, rgba(111, 181, 73, 0) 0%, rgba(111, 181, 73, 0.12) 100%)",
  },
  {
    id: "3",
    image: require("@/shared/assets/icons/chip.svg"),
    bg: "linear-gradient(180deg, rgba(59, 135, 198, 0) 0%, rgba(59, 135, 198, 0.12) 100%)",
  },
  {
    id: "4",
    image: require("@/shared/assets/icons/colab.svg"),
    bg: "linear-gradient(180deg, rgba(255, 206, 52, 0) 0%, rgba(255, 206, 52, 0.12) 100%)",
  },
  {
    id: "5",
    image: require("@/shared/assets/icons/another-problem.svg"),
    bg: "linear-gradient(180deg, rgba(205, 209, 217, 0) 0%, rgba(205, 209, 217, 0.12) 100%)",
  },
];
export interface ITicketModalProps {
  close: () => void;
}

const TicketModal: FC<ITicketModalProps> = ({ close }) => {
  const [currentItem, setCurrentItem] = useState<number | null>(null);
  const t = useTranslations("tickets");
  const locale = useLocale();
  const [tickets, setTickets] = useState<ITicket[]>([]);

  useEffect(() => {
    getTicketsListApi().then((resp) => setTickets(resp.data));
  }, []);

  const handleCreateTicket = () => {
    if (currentItem) {
      createUserTicket(currentItem).then((resp) => {
        if (resp.status === 200) {
          toast.success(t("success"));
          close();
        }
      });
    }
  };

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
              {t("сreating")}
            </h2>
            <span className="ticket-modal__description">{t("selectType")}</span>
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
          {tickets.map(
            ({ id, name_ru, description_ru, name_en, description_en }, i) => (
              <li
                key={id}
                className="ticket-modal-list__item"
                onClick={() => setCurrentItem(id)}
              >
                <div
                  className="ticket-modal-list__image"
                  style={{
                    background:
                      TICKET_TYPES.find((t) => t.id === id.toString())?.bg ??
                      TICKET_TYPES[4]?.bg,
                  }}
                >
                  <Image
                    src={
                      TICKET_TYPES.find((t) => t.id === id.toString())?.image ??
                      TICKET_TYPES[4]?.image
                    }
                    alt="icon"
                  />
                </div>
                <div className="ticket-modal-list__wrapper">
                  <h2 className="ticket-modal-list__title">
                    {locale === "ru" ? name_ru : name_en}
                  </h2>
                  <span className="ticket-modal-list__description">
                    {locale === "ru" ? description_ru : description_en}
                  </span>
                </div>
                <AuthCheckbox
                  value={currentItem === id}
                  onChange={() => setCurrentItem(id)}
                />
              </li>
            ),
          )}
        </ul>
        <SeparatorLine light />
        <div className="w-full p-6">
          <PrimaryButton
            text={t("create")}
            click={handleCreateTicket}
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
