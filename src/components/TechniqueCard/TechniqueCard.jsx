import { useState, useEffect, useCallback, useMemo, memo } from "react";
import TechniqueCardHeader from "./TechniqueCardHeader";
import TechniqueCardContent from "./TechniqueCardContent";

const calculateTestStatus = (threadStatusesObj, originalStatus) => {
  const statuses = Object.values(threadStatusesObj);
  if (statuses.length === 0) {
    return originalStatus;
  }

  const anyFailed = statuses.some((status) => status === "FAILED");
  const allPassed = statuses.every((status) => status === "PASSED");

  return anyFailed ? "FAILED" : allPassed ? "PASSED" : originalStatus;
};

function TechniqueCard({ test, expandAll, onToggle }) {
  const initialThreadStatuses = useMemo(
    () =>
      test.threads.reduce((acc, thread) => {
        acc[thread.id] = thread.status;
        return acc;
      }, {}),
    [test.threads]
  );

  const [isExpanded, setIsExpanded] = useState(false);
  const [threadStatuses, setThreadStatuses] = useState(initialThreadStatuses);

  const testStatus = useMemo(
    () => calculateTestStatus(threadStatuses, test.status),
    [threadStatuses, test.status]
  );

  useEffect(() => {
    setIsExpanded(expandAll);
  }, [expandAll]);

  useEffect(() => {
    setThreadStatuses(initialThreadStatuses);
  }, [initialThreadStatuses]);

  const handleThreadStatusChange = useCallback((threadId, newStatus) => {
    setThreadStatuses((prev) => ({
      ...prev,
      [threadId]: newStatus,
    }));
  }, []);

  const handleToggle = useCallback(() => {
    const newExpanded = !isExpanded;
    setIsExpanded(newExpanded);
    onToggle?.(newExpanded);
  }, [isExpanded, onToggle]);

  return (
    <div className="rounded-lg shadow-xs mb-2 overflow-hidden">
      <TechniqueCardHeader
        test={test}
        testStatus={testStatus}
        isExpanded={isExpanded}
        onToggle={handleToggle}
      />
      {isExpanded && (
        <TechniqueCardContent
          test={test}
          onThreadStatusChange={handleThreadStatusChange}
        />
      )}
    </div>
  );
}

export default memo(TechniqueCard);
