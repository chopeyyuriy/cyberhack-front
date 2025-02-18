import { OrderDetails } from "@/entities/Order";
import { NewsMenu } from "@/features/News";
import {
  BackButton,
  MainContainer,
  ProductContent,
  SeparatorLine,
} from "@/shared";
import Image from "next/image";

import "./styles.scss";
import { getProductByGameApi } from "@/entities/Product/api";
import { getProductStatusText } from "@/entities/Product/model/index";
import { CategoriesMenu } from "@/shared/ui/Categories/index";
import { ProductNavigation } from "@/shared/ui/Navigators/index";
import { ProductMedia } from "@/features/Product/ui/Media/index";
import type { Metadata } from "next";
import { getWalletApi } from "@/entities/Session/api/index";

export const revalidate = 60 * 15;

interface Props {
  params: {
    lang: string;
    game: string;
    product: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { game, product: path, lang } = params;

  const { data: product } = await getProductByGameApi(game, path);

  return {
    title: product[`seo_title_${lang}`],
    description: product[`seo_description_${lang}`],
    keywords: product[`seo_keywords_${lang}`],
    openGraph: {
      title: product[`seo_title_${lang}`],
      description: product[`seo_description_${lang}`],
      images: [product.image],
    },
  };
}

export default async function CheatPage({ params }: Props) {
  const { lang } = params;

  const { data: product } = await getProductByGameApi(
    params.game,
    params.product,
  );

  console.log(product);

  const { game } = product;

  const images = product.images;

  const [mainImage] = images;

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
          <ProductNavigation currentPath="media" />
          <ProductMedia
            product={product}
            game={game}
            images={images}
            video={product.video}
            mainImage={mainImage}
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
