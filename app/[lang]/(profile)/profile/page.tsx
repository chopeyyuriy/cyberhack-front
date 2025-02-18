import { getUserApi } from "@/entities/Session";
import { SeparatorLine, SupportBanner } from "@/shared";
import {
  PersonalInfo,
  ProfileIntegrations,
  StoreSettings,
} from "@/widgets/Profile";

export const revalidate = 60 * 15;

const meta = {
  ru: {
    title: "CyberHack - Управление профилем: читы, спуферы и аккаунты",
    keywords: "профиль пользователя, личный кабинет, управление аккаунтом, настройка профиля, управление читами, загрузка спуферов, гейминг аккаунты",
    description: "В профиле личного кабинета CyberHack вы можете управлять своим аккаунтом, редактировать личные данные, а также следить за покупками, скачивать читы и спуферы и управлять игровыми аккаунтами. Все в одном удобном месте для вашего комфорта.",
    openGraph: {
      title: "CyberHack - Управление профилем: читы, спуферы и аккаунты",
      description: "В профиле личного кабинета CyberHack вы можете управлять своим аккаунтом, редактировать личные данные, а также следить за покупками, скачивать читы и спуферы и управлять игровыми аккаунтами. Все в одном удобном месте для вашего комфорта."
    }
  },
  en: {
    title: "CyberHack - Profile Management: Cheats, Spoofers, and Accounts",
    keywords: "user profile, user dashboard, account management, profile settings, manage cheats, download spoofers, gaming accounts",
    description: "In your CyberHack profile, you can manage your account, edit personal details, monitor purchases, download cheats and spoofers, and manage game accounts. All conveniently located for your ease of use.",
    openGraph: {
      title: "CyberHack - Profile Management: Cheats, Spoofers, and Accounts",
      description: "In your CyberHack profile, you can manage your account, edit personal details, monitor purchases, download cheats and spoofers, and manage game accounts. All conveniently located for your ease of use."
    }
  }
}

export async function generateMetadata(
  { params }
): Promise<any> {
  // @ts-ignore
  return meta[params.lang]
}


export default async function ProfilePage() {
  const user = await getUserApi();

  return (
    <div className="profile flex flex-col gap-6 p-6 max-md:p-3">
      <SupportBanner />
      <SeparatorLine />
      <PersonalInfo />
      <SeparatorLine />
      <StoreSettings />
      {/* <SeparatorLine /> */}
      {/* <ProfileIntegrations /> */}
    </div>
  );
}
