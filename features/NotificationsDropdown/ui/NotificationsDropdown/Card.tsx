import { useEffect } from "react";

interface Props {
  title: string;
  message: string;
  created_at: string;
  onRead: () => void;
}

export const Card = ({ title, message, created_at, onRead }: Props) => {
  useEffect(() => {
    onRead();
  }, []);

  return (
    <div className="open-notifications-dropdown-item">
      <div className="open-notifications-dropdown-item-title">{title}</div>
      <div>{message}</div>
      <div className="open-notifications-dropdown-item-date">{created_at}</div>
    </div>
  );
};
