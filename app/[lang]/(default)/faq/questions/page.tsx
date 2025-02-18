import { DriverItem, DriversAsideMenu, DriversBanner } from "@/entities/Driver";
import { MainContainer, SeparatorLine } from "@/shared";
import { Fragment } from "react";
import { useTranslations } from "next-intl";

import { unbounded } from "@/shared/fonts";
import cn from "classnames";
import Image from "next/image";
import { SupportBanner } from "@/shared/ui/Banners/index";
import { Spoiler } from "@/shared/ui/Spoiler/index";

const meta = {
  ru: {
    title: "CyberHack - Часто задаваемые вопросы о Читах, Спуферах и Игровых Аккаунтах",
    keywords: "FAQ читы, вопросы о спуферах, частые вопросы, гейминг аккаунты, читы для игр, как установить читы, обход анти-чит систем",
    description: "На странице FAQ от CyberHack вы найдете ответы на самые популярные вопросы о читах, спуферах и игровых аккаунтах. Узнайте, как безопасно использовать наши инструменты, обходить анти-чит системы и избегать банов.",
    openGraph: {
      title: "CyberHack - Часто задаваемые вопросы о Читах, Спуферах и Игровых Аккаунтах",
      description: "На странице FAQ от CyberHack вы найдете ответы на самые популярные вопросы о читах, спуферах и игровых аккаунтах. Узнайте, как безопасно использовать наши инструменты, обходить анти-чит системы и избегать банов."
    }
  },
  en: {
    title: "CyberHack - Frequently Asked Questions about Cheats, Spoofers, and Game Accounts",
    keywords: "FAQ cheats, questions about spoofers, common questions, gaming accounts, game cheats, how to install cheats, anti-cheat bypass",
    description: "The CyberHack FAQ page provides answers to the most common questions about cheats, spoofers, and game accounts. Learn how to safely use our tools, bypass anti-cheat systems, and avoid bans.",
    openGraph: {
      title: "CyberHack - Frequently Asked Questions about Cheats, Spoofers, and Game Accounts",
      description: "The CyberHack FAQ page provides answers to the most common questions about cheats, spoofers, and game accounts. Learn how to safely use our tools, bypass anti-cheat systems, and avoid bans."
    }
  }
}

export async function generateMetadata(
  { params }
): Promise<any> {
  // @ts-ignore
  return meta[params.lang]
}

