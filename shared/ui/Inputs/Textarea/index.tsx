"use client";

import { FC, SyntheticEvent } from "react";

interface Props {
  label?: string;
  name?: string;
  placeholder: string;
  value?: string;
  onInput?(value: string): void;
}

import "./styles.scss";

export const AuthTextarea: FC<Props> = ({
  label,
  name,
  placeholder,
  value,
  onInput
}) => {
  return (
    <label className="auth-textarea" htmlFor={name}>
      <span className="auth-textarea__label">{label}</span>
      <div className="auth-textarea__wrapper flex items-center gap-[6px]">
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          // @ts-ignore
          onInput={(e) => onInput && onInput(e.target.value)}
          className="auth-textarea__input"
        />
      </div>
    </label>
  );
};
