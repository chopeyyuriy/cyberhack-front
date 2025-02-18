"use client";

import { FC, SyntheticEvent } from "react";

export interface IAuthInputProps {
  icon?: string;
  label?: string;
  name?: string;
  register: Function;
  placeholder: string;
  type: "text" | "password" | "email";
  readonly?: boolean;
}

import Image from "next/image";
import "./styles.scss";

const AuthInput: FC<IAuthInputProps> = ({
  icon,
  name,
  register,
  label,
  placeholder,
  type,
  readonly,
}) => {
  return (
    <label className="auth-input" htmlFor={name}>
      <span className="auth-input__label">{label}</span>
      <div className="auth-input__wrapper flex items-center gap-[6px]">
        {/* {icon && (
          <Image
            src={require(`@/shared/assets/icons/${icon}.svg`)}
            width={20}
            height={20}
            alt="icon"
            className=""
          />
        )} */}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          {...register(name)}
          autoComplete="off"
          className="auth-input__input"
          readOnly={readonly}
        />
      </div>
    </label>
  );
};

export default AuthInput;
