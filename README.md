# MedTranslate UI 🌐🎤

**Real-Time Doctor–Patient Translation Interface (Demo UI)**

🔗 Live Demo: [https://medtranslate-ui.netlify.app](https://medtranslate-ui.netlify.app)
🔗 GitHub Repository: [https://github.com/Katreenaaa/medtranslate-ui](https://github.com/Katreenaaa/medtranslate-ui)

---

## Overview

MedTranslate UI is a **frontend proof-of-concept** web application that demonstrates how a real-time doctor–patient translation interface could work in a medical setting. The project focuses on **user interface design, interaction flow, and responsiveness**, rather than full backend or AI-powered translation implementation.

This project was built to showcase frontend engineering skills and thoughtful UI/UX design for healthcare-related use cases.

---

## ⚠️ Demo Mode Notice

> **This application is a UI demo only.**
> It does not include live speech-to-text, AI translation, or backend services.

All interactions (microphone controls, conversation flow, exports) are implemented at a **demo / simulation level** to demonstrate functionality and user experience.

---

## Features

- 🎙️ Microphone control interface (demo-level interaction)

* Dynamic Start/Stop microphone button
* Pulse animation when recording
* SVG-based mic icon
* Accessibility-friendly hover & focus feedback

- 🌍 Language selection for doctor and patient roles

* Doctor ↔ Patient language dropdowns
* Query parameter support using `useSearchParams`
* URL persistence for selected languages

- 💬 Conversation feed with clear role distinction

* Switch speaker role visually
* Automatically updates header color
* Large tap-friendly controls

- 📄 Session summary export (UI-based)

* Export options:
  - Copy summary text
  - Download PDF
  - Start a new session

- 🎨 Color‑coded roles for clarity and accessibility

- 📱 Fully responsive design (mobile → desktop)

---

## 🧩 Tech Stack

- **React** – Component-based UI development
- **Tailwind CSS** – Utility-first styling and responsive design
- **Vite** – Fast development and build tooling

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

## Project Scope

### Included

- Frontend UI/UX design
- Interaction flow and component logic
- Responsive layouts and accessibility considerations

### Not Included

- Live speech recognition APIs
- AI translation engines
- Backend services or databases

The goal of this project is to demonstrate **frontend architecture and interface design**, not to deliver a production-ready medical application.

---

## Motivation

Language barriers remain a significant challenge in healthcare delivery. MedTranslate UI explores how thoughtful interface design could support clearer communication between doctors and patients, especially in multilingual or underserved environments.

---

## Getting Started (Local Development)

```bash
# clone the repository
git clone https://github.com/Katreenaaa/medtranslate-ui.git

# navigate into the project folder
cd med-translate

# install dependencies
npm install

# start development server
npm run dev
```

---

## Future Improvements

- Improved UI interface
- Integration with real speech‑to‑text APIs
- AI-powered translation services
- Backend session storage
- Accessibility enhancements (screen reader support)

---

## Author

**Katrina Emegbagha**
Computer Engineering Student, University of Lagos
Frontend Developer

📧 Email: [katrinaemegbagha@gmail.com](mailto:katrinaemegbagha@gmail.com)
🔗 GitHub: [https://github.com/Katreenaaa](https://github.com/Katreenaaa)

---

## Disclaimer

This project is for **educational and demonstration purposes only** and should not be used as a medical device or clinical tool.

## 📌 Notes

- Originally built as a hackathon challenge
- Focuses solely on the frontend experience
