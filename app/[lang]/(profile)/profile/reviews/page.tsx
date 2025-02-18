import ProfileReviewsWidget from "@/widgets/Profile/ui/ReviewsWidget/index";

const meta = {
  ru: {
    title: "CyberHack - Отзывы пользователей о читах, спуферах и аккаунтах",
    keywords: "отзывы пользователей, отзывы о читах, отзывы о спуферах, отзывы о игровых аккаунтах, пользовательский опыт, честные отзывы",
    description: "На странице отзывов CyberHack вы найдете мнения пользователей о наших читах, спуферах и игровых аккаунтах. Прочитайте честные отзывы, чтобы убедиться в качестве и надежности наших продуктов, или оставьте свой отзыв.",
    openGraph: {
      title: "CyberHack - Отзывы пользователей о читах, спуферах и аккаунтах",
      description: "На странице отзывов CyberHack вы найдете мнения пользователей о наших читах, спуферах и игровых аккаунтах. Прочитайте честные отзывы, чтобы убедиться в качестве и надежности наших продуктов, или оставьте свой отзыв."
    }
  },
  en: {
    title: "CyberHack - User Reviews on Cheats, Spoofers, and Game Accounts",
    keywords: "user reviews, cheat reviews, spoofer reviews, game account reviews, user experience, honest feedback",
    description: "The CyberHack review page features user opinions on our cheats, spoofers, and game accounts. Read honest feedback to confirm the quality and reliability of our products, or leave your own review.",
    openGraph: {
      title: "CyberHack - User Reviews on Cheats, Spoofers, and Game Accounts",
      description: "The CyberHack review page features user opinions on our cheats, spoofers, and game accounts. Read honest feedback to confirm the quality and reliability of our products, or leave your own review."
    }
  }
}

export async function generateMetadata(
  { params }
): Promise<any> {
  // @ts-ignore
  return meta[params.lang]
}


export default function ProfileReviewsPage() {
  return <ProfileReviewsWidget />;
}
