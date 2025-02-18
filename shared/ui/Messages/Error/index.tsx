import { FC } from "react";

import Image from "next/image";
import "./styles.scss";

export interface IErrorMessageProps {
  text: any;
}

const ErrorMessage: FC<IErrorMessageProps> = ({ text }) => {
  return (
    <div className="error-message">
      <Image
        src={require("@/shared/assets/icons/error.svg")}
        alt="error"
        width={16}
        height={16}
        className="error-message__icon"
      />
      <span className="error-message__text">{text}</span>
    </div>
  );
};

export default ErrorMessage;
