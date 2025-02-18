import { NewsMenu } from "@/features/News";
import { MainContainer, NewsCard, SeparatorLine } from "@/shared";
import { SearchNews } from "@/widgets/News";

import { unbounded } from "@/shared/fonts";
import cn from "classnames";
import { Fragment, useState } from "react";
import { NewsStoreProvider } from "@/store/News/provider";
import { getNewsApi } from "@/entities/News/api/index";
import { NewsContent } from "@/features/News/ui/index";
import { getGamesApi } from "@/entities/Game/api/index";
import { NewsView } from "@/features/News/ui/View/index";

const meta = {
  ru: {
    title: "CyberHack - Новости мира Читов, Спуферов и Игровых Аккаунтов",
    keywords: "новости читы, новости спуферы, обновления анти-чит, новости гейминга, игровые аккаунты, читы для ПК, новые читы, обновления читов",
    description: "На странице новостей CyberHack вы найдете последние обновления мира читов, спуферов и игровых аккаунтов. Будьте в курсе всех новинок, обновлений анти-чит систем и эксклюзивных предложений для игроков.",
    openGraph: {
      title: "CyberHack - Новости мира Читов, Спуферов и Игровых Аккаунтов",
      description: "На странице новостей CyberHack вы найдете последние обновления мира читов, спуферов и игровых аккаунтов. Будьте в курсе всех новинок, обновлений анти-чит систем и эксклюзивных предложений для игроков."
    }
  },
  en: {
    title: "CyberHack - News on Cheats, Spoofers, and Game Accounts",
    keywords: "cheat news, spoofer updates, anti-cheat news, gaming news, game accounts, PC cheats, new cheats, cheat updates",
    description: "The CyberHack News page keeps you informed about the latest developments in the world of cheats, spoofers, and game accounts. Stay updated on new releases, anti-cheat updates, and exclusive offers for gamers.",
    openGraph: {
      title: "CyberHack - News on Cheats, Spoofers, and Game Accounts",
      description: "The CyberHack News page keeps you informed about the latest developments in the world of cheats, spoofers, and game accounts. Stay updated on new releases, anti-cheat updates, and exclusive offers for gamers."
    }
  }
}

export async function generateMetadata(
  { params }
): Promise<any> {
  // @ts-ignore
  return meta[params.lang]
}


export default async function NewsPage() {
  const { data: news } = await getNewsApi();

  const { data: games } = await getGamesApi();

  return (
    <NewsStoreProvider
      initialData={{
        news
      }}
    >
      <MainContainer classes="news pt-16">
        <NewsView
          news={news}
          games={games}
        />
      </MainContainer>
    </NewsStoreProvider>
  );
}
