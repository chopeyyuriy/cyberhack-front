import { getAccountsApi } from "@/entities/GameAccount/api/index";
import { AccountsView } from "@/features/Accounts/index";
import {
  BackButton,
  MainContainer,
} from "@/shared";
import "./styles.scss"

import cn from "classnames";

import { unbounded } from "@/shared/fonts";
import { AccountsCatalog } from "@/features/Accounts/ui/Catalog/index";
import { getWalletApi } from "@/entities/Session/api/index";

export const revalidate = 60 * 15;

interface Props {
  params: {
    lang: string;
  }
}

const meta = {
  ru: {
    title: "CyberHack - Магазин игровых аккаунтов для всех популярных игр",
    keywords: "магазин аккаунтов, купить игровой аккаунт, игровые аккаунты, аккаунты для игр, аккаунты с читами, безопасные аккаунты, аккаунты без бана",
    description: "В магазине аккаунтов CyberHack вы найдете проверенные игровые аккаунты для самых популярных игр. Покупайте аккаунты с гарантиями безопасности и без риска блокировок, чтобы сразу начать играть на новом уровне.",
    openGraph: {
      title: "CyberHack - Магазин игровых аккаунтов для всех популярных игр",
      description: "В магазине аккаунтов CyberHack вы найдете проверенные игровые аккаунты для самых популярных игр. Покупайте аккаунты с гарантиями безопасности и без риска блокировок, чтобы сразу начать играть на новом уровне."
    }
  },
  en: {
    title: "CyberHack - Game Account Store for All Popular Games",
    keywords: "account store, buy game account, game accounts, accounts for games, accounts with cheats, safe accounts, ban-free accounts",
    description: "The CyberHack account store offers verified game accounts for the most popular titles. Purchase secure accounts with no risk of bans and start gaming at a higher level instantly.",
    openGraph: {
      title: "CyberHack - Game Account Store for All Popular Games",
      description: "The CyberHack account store offers verified game accounts for the most popular titles. Purchase secure accounts with no risk of bans and start gaming at a higher level instantly."
    }
  }
}

export async function generateMetadata(
  { params }
): Promise<any> {
  // @ts-ignore
  return meta[params.lang]
}

export default async function AccountsPage({
  params
}: Props) {
  const { lang } = params;

  const { data: accounts } = await getAccountsApi();

  const { data: wallet } = await getWalletApi();

  return (
    <MainContainer>
      <AccountsCatalog
        wallet={wallet}
        accounts={accounts}
      />
    </MainContainer>
  );
}
