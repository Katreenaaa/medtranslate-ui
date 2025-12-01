export default function MicButton({ isRecording, onStart, onStop }) {
  const handleClick = () => {
    if (isRecording) onStop();
    else onStart();
  };

  return (
    <button
      onClick={handleClick}
      className={`relative w-24 h-24 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 ease-in-out
        ${
          isRecording
            ? "bg-red-500 hover:bg-red-500"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
    >
      {/* Radiating pulse when recording */}
      {isRecording && (
        <>
          <span className="absolute w-20 h-20 rounded-full bg-red-400 opacity-60 animate-ping delay-400 "></span>
          <span className="absolute w-22 h-22 rounded-full bg-red-400 opacity-10 animate-ping delay-400"></span>
        </>
      )}

      {/* Mic SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
        <line x1="12" x2="12" y1="19" y2="22"></line>
      </svg>
    </button>
  );
}
