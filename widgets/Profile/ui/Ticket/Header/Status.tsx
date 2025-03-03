import { useTranslations } from "next-intl";
import { STATUSES } from "../../TicketsList";

interface Props {
  status: number;
}

export const Status = ({ status }: Props) => {
  const t = useTranslations("tickets");


  return (
    <div className={`ticket-chat__header-actions__status ${STATUSES[status]}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M10 16.6667V8.33334"
          stroke="#59B3A8"
          stroke-width="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 16.6667V3.33334"
          stroke="#59B3A8"
          stroke-width="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 16.6667V13.3333"
          stroke="#59B3A8"
          stroke-width="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* @ts-ignore */}
      {t("status")}: {t(STATUSES[status])}
    </div>
  );
};
