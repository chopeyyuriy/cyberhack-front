import { FC } from "react";

import Image from "next/image";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";
import { useTranslations } from "next-intl";

import "./styles.scss";

interface Props {
  name: string;
  description: string;
  image: string;
}

const SelectCheatCard: FC<Props> = ({
  name,
  description,
  image
}) => {
  const t = useTranslations('game');
  return (
    <div className="select-cheat-card max-md:!w-full">
      <Image
        src={image}
        alt="select"
        width={286}
        height={120}
        className="select-cheat-card__image"
      />
      <div className="select-cheat-card__content">
        <span
          className={cn("select-cheat-card__subtitle", unbounded.className)}
        >
          {t('cheatsFor')}
        </span>
        <h4 className={cn("select-cheat-card__title", unbounded.className)}>
          {name}
        </h4>
      </div>
      <p className="select-cheat-card__description">
        {description}
      </p>
    </div>
  );
};

export default SelectCheatCard;
