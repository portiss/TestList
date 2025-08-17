import Select from "../UI/Select";
import { Button } from "@headlessui/react";
import { severityOptions, resultOptions } from "../constants/filterOptions";

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
