import { OrderDetails } from "@/entities/Order";
import { NewsMenu } from "@/features/News";
import {
  BackButton,
  MainContainer,
  ProductContent,
  SeparatorLine,
} from "@/shared";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";

import "./styles.scss";
import { Fragment } from "react";
import Image from "next/image";
import { getProductByGameApi } from "@/entities/Product/api/index";
import { getProductStatusText } from "@/entities/Product/model/index";
import { ProductNavigation } from "@/shared/ui/Navigators/index";
import { ProductUpdates } from "@/features/Product/ui/Updates/index";
import { getWalletApi } from "@/entities/Session/api/index";

export const revalidate = 60 * 15;

interface Props {
  params: {
    lang: string;
    game: string;
    product: string;
  }
}

export default async function CheatUpdatesPage({
  params
}: Props) {
  const { lang } = params;

  const { data: product } = await getProductByGameApi(params.game, params.product);

  const { game } = product;

  const { data: wallet } = await getWalletApi();

  const items = product.updates.map((update: any) => {
    const text = update[`text_${lang}`];
    const items = text.split('\n');
    
    return {
      date: update.date,
      items: items.map((item: string) => {
        let status = 'common';
        const [firstChar] = Array.from(item.trim());
        if (firstChar === '=') {
          status = 'update';
          item = `• ${item.slice(1)}`
        } else if (firstChar === '+') {
          status = 'add';
        } else if (firstChar === '-') {
          status = 'remove';
        }

        return {
          status,
          text: status === 'common' ? `• ${item}` : item
        }
      })
    }
  });

  return (
    <MainContainer>
      <div 
        className="cheat-page__background"
        style={{ 'background-image': `url('${game.background}')` }}
      ></div>
      <div className="cheat-page mt-[18px]">
        <BackButton href={`/catalog/${game.path}`} />
        <div className="cheat-page__container mt-[18px] flex items-start gap-5 max-md:flex-col">
          <ProductNavigation
            currentPath="updates"
          />
          <ProductUpdates
            product={product}
            game={game}
            items={items}
          />
          <OrderDetails 
            wallet={wallet}
            rates={product.rates}
            priceHint={product[`price_hint_${lang}`]}
            extraLiteName={product.extra_lite_name}
            extraFullName={product.extra_full_name}
          />
        </div>
      </div>
    </MainContainer>
  );
}
