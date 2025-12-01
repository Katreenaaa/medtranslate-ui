import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SummaryExport from "../components/SummaryExport";

function SummaryPage() {
  // no setChatSummary needed as summary is static for now
  const [chatSummary] = useState(
    <div>
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          <span className="font-semibold text-blue-600">
            PATIENT COMPLAINT:
          </span>
          <br />• Patient reports dizziness and mild headache for two days.
        </p>

        <p>
          <span className="font-semibold text-blue-600">DISCUSSION:</span>
          <br />• Doctor asked about sleep patterns and hydration.
          <br />• Patient mentioned skipping meals due to stress.
        </p>

        <p>
          <span className="font-semibold text-blue-600">ASSESSMENT:</span>
          <br />• Likely dehydration and stress-related fatigue.
        </p>

        <p>
          <span className="font-semibold text-blue-600">
            PLAN / NEXT STEPS:
          </span>
          <br />• Encourage rest and hydration.
          <br />• Schedule follow-up in 3 days.
        </p>

        <p>
          <span className="font-semibold text-blue-600">PRESCRIPTIONS:</span>
          <br />• Take paracetamol two times, in the morning and evening after
          meals.
        </p>
      </div>
    </div>
  );

  const navigate = useNavigate();

  function handleCopySummary() {}

  function handleDownload() {}

  function handleNewSession() {
    navigate("/");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-tr from-[#D6E6F2] via-[#A9CCE3] to-[#7FAED5] p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-3xl flex flex-col">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2 text-center md:text-left">
          Conversation Summary
        </h1>
        <p className="text-gray-500 mb-6 md:mb-8 text-center md:text-left">
          Medical consultation notes
        </p>

        <div className="bg-gray-100 p-4 rounded-md shadow-md mb-6 text-left text-gray-800 overflow-y-auto max-h-[60vh]">
          {chatSummary}
        </div>

        <SummaryExport
          onCopy={handleCopySummary}
          onDownload={handleDownload}
          onNew={handleNewSession}
        />
      </div>
    </div>
  );
}

export default SummaryPage;