export default function FAQPage({
  params
}) {
  const t = useTranslations('faq');

  const questions: any = [
    {
      title_ru: '1. Насколько безопасно использование ваших читов?',
      title_en: '1. How safe is it to use your cheats?',
      text_ru: 'Мы постоянно обновляем наши читы, чтобы минимизировать риски бана. Кроме того, используем передовые технологии обхода античита, включая встроенные спуферы.',
      text_en: 'We constantly update our cheats to minimize the risks of bans. In addition, we use advanced anti-cheat bypass technologies, including built-in spoofers.'
    },
    {
      title_ru: '2. Как установить читы после покупки?',
      title_en: '2. How to install cheats after purchase?',
      text_ru: 'После покупки вы получите инструкцию по установке. Процесс максимально прост и обычно занимает несколько минут.',
      text_en: 'After purchase you will receive installation instructions. The process is as simple as possible and usually takes a few minutes.'
    },
    {
      title_ru: '3. Что делать, если читы не работают после обновления игры?',
      title_en: '3. What should I do if cheats do not work after updating the game?',
      text_ru: 'Наши читы регулярно обновляются в соответствии с новыми версиями игр. Если читы перестали работать, обратитесь в поддержку или дождитесь обновления.',
      text_en: 'Our cheats are regularly updated in accordance with new versions of games. If cheats stop working, contact support or wait for an update.'
    },
    {
      title_ru: '4. Какие способы оплаты доступны на вашем сайте?',
      title_en: '4. What payment methods are available on your website?',
      text_ru: 'Мы принимаем различные способы оплаты, включая банковские карты, криптовалюту и другие популярные методы. Все детали можно найти на странице оплаты.',
      text_en: 'We accept various payment methods, including bank cards, cryptocurrency and other popular methods. All details can be found on the payment page.'
    },
    {
      title_ru: '5. Могу ли я получить возврат, если читы не работают?',
      title_en: "5. Can I get a refund if the cheats don't work?",
      text_ru: 'Мы предоставляем поддержку в случае проблем, но возвраты возможны только в определенных ситуациях. Пожалуйста, ознакомьтесь с нашей политикой возвратов.',
      text_en: 'We provide support in case of problems, but returns are only possible in certain situations. Please review our returns policy.'
    },
    {
      title_ru: '6. Что такое спуфер, и зачем он нужен?',
      title_en: '6. What is a spoofer, and why is it needed?',
      text_ru: 'Спуфер изменяет вашу аппаратную идентификацию (HWID) и помогает обойти аппаратные баны в играх, обеспечивая вашу анонимность.',
      text_en: 'The spoofer changes your hardware identification (HWID) and helps bypass hardware bans in games, ensuring your anonymity.'
    },
    {
      title_ru: '7. Как часто вы обновляете читы?',
      title_en: '7. How often do you update cheats?',
      text_ru: 'Читы обновляются регулярно, особенно после крупных обновлений игр или античитов. Мы следим за безопасностью наших пользователей.',
      text_en: 'Cheats are updated regularly, especially after major game updates or anti-cheats. We monitor the safety of our users.'
    },
    {
      title_ru: '8. Есть ли у вас поддержка пользователей?',
      title_en: '8. Do you have user support?',
      text_ru: 'Да, у нас есть круглосуточная поддержка пользователей через группу дискорд. Мы всегда готовы помочь вам.',
      text_en: 'Yes, we have 24/7 customer support via our discord group. We are always ready to help you.'
    },
    {
      title_ru: '9. Подходит ли ваш софт для новичков?',
      title_en: '9. Is your software suitable for beginners?',
      text_ru: 'Наши читы разработаны с учетом удобства использования, так что даже новички смогут быстро освоиться. Все инструкции предоставляются после покупки.',
      text_en: 'Our cheats are designed with ease of use in mind, so even beginners can get the hang of it quickly. All instructions are provided after purchase.'
    },
    {
      title_ru: '10. Нужно ли отключать антивирус для установки читов?',
      title_en: '10. Do I need to disable my antivirus to install cheats?',
      text_ru: 'В некоторых случаях антивирус может помечать наши читы как подозрительные файлы. Рекомендуем временно отключить антивирус во время установки, а затем добавить чит в исключения.',
      text_en: 'In some cases, the antivirus may flag our cheats as suspicious files. We recommend temporarily disabling your antivirus during installation and then adding the cheat to the exceptions.'
    },
    {
      title_ru: '11. Предоставляете ли вы пробный период для ваших читов?',
      title_en: '11. Do you provide a trial period for your cheats?',
      text_ru: 'Мы не предлагаем бесплатные пробные версии, но регулярно проводим акции и скидки. Следите за новостями в нашей группе дикорд и телеграмм канале, чтобы не пропустить выгодные предложения.',
      text_en: "We don't offer free trials, but we do regularly offer promotions and discounts. Follow the news in our dicord group and telegram channel so as not to miss great offers."
    },
    {
      title_ru: '12. Что делать, если я получил бан?',
      title_en: '12. What should I do if I received a ban?',
      text_ru: 'Если вас заблокировали, возможно, это связано с неправильным использованием читов или игрой без включенного спуфера. Рекомендуем использовать наши спуферы, чтобы избежать аппаратных банов в будущем.',
      text_en: 'If you are blocked, it may be due to incorrect use of cheats or playing without the spoofer enabled. We recommend using our spoofers to avoid hardware bans in the future.'
    },
  ]

  return (
    <MainContainer>
      <div className="faq-page mt-16 flex flex-col gap-11">
        <Image
          src={require("@/shared/assets/images/faq/skin.png")}
          alt="image"
          width={750}
          height={540}
          className="max-md:!hight-[582px] max-md:!width-[452px] absolute right-0 !min-w-[582px] translate-x-1/4 max-md:translate-y-1/4"
        />
        <div className="faq-page__wrapper flex flex-col gap-2">
          <h2
            className={cn(
              "faq-page__title text-[34px] text-[#C0C6D1]",
              unbounded.className,
            )}
          >
            {t('title')}
          </h2>
          <p className="faq-page__description text-[15px] font-light text-[#595962]" dangerouslySetInnerHTML={{ __html: t('description') }}></p>
        </div>

        <div className="faq-page__container flex items-start gap-5 max-md:flex-col">
          <DriversAsideMenu current={1} />
          <div className="faq-page__main flex w-full flex-col gap-6 rounded-md bg-[#0C0D10]/80 p-6 backdrop-blur-[12px]">
            <SupportBanner />
            <h4
              className={cn(
                "faq-page__subtitle text-[11px] text-[#8A8A98]",
                unbounded.className,
              )}
            >
              {t('popular')}
            </h4>
            {
              questions.map((question, index) => (<Spoiler
                key={index}
                title={question[`title_${params.lang}`]}
                icon={<Image src={require("@/shared/assets/icons/popular-question.svg")} />}
              >
                <p>{question[`text_${params.lang}`]}</p>
              </Spoiler>))
            }
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
