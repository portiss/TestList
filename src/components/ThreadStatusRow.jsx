import { useState } from "react";

export default function ThreadStatusRow({ thread }) {
  const [status, setStatus] = useState(thread.status);

  return (
    <div className="flex justify-between items-center border-t border-gray-200 px-3 py-3 text-sm">
      <span>Thread ID: {thread.id}</span>
      <div className="flex rounded-lg border border-gray-200 overflow-hidden">
        {["FAILED", "PASSED"].map((option) => (
          <button
            key={option}
            className={`px-3 py-1.5 transition-colors cursor-pointer ${
              status === option
                ? option === "FAILED"
                  ? "bg-red-100 text-noma-red"
                  : "bg-green-100 text-green-600"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setStatus(option)}
          >
            {option === "FAILED" ? "Failed" : "Passed"}
          </button>
        ))}
      </div>
    </div>
  );
}
