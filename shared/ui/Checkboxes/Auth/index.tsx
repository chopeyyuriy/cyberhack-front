"use client";

import { FC } from "react";

import cn from "classnames";

import "./styles.scss";

export interface IAuthCheckboxProps {
  value: boolean;
  onChange?: (value: boolean) => void;
}

const AuthCheckbox: FC<IAuthCheckboxProps> = ({ value, onChange }) => {
  const handleChange = () => {
    onChange(!value);
  };

  return (
    <div className="auth-checkbox" onClick={() => handleChange()}>
      <span
        className={cn("auth-checkbox__inner", {
          "auth-checkbox__inner_active": value,
        })}
      />
    </div>
  );
};

export default AuthCheckbox;
