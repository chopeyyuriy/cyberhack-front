import { getGameByIDApi, getGameInfoApi } from "@/entities/Game/api/index";
import { CheatItem } from "@/entities/Product";
import { getProductsByGameApi } from "@/entities/Product/api";
import { getProductStatusText } from "@/entities/Product/model/index";
import { GameView } from "@/features/Game/ui/View/index";
import { NewsMenu } from "@/features/News";
import {
  BackButton,
  MainContainer,
  SelectCheatCard,
  SeparatorLine,
  Slash,
} from "@/shared";
import { IconNew, IconPopular, IconPriceAsc, IconPriceDesc } from "@/shared/assets/icons/dynamic/Sort/index";
import { CategoriesMenu } from "@/shared/ui/Categories/index";
import { ProductStoreProvider } from "@/store/Product/provider";
import { SearchNews } from "@/widgets/News";
import Image from "next/image";
import { Fragment } from "react";
import "./styles.scss"
import type { Metadata } from 'next'
import { getWalletApi } from "@/entities/Session/api/index";

export const revalidate = 60 * 15;

interface Props {
  params: {
    lang: string;
    game: string;
  }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { game: path, lang } = params;
 
  const { data: game } = await getGameInfoApi(path)

  return {
    title: game[`seo_title_${lang}`],
    description: game[`seo_description_${lang}`],
    keywords:  game[`seo_keywords_${lang}`],
    openGraph: {
      title: game[`seo_title_${lang}`],
      description: game[`seo_description_${lang}`],
      images: [game.image]
    },
  }
}

export default async function SelectCheatsPage({
  params
}: Props) {
  const { lang, game: path } = params;

  const { data: game } = await getGameInfoApi(path)

  const { data: products } = await getProductsByGameApi(game.id);

  const { data: wallet } = await getWalletApi();

  let childrenItems = game.childrens;

  if (game.parent_id) {
    const { data: parent } = await getGameByIDApi(game.parent_id);
    childrenItems = parent.childrens;
  }

  return (
    <MainContainer>
      <div 
        className="select-cheats__background"
        style={{ 'background-image': `url('${game.background}')` }}
      ></div>
      <div className="select-cheats mt-[18px]">
        <BackButton />
        <GameView
          childrenItems={childrenItems}
          game={game}
          products={products}
          wallet={wallet}
        />
      </div>
    </MainContainer>
  );
}
