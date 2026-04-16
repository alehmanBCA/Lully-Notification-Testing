import { getToken } from "firebase/messaging";
import { messaging } from "./firebaseConfig";

export async function requestNotificationPermission() {
    const permission = await Notification.requestPermission();

    if (permission !== "granted") {
        console.log("Permission denied");
        return null;
    }

    try {
        const token = await getToken(messaging, {
            vapidKey: "BE-m5wIliKhj0k5hZ8Le4dvSCE7jZH06C2uSc4AoOGzFPS2CP3IMZ6CixY40BNCUh-BzlKHo-07ya10rdmm5-38"
        });

        console.log("FCM Token:", token);
        return token;

    } catch (err) {
        console.error("Error getting FCM token:", err);
        return null;
    }
}