import Link from "next/link";
import { FC, ReactNode } from "react";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";

import { ButtonBorder } from "@/shared";

import "./styles.scss";

export interface IPrimaryButtonProps {
  color?: `#${string}`;
  textColor?: `#${string}`;
  text: string;
  href?: string;
  classes?: string;
  children?: ReactNode;
  type?: "button" | "submit";
  click?: () => void;
}

const PrimaryButton: FC<IPrimaryButtonProps> = ({
  color,
  text,
  href,
  textColor,
  classes,
  children,
  type,
  click,
}) => {
  const transformedBackgroundColor = color ? color : "#111215";

  const transformedTextColor = textColor
    ? `text-[${textColor}]`
    : "text-[#8A8A98]";

  if (href) {
    return (
      <a
        href={href}
        className={cn("primary-button", classes)}
        style={{ backgroundColor: transformedBackgroundColor }}
      >
        <ButtonBorder color={color} classes="primary-button__border" />
        <span
          className={cn(
            "primary-button__text",
            transformedTextColor,
            unbounded.className,
          )}
        >
          {!children ? text : children}
        </span>
        <ButtonBorder
          color={color}
          classes="primary-button__border primary-button__border_transformed"
        />
      </a>
    );
  }

  return (
    <button
      type={type}
      className={cn("primary-button", classes)}
      style={{ backgroundColor: transformedBackgroundColor }}
      onClick={click}
    >
      <ButtonBorder color={color} classes="primary-button__border" />
      {href ? (
        <a
          href={href}
          className={cn(
            "primary-button__text",
            transformedTextColor,
            unbounded.className,
          )}
        >
          {!children ? text : children}
        </a>
      ) : (
        <span
          className={cn(
            "primary-button__text",
            transformedTextColor,
            unbounded.className,
          )}
        >
          {!children ? text : children}
        </span>
      )}
      <ButtonBorder
        color={color}
        classes="primary-button__border primary-button__border_transformed"
      />
    </button>
  );
};

export default PrimaryButton;
