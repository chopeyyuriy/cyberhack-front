import cn from "classnames";
import { unbounded } from "@/shared/fonts";

import { PurchasesList } from "@/widgets/Profile";

import { PURCHASE_STATUS } from "@/shared/ui/Slugs/PurchaseStatus";

import {
  MainContainer,
  ProductsUnavailableBanner,
  SeparatorLine,
} from "@/shared";

export const revalidate = 60 * 15;

export default async function ProfilePurchasesPage() {
  return (
    <div className="purchases">
      <MainContainer classes="flex flex-col gap-6 !px-[30px]">
        <ProductsUnavailableBanner />
        <SeparatorLine />
        <div className="purchases__top flex items-center gap-3">
          <h2
            className={cn(
              "purchases__title text-sm text-[#C0C6D1]",
              unbounded.className,
            )}
          >
            Мои покупки
          </h2>
          <span className="purchases__number flex h-6 w-6 items-center justify-center rounded-md bg-[#95B6B3] text-[11px] font-semibold text-[#0E1012]">
            12
          </span>
        </div>
        <PurchasesList
          topics={["НАЗВАНИЕ ПРОДУКТА", "ЦЕНА", "ДАТА", "СТАТУС"]}
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
