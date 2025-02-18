"use client";

import { FC } from "react";

import cn from "classnames";

import "./styles.scss";

export interface IPrimaryCheckboxProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const PrimaryCheckbox: FC<IPrimaryCheckboxProps> = ({ value, onChange }) => {
  return (
    <div
      className={cn("primary-checkbox", {
        "primary-checkbox_active": value,
      })}
      onClick={() => onChange(!value)}
    >
      <span className="primary-checkbox__circle"></span>
    </div>
  );
};

export default PrimaryCheckbox;
