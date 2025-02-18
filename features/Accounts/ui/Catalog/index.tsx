import { FC } from "react";
import { AccountsView } from "../View/index";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";
import { useTranslations } from "next-intl";

interface Props {
  accounts: any[];
  wallet: any;
}

export const AccountsCatalog: FC<Props> = ({
  accounts,
  wallet
}) => {
  const t = useTranslations('accounts');

  return (<div className="select-cheats mt-[18px]">
    <div className="accounts-page__head mt-[64px] mb-[42px]">
      <h1 className={cn("text-sm text-[#C0C6D1]", unbounded.className)}>{t('title')}</h1>
      <p className="text-sm text-[#595962] mt-[8px]" dangerouslySetInnerHTML={{ __html: t('text') }}></p>
    </div>
    <AccountsView
      accounts={accounts}
      wallet={wallet}
    />
  </div>)
}