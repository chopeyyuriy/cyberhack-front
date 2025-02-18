"use client";

import { FC } from "react";
import { CategoriesMenu } from "../../Categories/index";
import { IconMedia, IconFunction, IconUpdates, IconSystemRequirement, IconReviews } from "@/shared/assets/icons/dynamic";
import { usePathname, useRouter } from "@/node_modules/next/navigation";
import { useTranslations } from "next-intl";

interface Props {
  currentPath: string;
}

export const AccountNavigation: FC<Props> = ({
  currentPath
}) => {
  const t = useTranslations('account');

  const pathname = usePathname();

  const router = useRouter();

  const navItems = [
    {
      path: 'media',
      name: t('nav.media'),
      icon: <IconMedia />
    },
    {
      path: 'description',
      name: t('nav.description'),
      icon: <IconFunction />
    },
    // {
    //   path: 'reviews',
    //   name: 'Отзывы',
    //   icon: <IconReviews />
    // }
  ];

  const selectItem = (index: number) => {
    const item = navItems[index];

    const splitedPath = pathname.split('/');

    const maxChunks = 4;
    const mainChunks = splitedPath.slice(0, maxChunks);

    if (item.path === 'media') {
      return router.push(mainChunks.join('/'));
    }

    return router.push([...mainChunks, item.path].join('/'));
  }

  return <CategoriesMenu
    className="max-md:!w-full"
    title={t('nav.label')}
    selectItem={selectItem}
    selectedItems={[navItems.findIndex(({ path }) => path === currentPath)]}
    items={navItems}
  />
};