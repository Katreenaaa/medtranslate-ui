// LanguageDropdown.jsx
export default function LanguageDropdown({ label, value, onChange, options }) {
  return (
    <div className="mb-4">
      <label className="block text-md mb-3 text-gray-700 font-semibold">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-blue-400"
      >
        <option value="">Select language</option>
        {options.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
