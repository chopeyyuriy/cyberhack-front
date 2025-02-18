import { getGamesApi } from "@/entities/Game/api";
import { getNewsApi } from "@/entities/News/api/index";
import { GameCatalog } from "@/features/Game/ui/Catalog/index";
import { BannersList, MainContainer } from "@/shared";
import "./styles.scss";

export const revalidate = 60 * 15;

const meta = {
  ru: {
    title: "CyberHack - Каталог лучших читов для популярных игр",
    keywords: "каталог читов, читы для игр, лучшие читы, читы для ПК, читы с защитой, купить читы, гейминг хаки, приватные читы",
    description: "В каталоге читов CyberHack вы найдете лучшие читы для самых популярных игр. Наши инструменты предлагают высокую степень защиты от анти-чит систем, простоту установки и мощные функции, чтобы вы могли доминировать в играх.",
    openGraph: {
      title: "CyberHack - Каталог лучших читов для популярных игр",
      description: "В каталоге читов CyberHack вы найдете лучшие читы для самых популярных игр. Наши инструменты предлагают высокую степень защиты от анти-чит систем, простоту установки и мощные функции, чтобы вы могли доминировать в играх."
    }
  },
  en: {
    title: "CyberHack - Catalog of the Best Cheats for Popular Games",
    keywords: "cheat catalog, game cheats, best cheats, cheats for PC, protected cheats, buy cheats, gaming hacks, private cheats",
    description: "The CyberHack cheat catalog features the best cheats for the most popular games. Our tools offer high protection against anti-cheat systems, easy installation, and powerful features to help you dominate in games.",
    openGraph: {
      title: "CyberHack - Catalog of the Best Cheats for Popular Games",
      description: "The CyberHack cheat catalog features the best cheats for the most popular games. Our tools offer high protection against anti-cheat systems, easy installation, and powerful features to help you dominate in games."
    }
  }
}

export async function generateMetadata(
  { params }
): Promise<any> {
  // @ts-ignore
  return meta[params.lang]
}


export default async function CatalogPage() {
  const { data: games } = await getGamesApi();

  const { data: news } = await getNewsApi();

  const categories = games.map((game) => ({
    title: game.name_ru,
    image: game.image,
    href: `/catalog/${game.path}`
  }));

  return (
    <MainContainer>
      <main className="catalog">
        <BannersList 
          images={news.data.map((item: any) => item.image)}
        />
        <GameCatalog
          categories={categories}
        />
      </main>
    </MainContainer>
  );
}
