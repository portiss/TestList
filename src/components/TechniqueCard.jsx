import ThreadStatusRow from "./ThreadStatusRow";
import Tag from "../UI/Tag";
import { useState, useEffect } from "react";
import { normalizeText } from "../utils/textNormalization";
import { IoChevronDown } from "react-icons/io5";
import { STATUS_CONFIG } from "../constants/statusConfig";

export default function TechniqueCard({ test, expandAll, onToggle }) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(expandAll);
  }, [expandAll]);

  const handleToggle = () => {
    const newExpanded = !isExpanded;
    setIsExpanded(newExpanded);
    onToggle?.(newExpanded);
  };

  const getStatusConfig = (status) => {
    return STATUS_CONFIG[status] || STATUS_CONFIG.default;
  };

  const renderStatusIcon = (status) => {
    const config = getStatusConfig(status);
    if (!config.icon) return null;

    const IconComponent = config.icon;
    return <IconComponent className={`w-5 h-5 ${config.iconColor}`} />;
  };

  const renderHeader = () => (
    <div
      className={`flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200 border-l-4 ${
        getStatusConfig(test.status).borderColor
      }`}
      onClick={handleToggle}
    >
      <div className="flex-1 flex items-center gap-2">
        {renderStatusIcon(test.status)}
        <span>Technique:</span>
        <p className="font-semibold">
          {`${normalizeText(test.techniqueType)} - ${normalizeText(
            test.techniqueSubType
          )}`}
        </p>
        <span>|</span>
        <span>Impact:</span>
        <span className="font-semibold">
          {normalizeText(test.impact.subType)}
        </span>
      </div>

      <div className="flex items-center justify-center w-6 h-6">
        <IoChevronDown
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>
    </div>
  );

  const renderDetailSection = (title, content) => (
    <div>
      <p className="font-semibold">{title}:</p>
      <p className="mt-1">{content}</p>
    </div>
  );

  const renderExpandedContent = () => (
    <div className="p-4 space-y-4 text-[13px]">
      <div className="flex gap-1 items-center">
        <span className="font-semibold">Severity:</span>
        <Tag variant={test.severity.toLowerCase()}>
          {normalizeText(test.severity)}
        </Tag>
      </div>

      {renderDetailSection("Description", test.description)}
      {renderDetailSection("Potential Impact", test.impact.description)}
      {renderDetailSection("Mitigation", test.mitigation)}

      <div className="pt-4">
        {test.threads.map((thread) => (
          <ThreadStatusRow key={thread.id} thread={thread} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="rounded-lg shadow-xs mb-2 overflow-hidden">
      {renderHeader()}
      {isExpanded && renderExpandedContent()}
    </div>
  );
}
