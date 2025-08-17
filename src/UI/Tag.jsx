export default function Tag({ children, variant = "default" }) {
  const tagVariants = {
    critical: { bg: "bg-red-100", dot: "bg-red-600" },
    high: { bg: "bg-red-50", dot: "bg-red-400" },
    medium: { bg: "bg-orange-100", dot: "bg-orange-600" },
    low: { bg: "bg-yellow-100", dot: "bg-yellow-300" },
    default: { bg: "bg-gray-100", dot: "bg-gray-600" },
  };

  const { bg, dot } = tagVariants[variant] || tagVariants.default;

  return (
    <span
      className={`inline-flex items-center gap-1 text-noma-black px-2 py-1 text-xs rounded-full ${bg}`}
    >
      <div className={`w-1.5 h-1.5 rounded-full ${dot}`} />
      {children}
    </span>
  );
}
