"use client";

import { FC, useState } from "react";

import { LocaleSwitcher } from "@/features/Lang";
import { OpenNotifications } from "@/features/Notifications";

import { OpenAccountPage } from "@/features/Account";
import { SearchModal } from "@/features/Search";
import { ICategory } from "@/shared/types";
import { AppHeader } from "@/shared/ui";
import CategoriesList from "@/shared/ui/Categories/CategoriesList";
import HeaderMenuMobile from "../HeaderMenuMobile";
import { useAppSelector } from "@/store/App/index";
import { usePathname } from "@/node_modules/next/navigation";
import { LanguageCode } from "@/shared/types/Language/index";
import { useTranslations } from "next-intl";
import { PrimaryButton } from "@/shared/ui/Buttons/index";
import "./styles.scss";

const HeaderWidget: FC = () => {
  const t = useTranslations("header");
  const user = useAppSelector((state) => state.session.user);

  const games = useAppSelector((state) => state.game.list);

  const pathName = usePathname();

  const locale: LanguageCode = pathName.split("/")[1] as LanguageCode;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const categories: ICategory[] = [
    {
      title: t("catalog"),
      icon: "category-icon-placeholder.svg",
      href: "/catalog",
    },
    {
      title: t("accounts"),
      icon: "images/accounts-icon.svg",
      href: "/accounts",
    },
    ...(!games
      ? []
      : games?.slice(0, 6).map((game) => ({
          title: game[`name_${locale}`],
          icon: game.icon,
          href: `/catalog/${game.path}`,
        }))),
  ];

  return (
    <div className="fixed-header">
      <AppHeader
        setIsMobileOpen={setIsMobileMenuOpen}
        isMobileOpen={isMobileMenuOpen}
      >
        {isMobileMenuOpen && (
          <HeaderMenuMobile
            setIsMenuOpen={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        )}
        <SearchModal />
        <span className="header__slash header__slash_mobile" />
        <LocaleSwitcher />
        <span className="header__slash header__slash_mobile" />
        <div className="header__inline">
          <OpenNotifications />
          {user ? (
            <OpenAccountPage
              name={user.name}
              image={require(
                `@/shared/assets/icons/avatars/animoji-${user.avatar}.png`,
              )}
            />
          ) : (
            <div className="header__login ml-5">
              <PrimaryButton
                isLink={true}
                href="/login"
                text={t("login")}
                color="#59B3A8"
                textColor="#0E1012"
              />
            </div>
          )}
        </div>
      </AppHeader>
      <CategoriesList categories={categories} />
    </div>
  );
};

export default HeaderWidget;
