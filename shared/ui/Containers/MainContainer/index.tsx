import { FC, ReactNode } from "react";

import cn from "classnames";

import "./styles.scss";

export interface IMainContainerProps {
  children: ReactNode;
  classes?: string;
  styles?: object;
}

const MainContainer: FC<IMainContainerProps> = ({
  styles,
  children,
  classes,
}) => {
  return (
    <div style={styles} className={cn("main-container", classes)}>
      {children}
    </div>
  );
};

export default MainContainer;
