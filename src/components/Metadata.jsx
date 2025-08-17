import { formatDate } from "../utils/dateUtils";

export default function Metadata({ data }) {
  const metadataItems = [
    { key: "Date", value: formatDate(data.createdAt) },
    { key: "Test Result ID", value: data.id },
    { key: "Model Name", value: data.asset.name },
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
