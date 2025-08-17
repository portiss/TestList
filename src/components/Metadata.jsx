import { formatDate } from "../utils/dateUtils";

export default function Metadata({ createdAt, id, assetName }) {
  const metadataItems = [
    { key: "Date", value: formatDate(createdAt) },
    { key: "Test Result ID", value: id },
    { key: "Model Name", value: assetName },
  ];

  return (
    <div className="flex gap-4 text-sm px-16 py-4">
      {metadataItems.map(({ key, value }) => (
        <p key={key}>
          <strong>{key}:</strong> {value}
        </p>
      ))}
    </div>
  );
}
