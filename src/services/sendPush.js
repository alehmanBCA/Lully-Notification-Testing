import admin from "../firebase/admin.js";

export async function sendPush(token, title, body) {
    await admin.messaging().send({
        token, 
        notification: {
            title,
            body
        }
    });
}