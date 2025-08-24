import { getOAuthClient, getCalendar } from "../config/google_calendar.js";

export const addEventToCalendar = async (task, tokens) => {
  const oAuth2Client = getOAuthClient();
  oAuth2Client.setCredentials(tokens);

  const calendar = getCalendar(oAuth2Client);

  const event = {
    summary: task.title,
    description: task.description,
    start: { dateTime: task.startTime, timeZone: "UTC" },
    end: { dateTime: task.endTime, timeZone: "UTC" },
  };

  return await calendar.events.insert({
    calendarId: "primary",
    resource: event,
  });
};
