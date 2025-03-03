"use client";

import cn from "classnames";
import { unbounded } from "@/shared/fonts";

import { PurchasesList } from "@/widgets/Profile";

import { PURCHASE_STATUS } from "@/shared/ui/Slugs/PurchaseStatus";

import {
  MainContainer,
  PrimaryButton,
  ProductsUnavailableBanner,
  SeparatorLine,
  SupportBanner,
} from "@/shared";
import { useEffect, useState } from "react";
import { TicketModal } from "@/features/Account";
import TicketsList from "@/widgets/Profile/ui/TicketsList";
import { useTranslations } from "next-intl";
import { getUserTickets } from "@/entities/Ticket/api";
import { IUserTicketsListResp } from "@/shared/types/Ticket";
import { Pagination } from "@/shared/ui/Pagination";

// export const revalidate = 60 * 15;

export default function ProfileSupportPage() {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [selectedTicket, setSelectedTicket] = useState<string | undefined>();
  const t = useTranslations("tickets");
  const [tickets, setTickets] = useState<IUserTicketsListResp | undefined>();

  const handleGetTickets = (page = 1) => {
    getUserTickets(page).then((resp) => setTickets(resp?.data));
  };

  useEffect(() => {
    handleGetTickets();
  }, []);

  return (
    <div className="support">
      <MainContainer classes="flex flex-col gap-6 !px-[30px]">
        <SupportBanner />
        <SeparatorLine />
        <div className="support__top flex items-center justify-between">
          <div className=" flex items-center gap-3">
            <h2
              className={cn(
                "support__title text-sm text-[#C0C6D1]",
                unbounded.className,
              )}
            >
              {t("support")}
            </h2>
            <span className="support__number flex h-6 w-6 items-center justify-center rounded-md bg-[#95B6B3] text-[11px] font-semibold text-[#0E1012]">
              {tickets?.total ?? 0}
            </span>
          </div>
          <PrimaryButton
            text={t("create")}
            textColor="##0E1012"
            color="#C0C6D1"
            click={() => setIsModalOpened(true)}
          />
        </div>
        {isModalOpened && <TicketModal close={() => setIsModalOpened(false)} />}
        <TicketsList
          topics={[t("number"), t("question"), t("date"), t("status")]}
          items={tickets?.data ?? []}
        />
        {(tickets?.last_page ?? 0) > 1 ? (
          <Pagination
            current={tickets?.current_page ?? 1}
            max={tickets?.last_page ?? 1}
            change={handleGetTickets}
          />
        ) : null}
      </MainContainer>
    </div>
  );
}
