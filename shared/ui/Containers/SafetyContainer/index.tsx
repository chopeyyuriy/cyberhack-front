import { FC, ReactNode } from "react";
import { SeparatorLine } from "../../Slugs";

import cn from "classnames";

export interface ISafetyContainerProps {
  children?: ReactNode;
  className?: string;
}

const SafetyContainer: FC<ISafetyContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <SeparatorLine />
      <div className="safety-container flex flex-col gap-4">{children}</div>
    </div>
  );
};

export default SafetyContainer;
