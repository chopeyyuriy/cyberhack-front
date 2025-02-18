import {
  Advantages,
  FavoriteCategories,
  Introduction,
  Selection,
} from "@/widgets/Home";
import type { Metadata } from "next";

import { AccountsBanner, MainContainer, SeparatorLine } from "@/shared";
import { getSelectionsApi } from "@/entities/Game/api/index";

export const revalidate = 60 * 15;

interface Props {
  params: {
    lang: string;
  };
}

const meta = {
  ru: {
    title: "CyberHack - Лучшие приватные Читы, Спуферы и Игровые Аккаунты",
    keywords:
      "читы для игр, читы для ПК, спуферы, анти-чит защита, гейминг хаки, купить читы, обойти бан",
    description:
      "CyberHack предлагает мощные и безопасные читы для популярных игр, а также спуферы для обхода аппаратных банов и анти-чит систем. Надежность, простота установки и высокий уровень защиты обеспечат вам превосходство в играх.",
    openGraph: {
      title: "CyberHack - Лучшие приватные Читы, Спуферы и Игровые Аккаунты",
      description:
        "CyberHack предлагает мощные и безопасные читы для популярных игр, а также спуферы для обхода аппаратных банов и анти-чит систем. Надежность, простота установки и высокий уровень защиты обеспечат вам превосходство в играх.",
    },
  },
  en: {
    title: "CyberHack - Best Private Cheats, Spoofers, and Game Accounts",
    keywords:
      "game cheats, PC cheats, spoofers, anti-cheat bypass, gaming hacks, buy cheats, bypass ban",
    description:
      "CyberHack provides powerful and secure cheats for popular games, as well as spoofers to bypass hardware bans and anti-cheat systems. With reliability, easy installation, and top-notch protection, dominate your games with ease.",
    openGraph: {
      title: "CyberHack - Best Private Cheats, Spoofers, and Game Accounts",
      description:
        "CyberHack provides powerful and secure cheats for popular games, as well as spoofers to bypass hardware bans and anti-cheat systems. With reliability, easy installation, and top-notch protection, dominate your games with ease.",
    },
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // @ts-ignore
  return meta[params.lang];
}

export default async function Home({ params }: Props) {
  const { lang } = params;

  const { data: selections } = await getSelectionsApi();

  console.log(selections);
  return (
    <main className="home">
      <Introduction />
      <Advantages />
      <FavoriteCategories />
      <MainContainer
        classes="mt-30"
        styles={{ marginTop: "129.5px", marginBottom: "96px" }}
      >
        <SeparatorLine />
      </MainContainer>
      <Selection
        selections={selections.map((selection: any) => ({
          title: selection[`name_${lang}`],
          text: selection[`text_${lang}`],
          backgroundImage: selection.image,
          href: `/catalog`,
          gameImages: selection.games.map(({ game }: any) => game.icon),
        }))}
      />
      <AccountsBanner />
    </main>
  );
}
