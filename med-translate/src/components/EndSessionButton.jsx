export default function EndSessionButton({ onClick }) {
  return (
    <div className="w-full md:max-w-3xl">
      {" "}
      {/* Match the conversation container max-width */}
      <button
        onClick={onClick}
        className="
          w-full
          bg-red-100
          hover:bg-red-200 
          text-red-800 
          font-semibold
          border border-red-200
          px-6 py-3 
          rounded-lg 
          shadow-md 
          mt-6 
          transition-colors 
          duration-300
        "
      >
        End Session
      </button>
    </div>
  );
}
