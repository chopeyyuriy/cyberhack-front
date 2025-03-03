import Image from "next/image";

export const Empty = () => (
  <div className="tickets-empty">
    <Image
      src={require("@/shared/assets/icons/empty-tickets.svg")}
      height={64}
      width={64}
      alt=""
    />
    <div className="tickets-empty__title">У вас нет тикетов</div>
    <div className="tickets-empty__desc">
      Вам нужно создать тикет, что бы <br /> он отобразился в этом блоке
    </div>
  </div>
);
