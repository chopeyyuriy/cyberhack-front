import { FC } from "react";

import cn from "classnames";

import "./styles.scss";

export interface IButtonBorderProps {
  color?: `#${string}`;
  classes?: string;
}

const ButtonBorder: FC<IButtonBorderProps> = ({ color, classes }) => {
  const transformColor = color ? color : "#111215";

  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={cn("button-border", classes)}
    >
      <defs />
      <path
        id="3"
        d="M12 46L12 0L0 0L0 36.73C0 37.39 0.32 38 0.87 38.38L12 46Z"
        fill={transformColor}
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default ButtonBorder;
