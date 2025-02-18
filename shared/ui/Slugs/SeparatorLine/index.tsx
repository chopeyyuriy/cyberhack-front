import { FC } from "react";

import cn from "classnames";

import "./styles.scss";

export interface ISeparatorLineProps {
  classes?: string;
  light?: boolean;
}

const SeparatorLine: FC<ISeparatorLineProps> = ({ classes, light }) => {
  return (
    <div className={cn("separator", { separator_light: light }, classes)} />
  );
};

export default SeparatorLine;
