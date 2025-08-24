import { addEventToCalendar } from "../services/calendarService.js";

export const createTask = async (req, res) => {
  const { title, description, startTime, endTime } = req.body;
  
  const task = await Task.create({ title, description, startTime, endTime, userId: req.user.id });

  if (req.user.googleTokens) {
    await addEventToCalendar(task, req.user.googleTokens);
  }

  res.status(201).json({ task, message: "Task created and synced with Google Calendar!" });
};
