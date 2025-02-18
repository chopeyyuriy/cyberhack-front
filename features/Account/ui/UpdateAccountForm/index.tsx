"use client";

import { AuthInput, ErrorMessage } from "@/shared";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import * as zod from "zod";
import { IUpdateAccountDTO, updateProfileApi } from "@/entities/Session";
import { PrimaryButton } from "@/shared/ui/Buttons/index";
import { useTranslations } from "next-intl";

export interface IUpdateAccountFormProps {
  username: string;
  email: string;
}

const UpdateAccountForm: FC<IUpdateAccountFormProps> = ({
  username,
  email,
}) => {
  const t = useTranslations("profile.profile");

  const updateAccountSchema = zod.object({
    name: zod.string().min(6, {
      message: "Name must be at least 6 characters",
    }),
    // email: zod.string().email({ message: "Invalid email" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateAccountDTO>({
    resolver: zodResolver(updateAccountSchema),
  });

  const onSubmit: SubmitHandler<IUpdateAccountDTO> = async (
    _data: IUpdateAccountDTO,
  ) => {
    const { name } = _data;
    await updateProfileApi(name);
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <label className="flex items-center justify-between gap-6 p-3 max-md:flex-col max-md:items-start">
        <div className="flex flex-col gap-[2px]">
          <span className="text-sm text-[#ACACBC]">
            {t("personal.username.title")}
          </span>
          <span className="text-[13px] text-[#595962]">
            {t("personal.username.text")}
          </span>
        </div>
        <div>
          <AuthInput
            icon="user"
            name="name"
            placeholder={username}
            register={register}
            type="text"
          />{" "}
          {errors.name && <ErrorMessage text={errors.name.message} />}
        </div>
      </label>
      <label className="flex items-center justify-between gap-6 p-3 max-md:flex-col max-md:items-start">
        <div className="flex flex-col gap-[2px]">
          <span className="text-sm text-[#ACACBC]">
            {t("personal.email.title")}
          </span>
          <span className="text-[13px] text-[#595962]">
            {t("personal.email.text")}
          </span>
        </div>
        <AuthInput
          icon="email"
          name="email"
          placeholder={email}
          register={register}
          type="email"
          readonly
        />
      </label>
      <div className="mt-2 flex items-center justify-end pr-3">
        <PrimaryButton
          type="submit"
          text={t("personal.save")}
          color="#E1C58B"
          textColor="#0E1012"
        />
      </div>
    </form>
  );
};

export default UpdateAccountForm;
