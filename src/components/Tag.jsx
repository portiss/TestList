export default function Tag({ children, variant = "default" }) {
  const getTagStyles = (variant) => {
    const styles = {
      critical: { bg: "bg-red-100", dot: "bg-red-600" },
      high: { bg: "bg-red-50", dot: "bg-red-400" },
      medium: { bg: "bg-orange-100", dot: "bg-orange-600" },
      low: { bg: "bg-yellow-100", dot: "bg-yellow-300" },
      default: { bg: "bg-gray-100", dot: "bg-gray-600" },
    };

    return styles[variant] || styles.default;
  };

  return (
    <span
      className={`inline-flex items-center gap-1 text-noma-black px-2 py-1 text-xs rounded-full ${
        getTagStyles(variant).bg
      }`}
    >
      <div
        className={`w-1.5 h-1.5 rounded-full ${getTagStyles(variant).dot}`}
      ></div>
      {children}
    </span>
  );
}
