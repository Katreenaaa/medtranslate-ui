# MedTranslate UI 🌐🎤

A real-time doctor–patient translation interface built with **React + Tailwind + Vite**.

🎥 Preview
![App Demo](assets/preview.gif)

---

## ⭐ About the Project

**MedTranslate UI** is a responsive web interface that enables real-time voice translation between doctors and patients.  
It features a clean UI, language selection, microphone recording controls, session handling, and live conversation feed.

This app was originally built for a hackathon UI challenge but stands alone as a polished frontend project.

---

## 🎯 Purpose

To demonstrate a **minimal, intuitive, medically-friendly** interface that supports:

- Doctor ↔ Patient two-way communication
- Real-time recording interactions
- Clear color-coded roles
- Responsive layout for tablets and small screens
- Optional session summary export flow

---

## 👩‍💻 Contributors

- **Katrina Emegbagba**
- **Ibrahim Abdulrahim**
- **Toluwase Shoniran**

---

## 💡 Core Features

### 🎙️ Mic Recording UI

- Dynamic Start/Stop microphone button
- Pulse animation when recording
- SVG-based mic icon
- Accessibility-friendly hover & focus feedback

### 🌐 Language Selector

- Doctor ↔ Patient language dropdowns
- Query parameter support using `useSearchParams`
- URL persistence for selected languages

### 🔄 Mode Toggle

- Switch speaker role visually
- Automatically updates header color
- Large tap-friendly controls

### 💬 Conversation Feed

- Scrollable conversation card
- Simple bubble layout
- Automatically grows as translations appear

### 🧾 Session Summary

- Export options:
  - Copy summary text
  - Download PDF
  - Start a new session
- Fully responsive button layout

### 📱 Responsive Layout

- All core components optimized for:
  - Mobile
  - Tablets
  - Desktop (centered card layout)
- Adaptive spacing & sizing using Tailwind breakpoints

---

## 🧩 Tech Stack

| Category           | Tools                                                             |
| ------------------ | ----------------------------------------------------------------- |
| **Framework**      | React (Vite)                                                      |
| **Styling**        | Tailwind CSS                                                      |
| **Routing**        | React Router DOM(` useNavigate``useLocation `, `useSearchParams`) |
| **State Handling** | React Hooks                                                       |
| **UI Components**  | Custom-built buttons, dropdowns, cards                            |
| **Icons**          | Inline SVG mic button                                             |

---

## 📁 Project Structure

medtranslate-ui/
│
├── src/
│ ├── components/
│ │ ├── MicButton.jsx
│ │ ├── EndSessionButton.jsx
│ │ ├── LanguageDropdown.jsx
│ │ ├── ModeToggle.jsx
│ │ └── ConversationFeed.jsx
│ │
│ ├── pages/
│ │ ├── LanguageSelectPage.jsx
│ │ ├── RecordingPage.jsx
│ │ └── SummaryPage.jsx ← displays session summary and export options
│ │
│ ├── hooks/
│ │ └── useLanguageParams.js ← syncs language with URL
│ │
│ ├── App.jsx
│ └── main.jsx
│
├── public/
├── README.md
└── package.json

---

## 🚀 Features at a Glance

- Modern UI with TailwindCSS
- Real-time mic recording with animated SVG
- Doctor ↔ Patient language selection
- URL query persistence for language selection
- Responsive conversation feed
- Session summary export
- Mobile → Desktop responsive layout

---

## 📌 Notes

- Originally built as a hackathon UI challenge
- Focuses solely on the frontend experience
- Can be integrated with a backend translation engine for full functionality
