"use client";
import { FC, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "next-intl";

import cn from "classnames";

import { MainContainer, PrimaryButton } from "@/shared";

import { unbounded } from "@/shared/fonts";

import SolderImage from "@/shared/assets/images/home/introduction/solder.png";

import "./styles.scss";

const Introduction: FC = () => {
  const t = useTranslations("home.introduction");

  useEffect(() => {
    console.log("here");
  }, []);

  return (
    <section className="introduction">
      <MainContainer classes="introduction__container">
        <div className="introduction__wrapper">
          <div className="introduction__content">
            <h2 className={cn("introduction__title", unbounded.className)}>
              {t.rich("title", {
                br: (chunks) => <br></br>,
              })}
              <span
                dangerouslySetInnerHTML={{ __html: t("highlight") }}
                className="introduction__highlight"
              />
            </h2>
            <p className="introduction__description">{t("description")}</p>
          </div>
          <div className="introduction__buttons">
            <PrimaryButton
              href="/catalog"
              text={t("buttons.select_cheats")}
              color="#E1C58B"
              textColor="#0E1012"
            />
            <PrimaryButton
              href="/accounts"
              text={t("buttons.accounts_store")}
              color="#59B3A8"
              textColor="#0E1012"
            />
          </div>
        </div>
        <Image
          src={SolderImage}
          width={688}
          height={502}
          alt="solder"
          className="introduction__image"
        />
      </MainContainer>
    </section>
  );
};

export default Introduction;
