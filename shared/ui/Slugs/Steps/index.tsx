import { FC } from "react";

import cn from "classnames";
import { useTranslations } from "next-intl";

export interface IStepsProps {
  currentStep: number;
  total: number;
  className?: string;
}

const Steps: FC<IStepsProps> = ({ currentStep, total, className }) => {
  const t = useTranslations('register');
  return (
    <span
      className={cn(
        "flex items-center gap-1 rounded bg-white/[0.06] p-1 text-[13px] text-[#8A8A98]",
        className,
      )}
    >
      <span className="">{t('step')}</span>
      <span className="">{currentStep}</span>
      <span>{t('from')}</span>
      <span className="">{total}</span>
    </span>
  );
};

export default Steps;
