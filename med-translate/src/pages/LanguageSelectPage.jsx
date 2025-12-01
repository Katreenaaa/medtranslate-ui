import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LanguageDropdown from "../components/LanguageDropdown";

function LanguageSelectPage() {
  const [languages, setLanguages] = useState({ doctor: "", patient: "" });
  const navigate = useNavigate();

  const languageOptions = [
    { code: "en", name: "English" },
    { code: "ig", name: "Igbo" },
    { code: "yo", name: "Yoruba" },
    { code: "ha", name: "Hausa" },
  ];

  function handleDoctorChange(value) {
    setLanguages((l) => ({ ...l, doctor: value }));
  }

  function handlePatientChange(value) {
    setLanguages((l) => ({ ...l, patient: value }));
  }

  function handleContinue() {
    if (!languages.doctor || !languages.patient) {
      alert("Please select both languages before continuing.");
      return;
    }
    navigate(
      `/recording?doctor=${languages.doctor}&patient=${languages.patient}`
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-tr from-[#D6E6F2] via-[#A9CCE3] to-[#7FAED5] p-4">
      <div className="bg-white p-8 md:p-16 rounded-2xl shadow-md w-full max-w-3xl space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-2 text-blue-950">
          MedTranslate
        </h1>
        <p className="text-sm md:text-md text-center mb-4 md:mb-8 text-gray-700">
          Real-time medical translation
        </p>
        <p className="text-lg md:text-xl font-semibold text-center mb-6 md:mb-10 text-blue-950">
          Start a New Session
        </p>

        <LanguageDropdown
          label="Doctor's Language"
          value={languages.doctor}
          onChange={handleDoctorChange}
          options={languageOptions}
        />

        <LanguageDropdown
          label="Patient's Language"
          value={languages.patient}
          onChange={handlePatientChange}
          options={languageOptions}
        />

        <button
          className="w-full bg-blue-500 text-white text-lg mt-4 md:mt-6 py-2 rounded-md hover:bg-blue-700 transition"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default LanguageSelectPage;
