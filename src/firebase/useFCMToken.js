import { useEffect, useState } from "react";
import { requestNotificationPermission } from "../firebase/messaging";

export function useFCMToken() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        async function setup() {
            const fcmToken = await requestNotificationPermission();
            setToken(fcmToken);

            if (fcmToken) {
                await fetch("/api/tokens", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ token: fcmToken })
                });
            }
        }
        setup();
    }, []);

    return token;
}