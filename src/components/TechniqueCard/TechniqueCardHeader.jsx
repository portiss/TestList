import { memo } from "react";
import { normalizeText } from "../../utils/textNormalization";
import { IoChevronDown } from "react-icons/io5";
import { STATUS_CONFIG } from "../../constants/statusConfig";

function TechniqueCardHeader({ test, testStatus, isExpanded, onToggle }) {
  const getStatusConfig = (status) => {
    return STATUS_CONFIG[status] || STATUS_CONFIG.default;
  };

  const renderStatusIcon = (status) => {
    const config = getStatusConfig(status);
    if (!config.icon) return null;

    const IconComponent = config.icon;
    return <IconComponent className={`w-5 h-5 ${config.iconColor}`} />;
  };

  return (
    <div
      className={`flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200 border-l-4 ${
        getStatusConfig(testStatus).borderColor
      }`}
      onClick={onToggle}
    >
      <div className="flex-1 flex items-center gap-2">
        {renderStatusIcon(testStatus)}
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
}

export default memo(TechniqueCardHeader);
