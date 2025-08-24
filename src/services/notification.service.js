import admin from "../config/firebase.js";

export const sendNotification = async (token, title, body) => {
  const message = {
    notification: { title, body },
    token,
  };

  return await admin.messaging().send(message);
};
