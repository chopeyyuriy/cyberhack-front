"use client";

import { AuthInput, ErrorMessage, PrimaryButton } from "@/shared";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

export interface IRestorePasswordFormSchema {
  email: string;
}

const RestorePasswordForm: FC = () => {
  const [email, setEmail] = useState<string>("");

  const t = useTranslations('resetPassword');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IRestorePasswordFormSchema>({
    resolver: {}
  });

  const onSubmit: SubmitHandler<IRestorePasswordFormSchema> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-3"
    >
      <div className="">
        <AuthInput
          label={t('email.label')}
          value={email}
          placeholder={t('email.placeholder')}
          onChange={setEmail}
          register={() => {}}
          type="email"
        />
        <ErrorMessage text="Message" />
      </div>
      <p className="text-sm font-light text-[#8A8A98]">
        {t('hint')}
      </p>
      <div className="mt-[36px] flex flex-col gap-6">
        <PrimaryButton
          color="#E1C58B"
          textColor="#0E1012"
          text={t('submit')}
        />
      </div>
    </form>
  );
};

export default RestorePasswordForm;
