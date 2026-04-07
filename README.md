#  VocalFlow Clone (Windows - React)

This project is a simplified clone of the VocalFlow macOS app, built using React for Windows/web environments.

It allows users to record voice, convert it into text, and enhance the text using AI.

---

## Features

* **Speech to Text**

  * Uses Web Speech API for real-time voice recognition

* **AI Text Improvement**

  * Integrated with Groq API to correct grammar and improve text

* **Copy to Clipboard**

  * Easily copy the generated text

* **Balance Display**

  * Shows Deepgram and Groq balances (mock implementation)

*  **Modern UI**

  * Built with Tailwind CSS for clean and responsive design

---

## How It Works

1. Click **Start Recording**
2. Speak into your microphone
3. Text appears on screen
4. Click **Improve Text** to enhance using AI
5. Copy the final text using the Copy button

---

##  Tech Stack

* React.js
* Tailwind CSS
* Web Speech API (Speech Recognition)
* Groq API (Text Processing)

---

##  API Configuration

API keys are stored in a separate config file as per assignment requirement.

 `src/config.js`

```javascript
export const GROQ_API_KEY = "your_groq_api_key";

```



## Balance Feature

* Deepgram and Groq balances are displayed as **mock values**
* Balances decrease based on usage to simulate real-world behavior
* In production, these would be fetched from respective APIs

---

##  Note


* Web Speech API is used for speech recognition for simplicity
* This project focuses on functionality and clean UI rather than full backend integration

---

## Installation & Setup

1. Clone the repository:

```bash
git clone <your-github-repo-link>
```

2. Navigate to project folder:

```bash
cd vocalflow-clone
```

3. Install dependencies:

```bash
npm install
```

4. Run the project:

```bash
npm run dev
```

---

## Project Structure

```
src/
├── components/
│   └── Card.jsx
├── hooks/
│   └── useSpeechToText.js
├── config.js
├── App.js
├── index.js
```

---

## ZIP Submission

* `node_modules` folder is excluded
* Only source code is included

---

## Conclusion

This project demonstrates:

* Understanding of speech-to-text systems
* Integration of AI APIs
* Clean UI development
* Proper project structure

