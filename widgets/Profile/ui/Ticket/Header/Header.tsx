import { TICKET_TYPES } from "@/features/Account/ui/TicketModal";
import Image from "next/image";
import { Status } from "./Status";
import { CloseButton } from "./CloseButton";
import { useLocale, useTranslations } from "next-intl";
import { IUserTicket } from "@/shared/types/Ticket";

interface Props {
  ticket?: IUserTicket;
}

export const Header = ({ ticket }: Props) => {
  const t = useTranslations("tickets");
  const locale = useLocale();

  return (
    <div className="ticket-chat__header">
      <div className="ticket-chat__header-info">
        <div
          className="ticket-chat__header-info__icon"
          style={{
            background:
              TICKET_TYPES.find((t) => t.id === ticket?.theme?.id?.toString())
                ?.bg ?? TICKET_TYPES[4]?.bg,
          }}
        >
          <Image
            alt=""
            src={
              TICKET_TYPES.find((t) => t.id === ticket?.theme?.id?.toString())
                ?.image ?? TICKET_TYPES[4]?.image
            }
            width={16}
            height={16}
          />
        </div>
        <div>
          <div className="ticket-chat__header-info__title">
            {locale === "ru" ? ticket?.theme?.name_ru : ticket?.theme?.name_en}
          </div>
          <div className="ticket-chat__header-info__id">#{ticket?.id}</div>
        </div>
      </div>
      <div className="ticket-chat__header-actions">
        {ticket ? (
          <>
            {" "}
            <Status status={ticket?.status} />
            <CloseButton isClosed={ticket.status === 2} id={ticket.id} />
          </>
        ) : null}
      </div>
    </div>
  );
};
