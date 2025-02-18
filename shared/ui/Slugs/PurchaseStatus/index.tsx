import { FC } from "react";

import cn from "classnames";

import "./styles.scss";

export enum PURCHASE_STATUS {
  DELIVERED,
  IN_PROGRESS,
  NOT_DELIVERED,
}

export interface IPurchaseStatusProps {
  status: PURCHASE_STATUS;
}

const PurchaseStatus: FC<IPurchaseStatusProps> = ({ status }) => {
  let text: string | null = null;

  if (status === PURCHASE_STATUS.DELIVERED) {
    text = "Доставлено";
  } else if (status === PURCHASE_STATUS.IN_PROGRESS) {
    text = "В процессе";
  } else {
    text = "Не доставлено";
  }

  return (
    <span
      className={cn("purchase-status", {
        "purchase-status_delivered": status === PURCHASE_STATUS.DELIVERED,
        "purchase-status_progress": status === PURCHASE_STATUS.IN_PROGRESS,
      })}
    >
      {text}
    </span>
  );
};

export default PurchaseStatus;
