"use client";

import { FC, useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AuthCheckbox, AuthInput, ErrorMessage, PrimaryButton } from "@/shared";

import * as zod from "zod";

import "./styles.scss";
import { loginApi, loginBySocmedia } from "@/entities/Session";
import { useRouter } from "next/navigation";

import Cookies from "js-cookie";
import { useTranslations } from "next-intl";

export interface ILoginFormSchema {
  email: string;
  password: string;
  check: boolean;
}

export const loginSchema = zod.object({
  email: zod
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email" }),
  password: zod
    .string({ required_error: "Password is required" })
    .min(6, {
      message: "Password must be at least 6 characters",
    })
    .max(20, {
      message: "Password must be less than 20 characters",
    }),
});

const LoginForm: FC = () => {
  const t = useTranslations("auth");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ILoginFormSchema>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  const [isFetching, setIsFetching] = useState<boolean>(false);

  const onSubmit: SubmitHandler<ILoginFormSchema> = async (_data) => {
    if (isFetching) return;

    setIsFetching(true);
    try {
      const { data } = await loginApi(_data);

      Cookies.set("accessToken", data.token);

      await router.push("/profile");

      console.log(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsFetching(false);
    }
  };

  const [check, setCheck] = useState<boolean>(false);

  const handleAuthBySocmedia = (type: string) => {
    loginBySocmedia(type).then((resp) => {
      const url = resp?.data?.url;
      if (url && window) {
        window?.open(url, "_blank").focus();
      }
    });
  };

  return (
    <form
      className=" flex w-full flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="">
        <AuthInput
          name="email"
          register={register}
          label={t("email.label")}
          placeholder={t("email.placeholder")}
          type="email"
        />
        {errors.email && <ErrorMessage text={errors.email.message} />}
      </div>
      <div className="">
        <AuthInput
          name="password"
          register={register}
          label={t("password.label")}
          placeholder={t("password.placeholder")}
          type="password"
        />
        {errors.password && <ErrorMessage text={errors.password.message} />}
      </div>
      <div className=" flex items-center justify-between">
        <div
          className=" flex cursor-pointer select-none items-center gap-[6px]"
          onClick={() => setCheck(!check)}
        >
          <AuthCheckbox value={check} />
          <span className="text-[14px] font-light text-[#C0C6D1]">
            {t("remember")}
          </span>
        </div>
        <a
          href={"/restore-password"}
          className="text-sm font-light text-[#8A8A98]"
        >
          {t("forgot")}
        </a>
      </div>
      <div className="mt-[36px] flex flex-col gap-6">
        <PrimaryButton
          color="#E1C58B"
          textColor="#0E1012"
          text={t("submit")}
          classes="w-[_calc(_100%_-_32px)] mx-auto"
          type="submit"
        />
        <span className="text-center text-sm font-light text-[#595962]">
          {t("alternative")}
        </span>
        <div className="flex items-center gap-10">
          <PrimaryButton
            color="#9747FF"
            textColor="#0E1012"
            text="Войти"
            classes="w-full"
            click={() => handleAuthBySocmedia("discord")}
            type="button"
          >
            <Image src={require("@/shared/assets/icons/ds.svg")} alt="icon" />
          </PrimaryButton>
          <PrimaryButton
            color="#3B87C6"
            textColor="#0E1012"
            text="Войти"
            classes="w-full"
            click={() => handleAuthBySocmedia("vkontakte")}
            type="button"
          >
            <Image
              src={require("@/shared/assets/icons/vk-light.svg")}
              alt="icon"
            />
          </PrimaryButton>
          <PrimaryButton
            color="#EA4335"
            textColor="#0E1012"
            text="Войти"
            classes="w-full"
            click={() => handleAuthBySocmedia("google")}
            type="button"
          >
            <Image
              src={require("@/shared/assets/icons/google.svg")}
              alt="icon"
            />
          </PrimaryButton>
        </div>
      </div>
    </form>
  );
};
export default LoginForm;
