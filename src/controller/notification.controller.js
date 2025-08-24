import { sendNotification } from "../services/notificationService.js";

export const sendReminder = async (req, res) => {
  const { token, title, body } = req.body;
  await sendNotification(token, title, body);
  res.json({ message: "Notification sent successfully!" });
};
