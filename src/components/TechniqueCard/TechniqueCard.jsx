import TechniqueCardHeader from "./TechniqueCardHeader";
import TechniqueCardContent from "./TechniqueCardContent";
import { useState, useEffect } from "react";

// Function to calculate test status from thread statuses
const calculateTestStatus = (threadStatusesObj, originalStatus) => {
  const statuses = Object.values(threadStatusesObj);

  if (statuses.length === 0) {
    return originalStatus; // Fallback to original status
  }

  const anyFailed = statuses.some((status) => status === "FAILED");
  const allPassed = statuses.every((status) => status === "PASSED");

  if (anyFailed) {
    return "FAILED";
  } else if (allPassed) {
    return "PASSED";
  } else {
    return originalStatus; // Keep original status for mixed/unknown states
  }
};

export default function TechniqueCard({ test, expandAll, onToggle }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [threadStatuses, setThreadStatuses] = useState(
    test.threads.reduce((acc, thread) => {
      acc[thread.id] = thread.status;
      return acc;
    }, {})
  );
  const [testStatus, setTestStatus] = useState(test.status);

  useEffect(() => {
    setIsExpanded(expandAll);
  }, [expandAll]);

  // Reset thread statuses (for tab switching)
  useEffect(() => {
    const newThreadStatuses = test.threads.reduce((acc, thread) => {
      acc[thread.id] = thread.status;
      return acc;
    }, {});
    setThreadStatuses(newThreadStatuses);
    setTestStatus(test.status);
  }, [test]);

  // Calculate test status based on thread statuses
  useEffect(() => {
    const newStatus = calculateTestStatus(threadStatuses, test.status);
    setTestStatus(newStatus);
  }, [threadStatuses, test.status]);

  const handleThreadStatusChange = (threadId, newStatus) => {
    setThreadStatuses((prev) => ({
      ...prev,
      [threadId]: newStatus,
    }));
  };

  const handleToggle = () => {
    const newExpanded = !isExpanded;
    setIsExpanded(newExpanded);
    onToggle?.(newExpanded);
  };

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
