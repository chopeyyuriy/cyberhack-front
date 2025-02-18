"use client";

import { FC } from "react";

import Image from "next/image";

import { unbounded } from "@/shared/fonts";
import cn from "classnames";
import { useTranslations } from "next-intl";

import { useRouter } from "next/navigation";
import "./styles.scss";

interface Props {
  href?: string;
}

const BackButton: FC<Props> = ({
  href
}) => {
  const router = useRouter();

  const t = useTranslations('product')

  const back = async () => {
    if (href) {
      router.push(href);
      return;
    }
    router.push("/catalog");
  };

  return (
    <button className="back-button" onClick={() => back()}>
      <Image
        src={require("@/shared/assets/icons/arrow-left.svg")}
        alt="icon"
        width={24}
        height={24}
        className="back-button__icon"
      />
      <span className={cn("back-button__text", unbounded.className)}>
        {t('back')}
      </span>
    </button>
  );
};

export default BackButton;
