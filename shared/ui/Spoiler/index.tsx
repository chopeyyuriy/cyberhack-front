"use client";

import { FC, ReactNode, useState } from "react";
import "./styles.scss";
import { unbounded } from "@/shared/fonts";
import Image from "next/image";

interface Props {
  title: string;
  icon: JSX.Element | ReactNode;
  children: JSX.Element | ReactNode;
}

export const Spoiler: FC<Props> = ({
  title,
  icon,
  children
}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div className="spoiler">
      <div className="spoiler-head" onClick={() => setIsOpened(!isOpened)}>
        <div className="spoiler-head__left">
          <div className="spoiler-head__icon">
            {icon}
          </div>
          <p className={unbounded.className}>{title}</p>
        </div>
        <Image
          className={`spoiler__arrow ${isOpened ? 'spoiler__arrow_opened' : ''}`}
          src={require("@/shared/assets/icons/chevron-down-light.svg")}
          alt="icon"
        />
      </div>
      {
        isOpened &&
        <div className="spoiler-content">
          {children}
        </div>
      }
    </div>
  )
}