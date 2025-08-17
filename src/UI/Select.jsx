import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/20/solid";

export default function Select({ options, value, onChange, className = "" }) {
  const selectedOption =
    options.find((opt) => opt.value === value) || options[0];

  return (
    <Listbox value={selectedOption} onChange={onChange}>
      <div className="relative">
        <ListboxButton
          className={`relative cursor-pointer rounded-md py-2 pl-3 pr-10 text-left border border-gray-200 ${className}`}
        >
          <span className="block truncate">{selectedOption.label}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon className="h-4 w-4" />
          </span>
        </ListboxButton>
        <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg border border-gray-200 focus:outline-none">
          {options.map((option, index) => (
            <ListboxOption
              key={index}
              className={({ focus }) =>
                `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                  focus ? "bg-gray-50" : ""
                }`
              }
              value={option}
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? "font-medium" : "font-normal"
                    }`}
                  >
                    {option.label}
                  </span>
                  {selected && (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                  )}
                </>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
