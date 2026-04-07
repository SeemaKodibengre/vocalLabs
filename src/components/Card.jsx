import React from 'react';
import { GROQ_API_KEY } from "../config/config";
import useSpeechToText from '../hooks/useSpeechToText';


const Card = () => {
    const { text,setText, isRecording, startRecording, stopRecording,balance,setBalance } =
    useSpeechToText();

    const copyText = () => {
  navigator.clipboard.writeText(text);
  alert("Copied!");
  setText("");
};


const processText = async () => {
  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "user",
            content: `Correct grammar: ${text}`
          }
        ]
      })
    });

    const data = await response.json();
    console.log(data);

    const result = data?.choices?.[0]?.message?.content;

   if (result) {
  setText(result);

  setBalance(prev => ({
    ...prev,
    groq: prev.groq - 1
  }));
} else {
      alert("API not working. Check console.");
    }
    

  } catch (error) {
    console.error(error);
  }
};
  return (
    <>
    

    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-950'>
 <div className="bg-white/70  shadow-2xl rounded-2xl p-5 w-[360px] border border-gray-300">
 <h1 className='text-center text-blue-950 text-3xl'>VocalFlow</h1>

 <div className='flex justify-center items-center gap-5'>
    <button onClick={startRecording} className='bg-green-500 px-5 py-3 mt-2 text-white border-gray-50 rounded-xl hover:bg-green-600'>Start</button>
    <button onClick={stopRecording} className='bg-red-500 px-5 py-3 mt-2 text-white border-gray-50 rounded-xl hover:bg-red-600'>Stop</button> 
 </div>
 {isRecording && <p>Recording...</p>}
 <h3 className="text-lg font-semibold text-gray-700 mb-2">
      Transcript
    </h3>

    <div className="border border-gray-300 rounded-lg p-3 min-h-[70px] bg-gray-50">
      {text}
    </div>

     <button onClick={copyText} className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg shadow-md transition-all duration-200">
      Copy Text
    </button>
 <button
  onClick={processText}
  className="mt-4 w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg"
>
  Improve Text 
</button>

<div className="mt-6 text-left">
  <h3 className="text-lg font-semibold text-gray-700 mb-2">
     Balances
  </h3>

  <p className="text-gray-600">
    Deepgram Balance: {balance.deepgram} mins
  </p>

  <p className="text-gray-600">
    Groq Balance: {balance.groq} credits
  </p>
</div>




 </div>
    </div>
    </>
  )
}

export default Card;