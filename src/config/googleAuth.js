import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/calendar"];

export const getOAuthClient = () => {
  return new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );
};

export const getCalendar = (auth) => {
  return google.calendar({ version: "v3", auth });
};
const oauth2Client = getOAuthClient();
export default oauth2Client;