import { getGamesApi } from "@/entities/Game/api/index";
import { getUserApi } from "@/entities/Session/api/index";
import { AppStoreProvider } from "@/store/App/provider";
import { FooterWidget } from "@/widgets/Footer";
import { HeaderWidget } from "@/widgets/Header";
import { useEffect } from "react";

export default async function DefaultLayout({ children }) {
  const { data: games } = await getGamesApi();

  const { data: user } = await getUserApi();

  return (
    <AppStoreProvider
      initialData={{
        user,
        game: {
          list: games,
        },
      }}
    >
      <div className="default-layout">
        <HeaderWidget />
        {children}
        <FooterWidget />
      </div>
    </AppStoreProvider>
  );
}
