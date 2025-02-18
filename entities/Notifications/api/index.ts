import { api } from "@/shared";

export const getNotificationsApi = async (user_id?: number) => {
  return await api.get<any>("/get-user-notifications", { params: { user_id } });
};

export const readUserNotifications = async (
  user_id?: number,
  notification_id: number,
) => {
  return await api.post<any>("/read-user-notification", null, {
    params: { user_id, notification_id },
  });
};
