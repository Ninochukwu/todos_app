import speech from "@google-cloud/speech";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const client = new speech.SpeechClient({
  keyFilename: path.join(__dirname, "../../gcloud-speech-key.json"),
});

export default client;
