"use client";

import { HeaderAccountCard } from "@/shared/ui";
import Link from "next/link";
import { FC } from "react";

export interface IOpenAccountPageProps {
  name: string;
  image?: string;
}

const OpenAccountPage: FC<IOpenAccountPageProps> = ({ name, image }) => {
  return <HeaderAccountCard name={name} image={image} />;
};

export default OpenAccountPage;
