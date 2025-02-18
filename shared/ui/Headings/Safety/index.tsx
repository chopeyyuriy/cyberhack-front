import { FC } from "react";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";

import "./styles.scss";

export interface ISafetyTitleProps {
  text: string;
}

const SafetyTitle: FC<ISafetyTitleProps> = ({ text }) => {
  return <h4 className={cn("safety-title", unbounded.className)}>{text}</h4>;
};

export default SafetyTitle;
