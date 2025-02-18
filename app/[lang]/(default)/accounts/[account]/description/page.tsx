import { OrderDetails } from "@/entities/Order";
import {
  BackButton,
  MainContainer,
  ProductContent,
  SeparatorLine,
} from "@/shared";
import Image from "next/image";

import { unbounded } from "@/shared/fonts";
import cn from "classnames";

import "./styles.scss";
import { ProductNavigation } from "@/shared/ui/Navigators/index";
import { getAccountApi } from "@/entities/GameAccount/api/index";
import GameAccountContent from "@/shared/ui/Cards/GameAccountContent/index";
import { AccountNavigation } from "@/shared/ui/Navigators/AccountNavigation/index";
import { AccountsDescription } from "@/features/Accounts/ui/Description/index";
import { getWalletApi } from "@/entities/Session/api/index";

export const revalidate = 60 * 15;

interface Props {
  params: {
    lang: string;
    account: string;
  }
}

export default async function CheatPage({
  params
}: Props) {
  const { lang } = params;

  const { data: product } = await getAccountApi(params.account);

  const images = product.images;
  
  const [mainImage] = images;

  const { data: wallet } = await getWalletApi();

  return (
    <MainContainer>
      <div className="cheat-page mt-[18px]">
        <BackButton />
        <div className="cheat-page__container mt-[18px] flex items-start gap-5 max-md:flex-col">
          <AccountNavigation
            currentPath="description"
          />
          <AccountsDescription
            product={product}
          />
          <OrderDetails 
            wallet={wallet}
            withoutTitle={true}
            rates={product.rates}
            priceHint={product[`price_hint_${lang}`]}
          />
        </div>
      </div>
    </MainContainer>
  );
}
