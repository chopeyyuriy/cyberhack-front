"use client";
import { closeUserTicketById } from "@/entities/Ticket/api";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  isClosed: boolean;
  id: number;
}

export const CloseButton = ({ isClosed, id }: Props) => {
  const t = useTranslations("tickets");
  const router = useRouter();

  const handleClose = () => {
    if (!isClosed) {
      closeUserTicketById(id).then((resp) => {
        if (resp.status === 200) {
          router.push("/profile/support");
        }
      });
    }
  };

  return (
    <button
      className={`ticket-chat__header-actions__close ${isClosed && "closed"}`}
      onClick={handleClose}
    >
      <Image
        src={
          isClosed
            ? require("@/shared/assets/icons/lock.svg")
            : require("@/shared/assets/icons/x.svg")
        }
        alt=""
        height={18}
        width={18}
      />
      {t(isClosed ? "closed" : "close")}
    </button>
  );
};
