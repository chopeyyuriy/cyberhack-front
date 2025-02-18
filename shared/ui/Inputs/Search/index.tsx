"use client";

import { FC, useEffect, useRef } from "react";

import Image from "next/image";

import SearchIcon from "@/shared/assets/icons/Search.svg";
import ClearSearch from "@/shared/assets/icons/clear-search.svg";

import cn from "classnames";

import "./styles.scss";

export interface ISearchProps {
  placeholder: string;
  searchValue: string;
  clear?: boolean;
  className?: string;
  click?: () => void;
  onChange: (value: string) => void;
  setRef?: (value: any) => void;
}

const Search: FC<ISearchProps> = ({
  placeholder,
  searchValue,
  clear,
  className,
  click,
  onChange,
  setRef,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (setRef) {
      setRef(ref);
    }
  }, [ref]);

  const onUpdateSearchValue = (event: any) => {
    onChange(event.target.value);
  };

  return (
    <label className={cn("search", className)} onClick={click}>
      <Image
        src={SearchIcon}
        width={20}
        height={20}
        alt="search-logo"
        className="search__icon"
      />
      <input
        ref={ref}
        placeholder={placeholder}
        type="text"
        value={searchValue}
        className="search__input"
        onChange={(e) => onUpdateSearchValue(e)}
      />
      {clear && (
        <Image
          src={ClearSearch}
          width={20}
          height={20}
          className="search__clear"
          alt="clear-icon"
          onClick={() => onChange("")}
        />
      )}
    </label>
  );
};

export default Search;
