import { PrivacyPolicy } from "@/widgets/PrivacyPolicy";


const meta = {
  ru: {
    title: "CyberHack - Политика конфиденциальности и защиты данных пользователей",
    keywords: "политика конфиденциальности, защита данных, пользовательская информация, обработка данных, защита личной информации, конфиденциальность на сайте",
    description: "Политика конфиденциальности CyberHack описывает, как мы собираем, используем и защищаем персональные данные пользователей. Мы гарантируем безопасность ваших данных и соблюдение всех стандартов конфиденциальности при использовании нашего сайта.",
    openGraph: {
      title: "CyberHack - Политика конфиденциальности и защиты данных пользователей",
      description: "Политика конфиденциальности CyberHack описывает, как мы собираем, используем и защищаем персональные данные пользователей. Мы гарантируем безопасность ваших данных и соблюдение всех стандартов конфиденциальности при использовании нашего сайта."
    }
  },
  en: {
    title: "CyberHack - Privacy Policy and User Data Protection",
    keywords: "privacy policy, data protection, user information, data processing, personal information security, site privacy",
    description: "The CyberHack privacy policy explains how we collect, use, and protect users' personal data. We ensure the security of your information and adhere to all privacy standards when you use our website.",
    openGraph: {
      title: "CyberHack - Privacy Policy and User Data Protection",
      description: "The CyberHack privacy policy explains how we collect, use, and protect users' personal data. We ensure the security of your information and adhere to all privacy standards when you use our website."
    }
  }
}

export async function generateMetadata(
  { params }
): Promise<any> {
  // @ts-ignore
  return meta[params.lang]
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
