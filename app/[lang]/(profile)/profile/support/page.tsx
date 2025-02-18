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
import { useState } from "react";
import { TicketModal } from "@/features/Account";
import { getTicketsListApi } from "@/entities/Ticket/api";

export const revalidate = 60 * 15;

export default async function ProfileSupportPage() {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const tickets = await getTicketsListApi();

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
              Онлайн поддержка
            </h2>
            <span className="support__number flex h-6 w-6 items-center justify-center rounded-md bg-[#95B6B3] text-[11px] font-semibold text-[#0E1012]">
              12
            </span>
          </div>
          <PrimaryButton
            text="Создать тикет"
            textColor="##0E1012"
            color="#C0C6D1"
            click={() => setIsModalOpened(true)}
          />
        </div>
        {isModalOpened && <TicketModal close={() => setIsModalOpened(false)} />}
        <PurchasesList
          topics={["НОМЕР", "ВОПРОС", "ДАТА", "СТАТУС"]}
          items={[
            {
              image: "placeholder",
              title: "Medusa",
              game: "Escape From Tarkov",
              price: 12.99,
              date: "29 Мар 2024 в 12:30",
              status: PURCHASE_STATUS.DELIVERED,
            },
            {
              image: "placeholder",
              title: "Medusa",
              game: "Escape From Tarkov",
              price: 12.99,
              date: "29 Мар 2024 в 12:30",
              status: PURCHASE_STATUS.DELIVERED,
            },
            {
              image: "placeholder",
              title: "Medusa",
              game: "Escape From Tarkov",
              price: 12.99,
              date: "29 Мар 2024 в 12:30",
              status: PURCHASE_STATUS.DELIVERED,
            },
            {
              image: "placeholder",
              title: "Medusa",
              game: "Escape From Tarkov",
              price: 12.99,
              date: "29 Мар 2024 в 12:30",
              status: PURCHASE_STATUS.DELIVERED,
            },
            {
              image: "placeholder",
              title: "Medusa",
              game: "Escape From Tarkov",
              price: 12.99,
              date: "29 Мар 2024 в 12:30",
              status: PURCHASE_STATUS.DELIVERED,
            },
            {
              image: "placeholder",
              title: "Medusa",
              game: "Escape From Tarkov",
              price: 12.99,
              date: "29 Мар 2024 в 12:30",
              status: PURCHASE_STATUS.DELIVERED,
            },
          ]}
        />
      </MainContainer>
    </div>
  );
}
