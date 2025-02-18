"use client";

import { FC } from "react";

import { unbounded } from "@/shared/fonts";

import cn from "classnames";

import Image from "next/image";
import { SeparatorLine } from "../../Slugs";
import "./styles.scss";
import { useTranslations } from "next-intl";

export interface IAvatarModalProps {
  currentAvatar: number | null;
  selectAvatar: (index: number) => void;
  close: () => void;
  save: () => void;
}

const AvatarsModal: FC<IAvatarModalProps> = ({
  currentAvatar,
  selectAvatar,
  close,
  save
}) => {
  const t = useTranslations('register');

  const avatars = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25,
  ];

  return (
    <div className="avatars-modal max-md:!w-[90%]">
      <div className="avatars-modal__content">
        <h2 className={cn("avatars-modal__title", unbounded.className)}>
          {t('avatar.modal.title')}
        </h2>
        <span className="avatars-modal__description">
          {t('avatar.modal.text')}
        </span>
        <span onClick={() => close()} className="avatars-modal__close">
          <Image
            src={require("@/shared/assets/icons/clear-search.svg")}
            width={16}
            height={16}
            alt="close"
          />
        </span>
      </div>
      <SeparatorLine />
      <ul className="avatars-modal__list">
        {avatars.map((item, index) => (
          <li
            key={index}
            className={cn("avatars-modal__item", {
              "avatars-modal__item_active": item === currentAvatar,
            })}
            onClick={() => selectAvatar(item)}
          >
            <Image
              src={require(`@/shared/assets/icons/avatars/animoji-${item}.png`)}
              alt="avatar"
              width={64}
              height={64}
              className="avatars-modal__image"
            />
            {item === currentAvatar && (
              <Image
                src={require("@/shared/assets/icons/check.svg")}
                alt="check"
                width={20}
                height={20}
                className={cn("avatars-modal__check", {
                  "avatars-modal__check_active": item === currentAvatar,
                })}
              />
            )}
          </li>
        ))}
      </ul>
      <SeparatorLine />
      <button
        type="button"
        onClick={() => save()}
        className={cn("avatars-modal__button", unbounded.className)}
      >
        {t('avatar.modal.submit')}
      </button>
    </div>
  );
};

export default AvatarsModal;
