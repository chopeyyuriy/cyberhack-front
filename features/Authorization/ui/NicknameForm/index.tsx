"use client";

import { FC, useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import Image from "next/image";

import { AuthInput, AvatarsModal, ErrorMessage, PrimaryButton } from "@/shared";

import { zodResolver } from "@hookform/resolvers/zod";

import * as zod from "zod";

import "./styles.scss";
import { useAuthorizationStore } from "@/features/Account/model";
import { registrationApi } from "@/entities/Session";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie";

export interface INicknameFormSchema {
  nickname: string;
}

const NicknameForm: FC = () => {
  const t = useTranslations("register");

  const nicknameSchema = zod.object({
    nickname: zod
      .string({ required_error: "Nickname is required" })
      .min(4, { message: "Nickname must be at least 4 characters" })
      .max(20, { message: "Nickname must be less than 20 characters" }),
  });

  const { email, password, password_confirmation } = useAuthorizationStore(
    (state) => state,
  );

  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<INicknameFormSchema>({
    resolver: zodResolver(nicknameSchema),
  });

  const router = useRouter();

  const [currentAvatar, setCurrentAvatar] = useState<number>(0);

  const onSubmit: SubmitHandler<INicknameFormSchema> = async (_data) => {
    try {
      const { data }: any = await registrationApi({
        email,
        password,
        repeat_password: password_confirmation,
        name: _data.nickname,
        avatar: currentAvatar,
      });

      Cookies.set("accessToken", data?.token);
      await router.push("/profile");

      // await router.push("/login");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      className=" flex w-full flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="">
        <AuthInput
          label={t("username.label")}
          placeholder={t("username.placeholder")}
          register={register}
          name="nickname"
          type="text"
        />
        {errors.nickname && <ErrorMessage text={errors.nickname.message} />}
      </div>
      <div
        onClick={() => setIsModalOpened(true)}
        className="mt-3 flex w-full cursor-pointer items-center justify-between gap-3 rounded-md bg-[#FFFFFF05] p-3 pr-6"
      >
        <Image
          src={require("@/shared/assets/images/auth/avatars.png")}
          width={88}
          height={48}
          alt="avatars"
        />
        <span className="block text-sm font-light text-[#ACACBC]">
          {t("avatar.label")}
        </span>
        <PrimaryButton
          color="#202026"
          textColor="#8A8A98"
          href="#"
          text={t("avatar.select")}
        />
      </div>
      <div className="mt-[36px] flex flex-col gap-6">
        <PrimaryButton color="#E1C58B" textColor="#0E1012" text={t("end")} />
        <p className="text-sm font-light text-[#8A8A98]">{t("hint")}</p>
      </div>

      {isModalOpened && (
        <div className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/80">
          <AvatarsModal
            close={() => setIsModalOpened(false)}
            currentAvatar={currentAvatar}
            selectAvatar={setCurrentAvatar}
            save={() => setIsModalOpened(false)}
          />
        </div>
      )}
    </form>
  );
};

export default NicknameForm;
