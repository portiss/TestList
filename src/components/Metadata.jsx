export default function Metadata({ data }) {
  const formatDate = (dateString) => {
    return new Date(dateString)
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, ".");
  };

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
