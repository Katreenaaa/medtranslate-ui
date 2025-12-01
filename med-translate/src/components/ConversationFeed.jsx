export default function ConversationFeed({ conversation }) {
  const messages = conversation || [];

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-inner w-full max-h-[450px] overflow-y-auto border border-gray-200">
      {messages.length === 0 ? (
        <p className="text-gray-400 text-center italic">No messages yet...</p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`${msg.speaker === "doctor"}`}>
              <div
                className={`max-w-full md:max-w-full p-4 rounded-2xl shadow-sm ${
                  msg.speaker === "doctor"
                    ? "bg-blue-100 text-blue-900 rounded-tl-none"
                    : "bg-green-100 text-green-900 rounded-tr-none"
                }`}
              >
                <p className="font-semibold text-sm mb-1">
                  {msg.speaker === "doctor" ? " Doctor" : " Patient"}
                </p>
                <p className="text-gray-800">{msg.original}</p>
                <p className="text-gray-500 italic text-sm mt-1">
                  {msg.translated}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
