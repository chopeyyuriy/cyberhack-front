import { FC, ReactNode } from "react";

import cn from "classnames";

export interface IInlineContainerProps {
  children?: ReactNode;
  className?: string;
}

const InlineContainer: FC<IInlineContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "inline-container flex items-center justify-between p-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default InlineContainer;
