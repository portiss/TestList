import HeaderPanel from "../components/HeaderPanel";
import FiltersBar from "../components/FiltersBar";
import TechniqueList from "../components/TechniqueList";
import { useState } from "react";
import { promptInjectionData, jailbreakData } from "../data/resultsData";

export default function RedTeamResultsPage() {
  const [activeTab, setActiveTab] = useState("PROMPT_INJECTION");
  const [filters, setFilters] = useState({ severity: null, result: null });

  const data =
    activeTab === "PROMPT_INJECTION" ? promptInjectionData : jailbreakData;

  return (
    <div className="m-8 max-w-[calc(100vw-8rem)]">
      <HeaderPanel
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        data={data}
      />
      <FiltersBar filters={filters} setFilters={setFilters} />
      <TechniqueList results={data.results} filters={filters} />
    </div>
  );
}
