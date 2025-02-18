import { FC } from "react";
import Image from "next/image";

import cn from "classnames";

import { SafetyContainer, SafetyHeading, SeparatorLine } from "@/shared";

import "./styles.scss";

const Devices: FC = () => {
  return (
    <SafetyContainer>
      <SafetyHeading text="Устройства" />
      <div className="flex flex-col">
        <div className="grid grid-cols-4 p-2 text-[11px] uppercase text-[#595962]">
          <span className="col-span-1">ТИП ДОСТУПА</span>
          <span className="col-span-1">СТРАНА</span>
          <span className="col-span-2">Последняя активность</span>
        </div>
        <SeparatorLine light />
        <ul className="flex flex-col">
          <li className="grid grid-cols-4 items-center px-2 py-3">
            <div className="col-span-1 flex items-center gap-2">
              <Image
                src={require("@/shared/assets/icons/windows.svg")}
                width={20}
                height={20}
                alt="icon"
              />
              <span className="text-sm font-light text-[#C0C6D1]">
                Windows, Chrome
              </span>
            </div>
            <span className="col-span-1 text-sm font-light text-[#8A8A98]">
              Ukraine, Druzhkivka
            </span>
            <span className="col-span-1 text-sm font-light text-[#8A8A98]">
              Вчера в 15:26
            </span>
            <span className="col-span-1 text-sm font-light text-[#5A9D69]">
              Текущая
            </span>
          </li>
          <li
            className={cn("grid grid-cols-4 items-center px-2 py-3", {
              "bg-white/[0.02]": true,
            })}
          >
            <div className="col-span-1 flex items-center gap-2">
              <Image
                src={require("@/shared/assets/icons/windows.svg")}
                width={20}
                height={20}
                alt="icon"
              />
              <span className="text-sm font-light text-[#C0C6D1]">
                Windows, Chrome
              </span>
            </div>
            <span className="col-span-1 text-sm font-light text-[#8A8A98]">
              Ukraine, Druzhkivka
            </span>
            <span className="col-span-1 text-sm font-light text-[#8A8A98]">
              Вчера в 15:26
            </span>
            <span className="col-span-1 text-sm font-light text-[#5A9D69]">
              Текущая
            </span>
          </li>
          <li className="grid grid-cols-4 items-center px-2 py-3">
            <div className="col-span-1 flex items-center gap-2">
              <Image
                src={require("@/shared/assets/icons/windows.svg")}
                width={20}
                height={20}
                alt="icon"
              />
              <span className="text-sm font-light text-[#C0C6D1]">
                Windows, Chrome
              </span>
            </div>
            <span className="col-span-1 text-sm font-light text-[#8A8A98]">
              Ukraine, Druzhkivka
            </span>
            <span className="col-span-1 text-sm font-light text-[#8A8A98]">
              Вчера в 15:26
            </span>
            <span className="col-span-1 text-sm font-light text-[#5A9D69]">
              Текущая
            </span>
          </li>
        </ul>
      </div>
    </SafetyContainer>
  );
};

export default Devices;
