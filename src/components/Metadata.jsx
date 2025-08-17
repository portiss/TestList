export default function Metadata({ data }) {
  return (
    <div className="flex gap-4 text-sm px-16 py-4">
      {keyVal(
        "Date",
        new Date(data.createdAt)
          .toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })
          .replace(/\//g, ".")
      )}
      {keyVal("Test Result ID", data.id)}
      {keyVal("Model Name", data.asset.name)}
    </div>
  );
}

const keyVal = (key, value) => (
  <p>
    <strong>{key}:</strong> {value}
  </p>
);
