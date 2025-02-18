"use client";

import cn from "classnames"
import { FC, useMemo } from "react";
import "./styles.scss";

interface Props {
  max: number;
  current: number;
  change(page: number): void | Promise<void>;
}

export const Pagination: FC<Props> = ({
  max,
  current,
  change
}) => {
  const pages = useMemo(() => {
    const buttons: number[] = [];
    for (let index = 0; index < max; ++index) {
      buttons.push(index + 1);
    }
    return buttons;
  }, [max]);

  return <div className="pagination">
    {
      pages.map((page) => (
        <div className={cn('pagination__button', {
          'pagination__button_active': page === current
        })} onClick={() => change(page)}>
          {page}
        </div>
      ))
    }
  </div>
};