import { tabs } from "../constants/tabConfig";

export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex gap-6 p-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative pb-3 min-w-24 transition-all ${
            activeTab === tab.id
              ? "text-noma-blue after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-noma-blue after:rounded-full"
              : "text-noma-gray"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
