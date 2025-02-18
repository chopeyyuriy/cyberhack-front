"use client";

import { PrimaryButton, SafetyContainer, SafetyHeading } from "@/shared";
import { FC } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { AuthInput } from "@/shared";
import * as zod from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePassword } from "@/entities/User/api/index";

export const ChangePassword: FC = () => {
  const t = useTranslations('profile.changePassword');

  const router = useRouter();

  const updateAccountSchema = zod.object({
    password: zod.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
    repeatPassword: zod
      .string()
      .refine((data) => data.password === data.repeatPassword, {
        message: "Passwords don`t match"
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: zodResolver(updateAccountSchema),
  });

  const onSubmit: SubmitHandler<any> = async (
    _data: any,
  ) => {
    const { password, repeatPassword } = _data;
    await changePassword(password, repeatPassword)

    router.push('/profile/safety')
  };

  return (
    <SafetyContainer>
      <SafetyHeading text={t('title')} />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label>
          <AuthInput
            name="password"
            placeholder={t('password.placeholder')}
            register={register}
            type="password"
          />
        </label>
        <label className="mt-3">
          <AuthInput
            name="repeatPassword"
            placeholder={t('repeatPassword.placeholder')}
            register={register}
            type="password"
          />
        </label>
        <div className="flex justify-end items-center mt-6 pr-3">
          <PrimaryButton
            type="submit"
            text={t('submit')}
            color="#E1C58B"
            textColor="#0E1012"
          />
        </div>
      </form>
    </SafetyContainer>
  );
};
