import { useTranslations } from "next-intl";

export interface IAdvantage {
  image: string;
  title: string;
  description: string;
}

export const useAdvantages = () => {
  const t = useTranslations("home.introduction.advantages");

  const advantages: IAdvantage[] = [
    {
      image: "advantage-price",
      title: t("titles.prices"),
      description: t("descriptions.prices"),
    },
    {
      image: "advantage-support",
      title: t("titles.support"),
      description: t("descriptions.support"),
    },
    {
      image: "advantage-choose",
      title: t("titles.choose"),
      description: t("descriptions.choose"),
    },
    {
      image: "advantage-comfortable",
      title: t("titles.comfortable"),
      description: t("descriptions.comfortable"),
    },
  ];

  return advantages;
};
