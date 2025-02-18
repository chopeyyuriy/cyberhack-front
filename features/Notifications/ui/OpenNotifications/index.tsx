import { FC, useEffect, useState } from "react";

import Image from "next/image";

import notificationIcon from "@/shared/assets/icons/notification.svg";

import "./styles.scss";
import { NotificationsDropdown } from "@/features/NotificationsDropdown";
import {
  getNotificationsApi,
  readUserNotifications,
} from "@/entities/Notifications/api";
import { useAppSelector } from "@/store";

const OpenNotifications: FC = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<any>([]);
  const user = useAppSelector((state) => state.session.user);

  const handleGetNotifications = () => {
    getNotificationsApi(user?.id).then((resp) =>
      setData(
        resp?.data?.notifications?.filter(
          (n: any) => !n?.user_notification?.is_read,
        ),
      ),
    );
  };

  useEffect(() => {
    handleGetNotifications();
  }, []);

  const handleReadNotification = (id: number) => {
    user && readUserNotifications(user?.id, id);
  };

  useEffect(() => {
    if (data.length === 0) {
      setOpen(false);
    }
  }, [data]);

  const handleClose = () => {
    setOpen(false);
    handleGetNotifications();
  };

  return (
    <button className="open-notifications-wrapper">
      <Image
        src={notificationIcon}
        width={24}
        height={24}
        alt="notifications"
        className={data.length === 0 ? "open-notifications" : ""}
        onClick={() => (data?.length > 0 ? setOpen(true) : null)}
      />
      {data?.length > 0 ? (
        <div className="open-notifications-count" onClick={() => setOpen(true)}>
          {data?.length}
        </div>
      ) : null}

      {open ? (
        <NotificationsDropdown
          onClose={handleClose}
          data={data}
          onReadNotification={handleReadNotification}
        />
      ) : null}
    </button>
  );
};

export default OpenNotifications;
