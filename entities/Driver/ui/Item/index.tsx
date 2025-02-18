import { PrimaryButton } from "@/shared";
import Image from "next/image";
import { FC } from "react";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";

import "./styles.scss";

export interface IDriverItemProps {
  icon: string;
  title: string;
  text: string;
  href: string;
  button: string;
}

const DriverItem: FC<IDriverItemProps> = ({ icon, title, text, href, button }) => {
  return (
    <li className="driver-item">
      <div className="driver-item__container">
        <div className="driver-item__icon">
          <Image
            src={require(`@/shared/assets/icons/${icon}.svg`)}
            alt="icon"
            width={30}
            height={30}
          />
        </div>
        <div className="driver-item__wrapper">
          <h4 className={cn("driver-item__title", unbounded.className)}>
            {title}
          </h4>
          <span className="driver-item__text">{text}</span>
        </div>
      </div>
      <PrimaryButton
        text={button}
        href={href}
        classes="max-md:w-[calc(100%_-_24px)]"
      />
    </li>
  );
};

export default DriverItem;
