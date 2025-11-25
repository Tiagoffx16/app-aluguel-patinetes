import { NotificationSettings } from "@/types/notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NOTIFICATION_SETTINGS_KEY = "notification_settings";

const DEFAULT_SETTINGS: NotificationSettings = {
  enableNotifications: true,
  enableSoundNotifications: true,
  enableVibration: true,
};

export async function getNotificationSettings(): Promise<NotificationSettings> {
  try {
    const saved = await AsyncStorage.getItem(NOTIFICATION_SETTINGS_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error("Erro ao carregar configurações de notificações:", error);
  }
  return DEFAULT_SETTINGS;
}
