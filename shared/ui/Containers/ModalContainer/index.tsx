"use client";

import { FC, ReactNode } from "react";

import "./styles.scss";
import { createPortal } from "react-dom";

export interface IModalContainerProps {
  children?: ReactNode;
  className?: string;
}

const ModalContainer: FC<IModalContainerProps> = ({ children, className }) => {
  return createPortal(
    <div className={`modal-container ${className ?? ''}`}>{children}</div>,
    document.body,
  );
};

export default ModalContainer;
