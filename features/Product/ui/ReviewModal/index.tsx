"use client";

import {
  AuthCheckbox,
  ModalContainer,
  PrimaryButton,
  SeparatorLine,
} from "@/shared";
import Image from "next/image";
import { FC, useMemo, useState } from "react";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";

import "./styles.scss";
import { AuthTextarea } from "@/shared/ui/Inputs/Textarea/index";
import { leaveReview } from "@/entities/Review/api/index";
import { useTranslations } from "next-intl";

interface Props {
  type: string;
  productID: number;
  close: () => void;
}

export const ReviewModal: FC<Props> = ({ type, productID, close }) => {
  const [currentItem, setCurrentItem] = useState<number>(0);
  const [text, setText] = useState<string>('');

  const t = useTranslations('product.reviews');

  const variants = useMemo(() => {
    const result: string[] = [];
    const maxVariants = 8;
    for (let variant = 0; variant < maxVariants; ++variant) {
      result.push(t(`modal.variants.${variant}`));
    }
    return result;
  }, []);

  const submit = async () => {
    await leaveReview(type, productID, {
      variant: currentItem,
      text
    });
    close();
  }

  return (
    <ModalContainer className="flex items-center">
      <div className="review-modal">
        <div className="review-modal__top">
          <Image
            src={require("@/shared/assets/images/profile/modal-top-bg.svg")}
            alt="background"
            width={516}
            height={74}
            className="review-modal__background"
          />
          <div className="review-modal__wrapper">
            <h2 className={cn("review-modal__title", unbounded.className)}>
              {t('modal.title')}
            </h2>
            <span className="review-modal__description">
              {t('modal.text')}
            </span>
          </div>
          <span className="review-modal__close" onClick={close}>
            <Image
              src={require("@/shared/assets/icons/clear-search.svg")}
              width={16}
              height={16}
              alt="close-icon"
              className="review-modal__icon"
            />
          </span>
        </div>
        <SeparatorLine light />
        <div className="review-modal__content w-full pr-3 pl-3">
          <div className="review-modal__variants">
            <p className="text-[#8A8A98] text-[15px] mb-1">{t('modal.variants.select')}*</p>
            <div className="review-modal__variants__content grid grid-cols-4 gap-[6px] mt-3 mb-3">
              {variants.map((variant, index) => (
                <div 
                  className={cn('review-modal__variant h-[100px] flex flex-col justify-between p-[6px]', { 'review-modal__variant_active': currentItem === index })}
                  onClick={() => setCurrentItem(index)}
                >
                  <Image
                    src={require(`@/shared/assets/icons/reviews/${index}.png`)}
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px]">{variant}</p>
                </div>
              ))}
            </div>
          </div>
          <AuthTextarea
            label={`${t('modal.textarea.label')}*`}
            placeholder={`${t('modal.textarea.placeholder')}*`}
            value={text}
            onInput={setText}
          />
        </div>
        <div className="w-full p-6">
          <PrimaryButton
            text={t('modal.submit')}
            click={submit}
            classes="review-modal__button"
            color="#59B3A8"
            textColor="#0E1012"
          />
        </div>
      </div>
    </ModalContainer>
  );
};
