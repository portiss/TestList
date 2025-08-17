import { memo } from "react";
import ThreadStatusRow from "../ThreadStatusRow";
import Tag from "../../UI/Tag";
import { normalizeText } from "../../utils/textNormalization";

function TechniqueCardContent({ test, onThreadStatusChange }) {
  const renderDetailSection = (title, content) => (
    <div>
      <p className="font-semibold">{title}:</p>
      <p className="mt-1">{content}</p>
    </div>
  );

  return (
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
          <ThreadStatusRow
            key={thread.id}
            thread={thread}
            onStatusChange={onThreadStatusChange}
          />
        ))}
      </div>
    </div>
  );
}

export default memo(TechniqueCardContent);
