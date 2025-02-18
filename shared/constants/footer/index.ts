export interface IFooterNavigation {
  title: string;
  items: {
    title: string;
    href: string;
  }[];
}

export const navigation: IFooterNavigation = {
  title: "Навигация",
  items: [
    {
      title: "Каталог читов",
      href: "/catalog",
    },
    {
      title: "Игровые аккаунты",
      href: "/accounts",
    },
    {
      title: "Новости",
      href: "/news",
    },
    {
      title: "Помощь",
      href: "/help",
    },
  ],
};

export const sundry = {
  title: "Разное",
  items: [
    {
      title: "Пользователдьские соглашение",
      href: "/user-agreement",
    },
    {
      title: "Политика конфиденциальности",
      href: "/privacy-policy",
    },
    {
      title: "Наши гарантии",
      href: "/guarantees",
    },
  ],
};
