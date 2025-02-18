import Image from "next/image";
import { FC } from "react";
import { SeparatorLine } from "../../Slugs";

import { unbounded } from "@/shared/fonts";
import cn from "classnames";

import "./styles.scss";
import { getProductStatusText } from "@/entities/Product/model/index";
import { IconBSG, IconEpicGames, IconSteam } from "@/shared/assets/icons/dynamic/Platform/index";

export interface IProductContentProps {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  platform?: number;
}

const GameAccountContent: FC<IProductContentProps> = ({
  image,
  subtitle,
  title,
  description,
  platform = 0
}) => {
  const platforms = [
    {
      name: 'Steam',
      icon: <IconSteam />
    },
    {
      name: 'Epic Games',
      icon: <IconEpicGames />
    },
    {
      name: 'BSG Launcher',
      icon: <IconBSG />
    }
  ];

  return (
    <div className="game-account-content">
      <div className="game-account-content__top flex gap-5">
        <Image
          src={image}
          width={126}
          height={156}
          alt="product"
        />
        <div className="game-account-content__wrapper w-100p" style={{width: '100%'}}>
          <div className="flex justify-between items-start" style={{width: '100%'}}>
            <div>
              <span
                className={cn("game-account-content__subtitle", unbounded.className)}
              >
                {subtitle}
              </span>
              <h4 className={cn("game-account-content__title", 'mb-2', unbounded.className)}>
                {title}
              </h4>
            </div>
            <div className={`mt-1 game-account-content__platform game-account-content__platform_${platform} flex items-center gap-1 px-1`}>
              {platforms[platform].icon}
              {platforms[platform].name}
            </div>
          </div>
          <SeparatorLine />
          <p className="game-account-content__description mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default GameAccountContent;
