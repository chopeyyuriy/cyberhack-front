"use client";

import { ModalContainer, SeparatorLine } from "@/shared";
import Image from "next/image";
import { FC } from "react";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";

import "./styles.scss";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { IconProfile } from "@/shared/assets/icons/dynamic";

const TYPES = [
  {
    title: "profile",
    bg: "linear-gradient(180deg, rgba(138, 218, 209, 0) 0%, rgba(138, 218, 209, 0.12) 100%)",
    link: "/profile/support",
    icon: <IconProfile />,
  },
  {
    title: "discord",
    image: require("@/shared/assets/icons/discord.png"),
    bg: "linear-gradient(180deg, rgba(111, 181, 73, 0) 0%, rgba(88, 101, 242, 0.12) 100%)",
    link: "https://discord.com/invite/Xbmy5fAbd5",
    className: "discord",
  },
];

export interface ITicketModalProps {
  close: () => void;
}

const TicketModal: FC<ITicketModalProps> = ({ close }) => {
  const t = useTranslations("tickets");
  const route = useRouter();

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
          {TYPES.map(({ title, image, icon, bg, link, className }, i) => (
            <li
              key={i}
              className={`ticket-modal-list__item ${className}`}
              onClick={() => route.push(link)}
            >
              <div
                className="ticket-modal-list__image"
                style={{
                  background: bg,
                }}
              >
                {image ? <Image src={image} alt="icon" /> : icon}
              </div>
              <div className="ticket-modal-list__wrapper">
                {/* @ts-ignore  */}
                <h2 className="ticket-modal-list__title">{t(title)}</h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ModalContainer>
  );
};

export default TicketModal;
