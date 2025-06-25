import { useEffect } from "react";
import * as Notifications from "expo-notifications";

import expoPushTokensApi from "../api/expoPushTokens";

export default useNotifications = (notificationListener) => {
        useEffect(() => {
                registerForPushNotifications();

                if (notificationListener)
                        Notifications.addNotificationReceivedListener(notificationListener);
        }, []);

        const registerForPushNotifications = async () => {
                try {
                        const { status: existingStatus } = await Notifications.getPermissionsAsync();
                        let finalStatus = existingStatus;
                        if (existingStatus !== "granted") {
                                const { status } = await Notifications.requestPermissionsAsync();
                                finalStatus = status;
                        }
                        if (finalStatus !== "granted") return;

                        const tokenData = await Notifications.getExpoPushTokenAsync();
                        expoPushTokensApi.register(tokenData.data);
                } catch (error) {
                        console.log("Error getting a push token", error);
                }
        };
};
