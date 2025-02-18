import { MainContainer, SupportBanner } from "@/shared";
import {
  Authentication,
  Devices,
  PasswordForm,
  PurchasesList,
} from "@/widgets/Profile";


const meta = {
  ru: {
    title: "CyberHack - Безопасность пользователя: читы, спуферы и игровые аккаунты",
    keywords: "безопасность аккаунта, защита профиля, безопасность читов, защита данных, безопасные читы, анти-чит защита, личная безопасность",
    description: "На странице безопасности CyberHack вы узнаете, как мы защищаем ваш профиль и данные, а также как наши читы и спуферы помогают обходить анти-чит системы. Ознакомьтесь с мерами безопасности, чтобы оставаться под защитой в процессе использования наших продуктов.",
    openGraph: {
      title: "CyberHack - Безопасность пользователя: читы, спуферы и игровые аккаунты",
      description: "На странице безопасности CyberHack вы узнаете, как мы защищаем ваш профиль и данные, а также как наши читы и спуферы помогают обходить анти-чит системы. Ознакомьтесь с мерами безопасности, чтобы оставаться под защитой в процессе использования наших продуктов."
    }
  },
  en: {
    title: "CyberHack - User Security: Cheats, Spoofers, and Game Accounts",
    keywords: "account security, profile protection, cheat security, data protection, safe cheats, anti-cheat protection, personal security",
    description: "The CyberHack security page explains how we protect your profile and data, and how our cheats and spoofers help bypass anti-cheat systems. Learn about our security measures to stay safe while using our products.",
    openGraph: {
      title: "CyberHack - User Security: Cheats, Spoofers, and Game Accounts",
      description: "The CyberHack security page explains how we protect your profile and data, and how our cheats and spoofers help bypass anti-cheat systems. Learn about our security measures to stay safe while using our products."
    }
  }
}

export async function generateMetadata(
  { params }
): Promise<any> {
  // @ts-ignore
  return meta[params.lang]
}


export default function ProfileSafetyPage() {
  return (
    <div className="profile-safety">
      <MainContainer classes="flex flex-col gap-6 !p-6">
        <SupportBanner />
        <PasswordForm />
        {/* <Authentication /> */}
        {/* <Devices /> */}
      </MainContainer>
    </div>
  );
}
