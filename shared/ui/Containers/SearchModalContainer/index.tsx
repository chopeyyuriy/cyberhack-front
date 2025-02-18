"use client";

import { FC, useEffect, useRef } from "react";

import { ModalContainer } from "@/shared";
import "./styles.scss";

export interface ISearchModalContainerProps {
  children?: React.ReactNode;
  setRef?: (value: any) => void;
}

const SearchModalContainer: FC<ISearchModalContainerProps> = ({
  setRef,
  children,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    handleRef(ref);
  }, [ref]);

  const handleRef = (value: any) => {
    if (setRef) {
      setRef(value);
    }
  };

  return (
    <ModalContainer>
      <div ref={ref} className="search-modal-container">
        {children}
      </div>
    </ModalContainer>
  );
};

export default SearchModalContainer;
