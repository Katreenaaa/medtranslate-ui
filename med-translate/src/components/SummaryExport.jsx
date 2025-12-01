export default function SummaryExport({ onCopy, onDownload, onNew }) {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mt-10 w-full">
      <button
        onClick={onCopy}
        className="w-full md:w-auto bg-white text-blue-600 border-2 border-blue-400 px-6 py-2 rounded-lg hover:bg-blue-100 transition"
      >
        Copy Summary
      </button>
      <button
        onClick={onDownload}
        className="w-full md:w-auto bg-white text-blue-600 border-2 border-blue-400 px-6 py-2 rounded-lg hover:bg-blue-100 transition"
      >
        Download PDF
      </button>
      <button
        onClick={onNew}
        className="w-full md:w-auto bg-linear-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-blue-500 hover:to-blue-700 transition"
      >
        Start New Session
      </button>
    </div>
  );
}
