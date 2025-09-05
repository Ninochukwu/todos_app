import express from "express";
import oauth2Client from "../config/googleAuth.js";

const router = express.Router();

router.get("/google", (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/calendar"],
  });
  res.redirect(url);
});

router.get("/google/callback", async (req, res) => {
  try {
    const { code } = req.query;

    
    const { tokens } = await oauth2Client.getToken(code);


    console.log("Access Token:", tokens.access_token);
    console.log("Refresh Token:", tokens.refresh_token);

    res.send("✅ Google Calendar connected successfully!");
  } catch (error) {
    console.error("Google Auth Error:", error);
    res.status(500).send("❌ Authentication failed.");
  }
});

export default router;

