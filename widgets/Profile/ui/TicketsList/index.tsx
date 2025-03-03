"use client";
import { FC, Fragment } from "react";

import Image from "next/image";

import cn from "classnames";

import "./styles.scss";
import { unbounded } from "@/shared/fonts";
import { PurchaseModal } from "@/features/Account";
import { TICKET_TYPES } from "@/features/Account/ui/TicketModal";
import { Empty } from "./Empty";
import { useLocale, useTranslations } from "next-intl";
import { IUserTicket } from "@/shared/types/Ticket";
import { useRouter } from "next/navigation";

export interface ITicketsListProps {
  topics: string[];
  items: IUserTicket[];
}

export const STATUSES: string[] = ["open", "inProgress", "closedStatus"];

export const handleFormatDate = (d: string): string => {
  const date = new Date(d);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};

const TicketsList: FC<ITicketsListProps> = ({ topics, items }) => {
  const t = useTranslations("tickets");
  const locale = useLocale();
  const router = useRouter();

  return (
    <>
      {items?.length > 0 ? (
        <div className="tickets-list">
          <div className="tickets-list__top">
            {topics.map((item, index) => (
              <span className="tickets-list__column" key={index}>
                {item}
              </span>
            ))}
          </div>
          <ul className="tickets-list__list">
            {items.map((item, index) => (
              <Fragment key={index}>
                <li
                  className={cn("tickets-list__item", {
                    "tickets-list__item_secondary": index % 2 === 1,
                  })}
                  key={index}
                  onClick={() => router.push(`/profile/support/${item.id}`)}
                >
                  <div className="tickets-list__id">{item.id}</div>
                  <div className="tickets-list__question">
                    <div
                      style={{
                        background:
                          TICKET_TYPES.find(
                            (t) => t.id === item.theme.id.toString(),
                          )?.bg ?? TICKET_TYPES[4]?.bg,
                      }}
                    >
                      <Image
                        src={
                          TICKET_TYPES?.find(
                            (t) => t.id === item.theme.id.toString(),
                          )?.image
                        }
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                    {locale === "ru" ? item.theme.name_ru : item.theme.name_en}
                  </div>
                  <div className="tickets-list__date">
                    {handleFormatDate(item.created_at)}
                  </div>
                  <div
                    className={`tickets-list__status ${STATUSES[item.status]}`}
                  >
                    {/* @ts-ignore */}
                    {t(`${STATUSES[item.status]}`)}
                  </div>
                </li>
              </Fragment>
            ))}
          </ul>
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default TicketsList;
