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
import { ProductReviews } from "@/features/Product/ui/Reviews/index";
import { getReviewsForProduct } from "@/entities/Review/api/index";
import { getWalletApi } from "@/entities/Session/api/index";

export const revalidate = 60 * 15;

interface Props {
  params: {
    lang: string;
    game: string;
    product: string;
  };
}

export default async function CheatReviewsPage({ params }: Props) {
  const { lang } = params;

  const { data: product } = await getProductByGameApi(
    params.game,
    params.product,
  );

  const { game } = product;

  const { data: wallet } = await getWalletApi();

  return (
    <MainContainer>
      <div
        className="cheat-page__background"
        style={{ "background-image": `url('${game.background}')` }}
      ></div>
      <div className="cheat-page mt-[18px]">
        <BackButton href={`/catalog/${game.path}`} />
        <div className="cheat-page__container mt-[18px] flex items-start gap-5 max-md:flex-col">
          <ProductNavigation currentPath="reviews" />
          <ProductReviews product={product} game={game} />
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
