import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ModeToggle from "../components/ModeToggle";
import MicButton from "../components/MicButton";
import ConversationFeed from "../components/ConversationFeed";
import EndSessionButton from "../components/EndSessionButton";

function Recording() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isRecording, setIsRecording] = useState(false);
  const [currentSpeaker, setCurrentSpeaker] = useState("doctor");
  const [conversation, setConversation] = useState([]);
  const [languages, setLanguages] = useState({ doctor: "", patient: "" });

  const languageMap = {
    en: { name: "English", flag: "🇺🇸" },
    ig: { name: "Igbo", flag: "🇳🇬" },
    yo: { name: "Yoruba", flag: "🇳🇬" },
    ha: { name: "Hausa", flag: "🇳🇬" },
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const doctor = params.get("doctor");
    const patient = params.get("patient");
    setLanguages({ doctor, patient });
  }, [location]);

  const doctorLang = languageMap[languages.doctor] || {};
  const patientLang = languageMap[languages.patient] || {};

  const handleStart = () => {
    setIsRecording(true);
    const dummyMessage = {
      speaker: currentSpeaker,
      original:
        currentSpeaker === "doctor"
          ? "How are you feeling today?"
          : "I am feeling dizzy.",
      translated:
        currentSpeaker === "doctor"
          ? "Comment vous sentez-vous aujourd'hui ?"
          : "Je me sens étourdi.",
    };
    setConversation((prev) => [...prev, dummyMessage]);
  };

  const handleStop = () => setIsRecording(false);

  const toggleSpeaker = () =>
    setCurrentSpeaker((prev) => (prev === "doctor" ? "patient" : "doctor"));

  const endSession = () => navigate("/summary", { state: { conversation } });

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-tr from-[#D6E6F2] via-[#A9CCE3] to-[#7FAED5] p-4">
      <div className="w-full max-w-3xl flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div
          className={`flex flex-col md:flex-row justify-between items-start md:items-center px-6 py-7 text-lg font-semibold text-white ${
            currentSpeaker === "doctor" ? "bg-blue-700" : "bg-green-700"
          }`}
        >
          <span className="mb-2 md:mb-0">
            {currentSpeaker === "doctor"
              ? "Doctor Speaking"
              : "Patient Speaking"}
          </span>
          <div className="flex items-center gap-3 text-base">
            <div className="flex items-center gap-1">
              <span>{doctorLang.flag}</span>
              <span>{doctorLang.name}</span>
            </div>
            <span>↔️</span>
            <div className="flex items-center gap-1">
              <span>{patientLang.flag}</span>
              <span>{patientLang.name}</span>
            </div>
          </div>
        </div>

        {/* Conversation Feed*/}
        <div className="bg-gray-50 p-4 border-t border-b border-gray-200">
          <ConversationFeed conversation={conversation} />
        </div>

        {/* Controls Card */}
        <div className="p-6 bg-white shadow-inner flex flex-col gap-4 items-center">
          <ModeToggle mode={currentSpeaker} onToggle={toggleSpeaker} />
          <MicButton
            isRecording={isRecording}
            onStart={handleStart}
            onStop={handleStop}
          />
          <EndSessionButton onClick={endSession} />
        </div>
      </div>
    </div>
  );
}

export default Recording;
