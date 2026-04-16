import { useFCMToken } from "../hooks/useFCMToken";
import { onMessage } from "firebase/messaging";
import { messaging } from "../firebase/firebaseConfig";
import { useEffect } from "react";

export default function NotificationManager() {
    useFCMToken();

    useEffect(() => {
        onMessage(messaging, (payload) => {
            console.log("Foreground alert:", payload);

            new Notification(payload.notification.title, {
                body: payload.notification.body
            });
        });
    }, []);

    return null;
}