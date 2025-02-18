import { FC } from "react";

import Image from "next/image";

import "./styles.scss";

export interface ITagWithCloseProps {
  text: string;
  onClose: () => void;
}

const TagWithClose: FC<ITagWithCloseProps> = ({ text, onClose }) => {
  return (
    <div className="tag-with-close" onClick={() => onClose()}>
      <span className="tag-with-close__text">{text}</span>
      <Image
        src={require("@/shared/assets/icons/clear-search.svg")}
        width={22}
        height={22}
        alt="close"
        className="tag-with-close__icon"
      />
    </div>
  );
};

export default TagWithClose;
