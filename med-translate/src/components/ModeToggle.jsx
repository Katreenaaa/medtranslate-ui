export default function ModeToggle({ mode, onToggle }) {
  const isPatient = mode === "patient";

  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      {/* Doctor Label */}
      <span
        className={`font-semibold transition-colors ${
          !isPatient ? "text-blue-600" : "text-gray-400"
        }`}
      >
        Doctor
      </span>

      {/* Toggle Switch */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={isPatient}
          onChange={onToggle}
        />
        <div
          className={`w-14 h-8 rounded-full transition-colors duration-300 flex items-center px-1 ${
            isPatient ? "bg-green-500" : "bg-blue-500"
          }`}
        >
          <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
              isPatient ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </div>
      </label>

      {/* Patient Label */}
      <span
        className={`font-semibold transition-colors ${
          isPatient ? "text-green-600" : "text-gray-400"
        }`}
      >
        Patient
      </span>
    </div>
  );
}
