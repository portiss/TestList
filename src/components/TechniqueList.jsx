import { useState, useEffect, useMemo, useCallback } from "react";
import TechniqueCard from "./TechniqueCard/TechniqueCard";

export default function TechniqueList({ results, filters }) {
  const [expandAll, setExpandAll] = useState(false);
  const [expandedCount, setExpandedCount] = useState(0);

  const filtered = useMemo(() => {
    return results.filter(
      (test) =>
        (!filters.severity || test.severity === filters.severity) &&
        (!filters.result || test.status === filters.result)
    );
  }, [results, filters]);

  useEffect(() => {
    if (expandedCount === filtered.length && filtered.length > 0) {
      setExpandAll(true);
    } else if (expandedCount === 0) {
      setExpandAll(false);
    }
  }, [expandedCount, filtered.length]);

  const handleExpandAll = useCallback(() => {
    const newExpandAll = !expandAll;
    setExpandAll(newExpandAll);
    setExpandedCount(newExpandAll ? filtered.length : 0);
  }, [expandAll, filtered.length]);

  const handleCardToggle = useCallback((isExpanded) => {
    setExpandedCount((prev) => prev + (isExpanded ? 1 : -1));
  }, []);

  return (
    <div className="px-16">
      <div className="flex items-center justify-between py-4 pr-1">
        <p className="text-noma-black">Results</p>
        <button onClick={handleExpandAll} className="text-noma-blue">
          {expandAll ? "Collapse All" : "Expand All"}
        </button>
      </div>
      {filtered.map((test, idx) => (
        <TechniqueCard
          key={`${test.techniqueType}-${test.techniqueSubType}-${idx}`}
          test={test}
          expandAll={expandAll}
          onToggle={handleCardToggle}
        />
      ))}
    </div>
  );
}
