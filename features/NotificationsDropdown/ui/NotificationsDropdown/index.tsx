import React, { FC } from "react";

import Image from "next/image";

import closeIcon from "@/shared/assets/icons/close-notifications.svg";

import "./styles.scss";
import { Card } from "./Card";

interface Props {
  onClose: () => void;
  data?: any;
  onReadNotification: (id: number) => void;
}

const NotificationsDropdown = ({
  onClose,
  data,
  onReadNotification,
}: Props) => {
  return (
    <div className="open-notifications-dropdown">
      <div className="open-notifications-dropdown-header">
        Уведомления
        <button onClick={onClose}>
          {" "}
          <Image
            src={closeIcon}
            width={20}
            height={20}
            alt="close notifications"
          />
        </button>
      </div>
      <div className="open-notifications-dropdown-items">
        {data?.map(({ id, title, message, created_at }, i) => (
          <React.Fragment key={id}>
            {i !== 0 ? (
              <div className="open-notifications-dropdown-items-divider"></div>
            ) : null}
            <Card
              title={title}
              message={message}
              created_at={created_at}
              onRead={() => onReadNotification(id)}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NotificationsDropdown;
