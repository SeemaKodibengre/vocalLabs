import { useState, useRef } from "react";

function useSpeechToText() {
  const [text, setText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef(null);
const [balance, setBalance] = useState({
  deepgram: 120,
  groq: 50
});
  const startRecording = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

recognition.continuous = true;
recognition.interimResults = true;

    recognition.onstart = () => {
      setIsRecording(true);
    };

   recognition.onresult = (event) => {
  let transcript = "";

  for (let i = 0; i < event.results.length; i++) {
    transcript += event.results[i][0].transcript + " ";
  }

  setText(transcript);
};

    recognition.onerror = (event) => {
  if (event.error === "no-speech") {
    recognition.start(); // restart automatically
  }
};
    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.start();
     setBalance(prev => ({
    ...prev,
    deepgram: prev.deepgram - 1
  }));
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  return {
    text,
    setText,
    isRecording,
    startRecording,
    stopRecording,
    balance,setBalance
  };
}

export default useSpeechToText;