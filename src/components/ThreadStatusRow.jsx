import { useState } from "react";

export default function ThreadStatusRow({ thread, onStatusChange }) {
  const [status, setStatus] = useState(thread.status);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    onStatusChange?.(thread.id, newStatus);
  };

  const statusOptions = [
    {
      value: "FAILED",
      label: "Failed",
      activeBg: "bg-red-100",
      activeText: "text-noma-red",
    },
    {
      value: "PASSED",
      label: "Passed",
      activeBg: "bg-green-100",
      activeText: "text-green-600",
    },
  ];

  const getButtonClasses = (option) => {
    const isActive = status === option.value;
    return `px-3 py-1.5 transition-colors cursor-pointer ${
      isActive
        ? `${option.activeBg} ${option.activeText}`
        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
    }`;
  };

  return (
    <div className="flex justify-between items-center border-t border-gray-200 px-3 py-3">
      <span>Thread ID: {thread.id}</span>
      <div className="flex rounded-lg border border-gray-200 overflow-hidden">
        {statusOptions.map((option) => (
          <button
            key={option.value}
            className={getButtonClasses(option)}
            onClick={() => handleStatusChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
