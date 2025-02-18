import { FC } from "react";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";
import Link from "next/link";

export interface IAuthHeadingProps {
  title: string;
  subtitle: string;
  href: string;
  hrefText: string;
}

const AuthHeading: FC<IAuthHeadingProps> = ({
  title,
  subtitle,
  href,
  hrefText,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <h2
        className={cn(
          "login__title text-[28px] text-[#C0C6D1]",
          unbounded.className,
        )}
      >
        {title}
      </h2>
      <div className="mb-[45px] flex items-center gap-1 gap-1 whitespace-nowrap">
        <span className="text-[15px] font-light text-[#8A8A98]">
          {subtitle}
        </span>
        <a href={href} className="text-[15px] font-light text-[#59B3A8]">
          {hrefText}
        </a>
      </div>
    </div>
  );
};

export default AuthHeading;
