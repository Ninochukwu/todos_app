import fs from "fs";
import speechClient from "../config/speech.js";
import { Todo } from "../models/Todo.model.js";

export const createTodoFromVoice = async (req, res) => {
  try {
    const { filePath } = req.body; // audio file path
    const userId = req.user.id;

    // Load audio file
    const file = fs.readFileSync(filePath);
    const audioBytes = file.toString("base64");

    const request = {
      audio: { content: audioBytes },
      config: {
        encoding: "LINEAR16", // depends on your audio format
        sampleRateHertz: 16000,
        languageCode: "en-US",
      },
    };

    const [response] = await speechClient.recognize(request);
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join(" ");

    // Save todo
    const todo = await Todo.create({
      title: transcription,
      description: "Created from voice input",
      userId,
    });

    res.json({ message: "Todo created from voice ✅", todo });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
