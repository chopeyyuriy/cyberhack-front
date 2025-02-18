import { MainContainer, PrimaryButton } from "@/shared";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";
import Image from "next/image";

import "./styles.scss";
import { useTranslations } from "next-intl";

const meta = {
  ru: {
    title: "CyberHack - Сотрудничество и партнерская программа",
    keywords: "сотрудничество, партнерская программа, партнеры CyberHack, совместные проекты, партнерство в гейминге, сотрудничество с продавцами, партнерские условия",
    description: "На странице сотрудничества CyberHack вы можете узнать о наших партнерских программах и условиях сотрудничества. Присоединяйтесь к нашей команде, чтобы продавать читы, спуферы и игровые аккаунты, а также участвовать в совместных проектах с CyberHack.",
    openGraph: {
      title: "CyberHack - Сотрудничество и партнерская программа",
      description: "На странице сотрудничества CyberHack вы можете узнать о наших партнерских программах и условиях сотрудничества. Присоединяйтесь к нашей команде, чтобы продавать читы, спуферы и игровые аккаунты, а также участвовать в совместных проектах с CyberHack."
    }
  },
  en: {
    title: "CyberHack - Cooperation and Affiliate Program",
    keywords: "cooperation, affiliate program, CyberHack partners, joint projects, gaming partnership, reseller cooperation, affiliate terms",
    description: "The CyberHack cooperation page provides information about our affiliate programs and cooperation opportunities. Join our team to sell cheats, spoofers, and game accounts, or collaborate on joint projects with CyberHack.",
    openGraph: {
      title: "CyberHack - Cooperation and Affiliate Program",
      description: "The CyberHack cooperation page provides information about our affiliate programs and cooperation opportunities. Join our team to sell cheats, spoofers, and game accounts, or collaborate on joint projects with CyberHack."
    }
  }
}

export async function generateMetadata(
  { params }
): Promise<any> {
  // @ts-ignore
  return meta[params.lang]
}


export default function ProfileCooperationPage() {
  const t = useTranslations('profile.cooperation');

  return (
    <div className="profile-cooperation p-8">
      <MainContainer classes="flex items-center gap-8">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <h2
              className={cn("text-[28px] text-[#C0C6D1]", unbounded.className)}
            >
              {t('title.first')} <span className="text-[#59B3A8]">{t('title.selected')}</span> {t('title.last')} 
            </h2>
            <p className="text-sm font-light text-[#8A8A98]">
              {t('text')}
            </p>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="flex items-start gap-5 p-3">
              <div className="profile-cooperation__icon flex h-11 w-11 items-center justify-center rounded-md">
                <Image
                  src={require("@/shared/assets/icons/funpay_logo.svg")}
                  alt="icon"
                  width={20}
                  height={32}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <h4
                  className={cn("text-sm text-[#70A1DB]", unbounded.className)}
                >
                  {t('funpay.title')}
                </h4>
                <p className="text-sm font-light text-[#595962]">
                  {t('funpay.text')}
                </p>
              </div>
            </li>
            <li className="flex items-start gap-5 p-3">
              <div className="profile-cooperation__icon flex h-11 w-11 items-center justify-center rounded-md">
                <Image
                  src={require("@/shared/assets/icons/digiseller_logo.svg")}
                  alt="icon"
                  width={24}
                  height={24}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <h4
                  className={cn("text-sm text-[#C76B73]", unbounded.className)}
                >
                  {t('digiseller.title')}
                </h4>
                <p className="text-sm font-light text-[#595962]">
                  {t('digiseller.text')}
                </p>
              </div>
            </li>
            <li className="flex items-start gap-5 p-3">
              <div className="profile-cooperation__icon flex h-11 w-11 items-center justify-center rounded-md">
                <Image
                  src={require("@/shared/assets/icons/vuesax_bold_key.svg")}
                  alt="icon"
                  width={24}
                  height={24}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <h4
                  className={cn("text-sm text-[#698A87]", unbounded.className)}
                >
                  {t('opt.title')}
                </h4>
                <p className="text-sm font-light text-[#595962]">
                  {t('opt.text')}
                </p>
              </div>
            </li>
          </ul>
          <div className="flex flex-col gap-[10px]">
            <PrimaryButton
              textColor="#0E1012"
              color="#E1C58B"
              text={t('createTicket')}
              href="https://discord.com/invite/Xbmy5fAbd5"
              classes="w-[_calc(_100%_-_24px)] mx-auto"
            />
            <div className="flex items-start gap-2 p-2">
              <Image
                src={require("@/shared/assets/icons/vuesax_bold_discount-shape.svg")}
                alt="icon"
                width={20}
                height={20}
                className=""
              />
              <p className="text-sm font-light text-[#8A8A98]">
                {t('hint.first')} <span className="text-[#59B3A8]">{t('hint.selected')}</span>{t('hint.last')}
              </p>
            </div>
          </div>
        </div>
        <Image
          src={require("@/shared/assets/images/profile/profile-cooperation.png")}
          height={588}
          className=""
          alt="skin"
        />
      </MainContainer>
    </div>
  );
}
