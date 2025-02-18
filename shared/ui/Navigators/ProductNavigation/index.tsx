"use client";

import { FC } from "react";
import { CategoriesMenu } from "../../Categories/index";
import { IconMedia, IconFunction, IconUpdates, IconSystemRequirement, IconReviews } from "@/shared/assets/icons/dynamic";
import { usePathname, useRouter } from "@/node_modules/next/navigation";
import { useTranslations } from "next-intl";

interface Props {
  currentPath: string;
}

export const ProductNavigation: FC<Props> = ({
  currentPath
}) => {
  const t = useTranslations('product');

  const pathname = usePathname();

  const router = useRouter();

  const navItems = [
    {
      path: 'media',
      name: t('nav.media'),
      icon: <IconMedia />
    },
    {
      path: 'functional',
      name: t('nav.functional'),
      icon: <IconFunction />
    },
    {
      path: 'updates',
      name: t('nav.updates'),
      icon: <IconUpdates />
    },
    {
      path: 'system-requirements',
      name: t('nav.systemRequirements'),
      icon: <IconSystemRequirement />
    },
    {
      path: 'reviews',
      name: t('nav.reviews'),
      icon: <IconReviews />
    }
  ];

  const selectItem = (index: number) => {
    const item = navItems[index];

    const splitedPath = pathname.split('/');

    const maxChunks = 5;
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