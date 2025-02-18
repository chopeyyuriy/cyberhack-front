import { MainContainer } from "@/shared";
import { unbounded } from "@/shared/fonts";

import cn from "classnames";
import Image from "next/image";
import { useTranslations } from "next-intl";
import './styles.scss'

const meta = {
  ru: {
    title: "CyberHack - Гарантии Качества для Читов, Спуферов и Игровых Аккаунтов",
    keywords: "гарантии читы, гарантия спуфер, защита аккаунтов, надежные читы, возврат средств, безопасность читов, гарантии покупки",
    description: "CyberHack предоставляет гарантии на все читы, спуферы и игровые аккаунты. Мы обеспечиваем безопасность, защиту от банов и возврат средств в случае неисправностей. Покупайте у нас с уверенностью в качестве и надежности наших продуктов.",
    openGraph: {
      title: "CyberHack - Гарантии Качества для Читов, Спуферов и Игровых Аккаунтов",
      description: "CyberHack предоставляет гарантии на все читы, спуферы и игровые аккаунты. Мы обеспечиваем безопасность, защиту от банов и возврат средств в случае неисправностей. Покупайте у нас с уверенностью в качестве и надежности наших продуктов."
    }
  },
  en: {
    title: "CyberHack - Quality Guarantees for Cheats, Spoofers, and Game Accounts",
    keywords: "cheat guarantees, spoofer guarantee, account protection, reliable cheats, refund policy, cheat security, purchase guarantees",
    description: "CyberHack offers guarantees on all cheats, spoofers, and game accounts. We ensure security, ban protection, and refunds in case of issues. Buy with confidence, knowing that our products are reliable and of the highest quality.",
    openGraph: {
      title: "CyberHack - Quality Guarantees for Cheats, Spoofers, and Game Accounts",
      description: "CyberHack offers guarantees on all cheats, spoofers, and game accounts. We ensure security, ban protection, and refunds in case of issues. Buy with confidence, knowing that our products are reliable and of the highest quality."
    }
  }
}

export async function generateMetadata(
  { params }
): Promise<any> {
  // @ts-ignore
  return meta[params.lang]
}


export default function GuaranteePage() {
  const t = useTranslations('warranty');

  const items: {
    icon: string;
    title: string;
    description: string;
  }[] = [
    {
      icon: "payback",
      title: t('returnMoney.label'),
      description:
        t('returnMoney.text'),
    },
    {
      icon: "review",
      title: t('reviews.label'),
      description:
        t('reviews.text'),
    },
    {
      icon: "reliability",
      title: t('safety.label'),
      description:
        t('safety.text'),
    },
    {
      icon: "webmoney",
      title: t('webMoney.label'),
      description:
        t('webMoney.text'),
    },
    {
      icon: "support",
      title: t('support.label'),
      description:
        t('support.text'),
    },
    {
      icon: "payinfo",
      title: t('oplata.label'),
      description:
        t('oplata.text'),
    },
  ];
  return (
    <div className="guarantees pb-[88px] pt-16">
      <MainContainer classes="flex items-start">
        <div className="guarantees__container relative flex flex-col gap-11">
          <div className="relative flex flex-col gap-2">
            <h2
              className={cn("text-[34px] text-[#C0C6D1]", unbounded.className)}
            >
              {t('title')}
            </h2>
            <p className="text-[15px] font-light text-[#595962]" dangerouslySetInnerHTML={{ __html: t('text') }}></p>
          </div>
          <div className="relative grid grid-cols-3 gap-5 max-md:grid-cols-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="guarantees__card flex w-full cursor-pointer select-none flex-col gap-[52px] rounded-md bg-[#111215]/[.64] p-6"
              >
                <Image
                  src={require(
                    `@/shared/assets/images/guarantees/${item.icon}.svg`,
                  )}
                  alt="icon"
                  width={64}
                  height={64}
                  className=""
                />
                <div className="flex flex-col gap-3">
                  <h4
                    className={cn(
                      "font-light text-[#C0C6D1]",
                      unbounded.className,
                    )}
                  >
                    {item.title}
                  </h4>
                  <p className="text-sm font-light text-[#595962]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image
          src={require("@/shared/assets/images/guarantees/skin.png")}
          alt="image"
          width={750}
          height={582}
          className="guarantees__skin min-h-[582px] min-w-[750px] max-md:absolute max-md:-right-[220px] max-md:top-40 max-md:-z-10"
        />
      </MainContainer>
    </div>
  );
}
