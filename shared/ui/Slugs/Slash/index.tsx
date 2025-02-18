import { FC } from "react";

import cn from "classnames";

import "./styles.scss";

export interface ISlashProps {
  classes?: string;
}

const Slash: FC<ISlashProps> = ({ classes }) => {
  return <span className={cn("slash", classes)} />;
};

export default Slash;
