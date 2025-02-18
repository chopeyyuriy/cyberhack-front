"use client";

import { FC, useState } from "react";

import { AuthInput, ErrorMessage, PrimaryButton } from "@/shared";
import { SubmitHandler, useForm } from "react-hook-form";

import * as zod from "zod";

import "./styles.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthorizationStore } from "@/features/Account/model";
import { useTranslations } from "next-intl";

export interface IRegistrationFormSchema {
  email: string;
  password: string;
  password_confirmation: string;
}

export interface IRegistrationFormProps {
  nextStep: () => void;
}

const RegistrationForm: FC<IRegistrationFormProps> = ({ nextStep }) => {
  const t = useTranslations('register');

  const registrationSchema = zod
    .object({
      email: zod
        .string({ required_error: "Email is required" })
        .email({ message: "Invalid email" }),
      password: zod
        .string({ required_error: "Password is required" })
        .min(6, { message: "Password must be at least 6 characters" })
        .max(20, { message: "Password must be less than 20 characters" }),
      password_confirmation: zod
        .string({
          required_error: "Password is required",
        })
        .min(6, { message: "Password must be at least 6 characters" })
        .max(20, { message: "Password must be less than 20 characters" }),
    })
    .superRefine(({ password, password_confirmation }, ctx) => {
      if (password !== password_confirmation) {
        ctx.addIssue({
          code: zod.ZodIssueCode.custom,
          message: "Passwords do not match",
          path: ["password_confirmation"],
        });
      }
    });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IRegistrationFormSchema>({
    resolver: zodResolver(registrationSchema),
  });

  const { setEmail, setPassword, setPasswordConfirmation } =
    useAuthorizationStore((state) => state);

  const onSubmit: SubmitHandler<IRegistrationFormSchema> = (data) => {
    console.log(data);
    setEmail(data.email);
    setPassword(data.password);
    setPasswordConfirmation(data.password_confirmation);
    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-3"
    >
      <div className="">
        <AuthInput
          name="email"
          register={register}
          label={t('email.label')}
          placeholder={t('email.placeholder')}
          type="email"
        />
        {errors.email && <ErrorMessage text={errors.email.message} />}
      </div>
      <div className="">
        <AuthInput
          name="password"
          register={register}
          label={t('password.label')}
          placeholder={t('password.placeholder')}
          type="password"
        />
        {errors.password && <ErrorMessage text={errors.password.message} />}
      </div>
      <div className="">
        <AuthInput
          name="password_confirmation"
          register={register}
          label={t('password.label')}
          placeholder={t('password.placeholder')}
          type="password"
        />
        {errors.password_confirmation && (
          <ErrorMessage text={errors.password_confirmation.message} />
        )}
      </div>
      <div className="mt-[36px] flex flex-col gap-6">
        <PrimaryButton
          color="#E1C58B"
          textColor="#0E1012"
          text={t('submit')}
          classes="w-[_calc(_100%_-_32px)] mx-auto"
        />
        <p className="text-sm font-light text-[#8A8A98]">
          {t('hint')}
        </p>
      </div>
    </form>
  );
};

export default RegistrationForm;
