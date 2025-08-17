import Select from "../UI/Select";
import { Button } from "@headlessui/react";

const severityOptions = [
  { value: null, label: "Severity" },
  { value: "CRITICAL", label: "Critical" },
  { value: "HIGH", label: "High" },
  { value: "MEDIUM", label: "Medium" },
  { value: "LOW", label: "Low" },
];

const resultOptions = [
  { value: null, label: "Result" },
  { value: "PASSED", label: "Passed" },
  { value: "FAILED", label: "Failed" },
];

export default function FiltersBar({ filters, setFilters }) {
  return (
    <div className="flex gap-4 items-center px-16 mt-6 mb-4">
      <Select
        options={severityOptions}
        value={filters.severity}
        onChange={(option) =>
          setFilters((f) => ({ ...f, severity: option.value }))
        }
        className="w-32"
      />
      <Select
        options={resultOptions}
        value={filters.result}
        onChange={(option) =>
          setFilters((f) => ({ ...f, result: option.value }))
        }
        className="w-32"
      />
      <Button
        className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-700 text-sm rounded-md transition-colors"
        onClick={() => setFilters({ severity: null, result: null })}
      >
        Clear Filters
      </Button>
    </div>
  );
}
