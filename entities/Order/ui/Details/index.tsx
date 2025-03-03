"use client";

import { FC, useMemo, useState } from "react";

import { unbounded } from "@/shared/fonts";
import cn from "classnames";

import { PrimaryButton, SeparatorLine, SliderCheckbox } from "@/shared";
import OrderSelect from "@/shared/ui/Selects/Order";
import Image from "next/image";
import "./styles.scss";
import { useTranslations } from "next-intl";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";
import { useLocale } from "next-intl";

export interface IRate {
  id: string;
  region: string;
  period: number;
  sale: number;
  cost: number;
  currency: string;
  url: string;
}

interface Props {
  extraLiteName?: string;
  extraFullName?: string;
  withoutTitle?: boolean;
  rates: IRate[];
  priceHint?: string | null;
  wallet: any;
}

const OrderDetails: FC<Props> = ({
  extraLiteName,
  extraFullName,
  withoutTitle,
  rates,
  priceHint,
  wallet,
}) => {
  const lang = useLocale();

  const t = useTranslations("product");

  const [selectedItem, selectItem] = useState<number>(0);
  const [confirm, setConfirm] = useState<boolean>(true);
  const [extraValue, setExtraValue] = useState<number>(0);

  const regions = Array.from(new Set(rates.map(({ region }) => region)));
  const hasCIS = regions.includes("cis");
  const hasGlobal = regions.includes("global");

  const [currentRegion, setCurrentRegion] = useState(hasCIS ? "cis" : "global");

  const getPrice = (value: number) => {
    const usd = wallet.usd;
    if (lang === "ru") {
      return value;
    }
    return (value / usd).toFixed(2);
  };

  const currency = lang == "ru" ? "₽" : "$";

  const hasExtra = useMemo(() => {
    return rates.filter(({ extra_value }) => extra_value).length > 0;
  }, [rates]);

  const currentRates = useMemo(() => {
    return rates
      .filter(
        ({ region, extra_value }) =>
          region === currentRegion &&
          (extra_value == extraValue + 1 || !extra_value),
      )
      .map((rate) => ({
        title: !withoutTitle ? `${rate.period} ${t("details.price.day")}` : "",
        price: getPrice(rate.cost * (1 - rate.sale)),
        discount: rate.sale,
        oldPrice: rate.sale ? getPrice(rate.cost) : undefined,
        currency: currency,
        url: rate.url,
      }));
  }, [rates, currentRegion, extraValue]);

  const currentRate = currentRates[selectedItem];

  const gotoPayment = () => window.open(currentRate.url, "_blank");

  const selectRegion = (region: string) => {
    setCurrentRegion(region);
    selectItem(0);
  };

  return (
    <div className="order-details">
      <h2 className={cn("order-details__title", unbounded.className)}>
        {t("details.label")}
      </h2>
      <SeparatorLine />
      <div className="order-details__container">
        <div className="order-details__wrapper">
          {!!extraFullName && !!extraLiteName && hasExtra && (
            <div
              className="order-details__full mb-3"
              style={{ justifyContent: "flex-start" }}
            >
              <p>{extraFullName}</p>
              <SliderCheckbox checked={extraValue} onChange={setExtraValue} />
              <p>{extraLiteName}</p>
            </div>
          )}
          <div className="order-details__inline">
            <span className="order-details__subtitle">
              {t("details.price.label")}
            </span>
            {priceHint && (
              <Tooltip title={priceHint}>
                <span className="order-details__icon">?</span>
              </Tooltip>
            )}
          </div>
          <div className="order-details__buttons">
            {hasCIS && (
              <button
                className={cn("order-details__button", {
                  "order-details__button_active": currentRegion === "cis",
                })}
                onClick={() => selectRegion("cis")}
              >
                <Image
                  src={require("@/shared/assets/icons/ru.svg")}
                  alt="flag"
                  width={18}
                  height={12}
                  className="order-details__flag"
                />
                <span className="order-details__text">CIS</span>
              </button>
            )}
            {hasGlobal && (
              <button
                className={cn("order-details__button", {
                  "order-details__button_active": currentRegion === "global",
                })}
                onClick={() => selectRegion("global")}
              >
                <Image
                  src={require("@/shared/assets/icons/eu.svg")}
                  alt="flag"
                  width={18}
                  height={12}
                  className="order-details__flag"
                />
                <span className="order-details__text">Global</span>
              </button>
            )}
          </div>
        </div>

        <OrderSelect
          selectedItem={selectedItem}
          selectItem={selectItem}
          options={currentRates}
        />
        <div className="order-details__inline">
          <div className="order-details-question">
            <Image
              src={require("@/shared/assets/icons/question.svg")}
              width={14}
              height={14}
              className="order-details-question__icon"
              alt="icon"
            />
          </div>
          <p className="order-details__description">{t("details.price.fee")}</p>
        </div>
        <span className="order-details__line" />
        <div className="order-details__inline">
          <span className="order-details__cost">
            {t("details.price.price")}
          </span>
          {currentRate && (
            <span className={cn("order-details__price", unbounded.className)}>
              {currentRate.price}
              {currentRate.currency}
            </span>
          )}
        </div>
        <PrimaryButton
          text={t("details.price.pay")}
          color="#59B3A8"
          textColor="#0E1012"
          classes={cn("order-details__primary_button", {
            "order-details__primary_button_disabled": !confirm,
          })}
          click={gotoPayment}
        />
        <div className="order-details__inline">
          <SliderCheckbox checked={confirm} onChange={setConfirm} />
          <p className="order-details__description ml-3">
            {t("details.price.policy")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
