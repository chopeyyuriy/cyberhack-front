import { FC, ReactNode } from "react";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";

import { Slash } from "@/shared";

import "./styles.scss";

export interface IGroupHeadingProps {
  title: string;
  text: string;
  children?: ReactNode;
  classes?: string;
}

const GroupHeading: FC<IGroupHeadingProps> = ({
  classes,
  title,
  text,
  children,
}) => {
  return (
    <div className={cn("group-heading", classes)}>
      <div className="group-heading__wrapper">
        <h2 className={cn("group-heading__title", unbounded.className)}>
          {title}
        </h2>
        <Slash classes="group-heading__slash" />
        <span className="group-heading__text">{text}</span>
      </div>
      {children}
    </div>
  );
};

export default GroupHeading;
