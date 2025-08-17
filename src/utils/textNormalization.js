/**
 * Normalizes text to proper case
 * @param {string} text - The text to normalize
 * @returns {string} - Normalized text with proper capitalization
 */
export const normalizeText = (text) => {
  if (!text) return "";
  // Replace underscores and hyphens with spaces
  const cleaned = text.replace(/[_-]/g, " ").toLowerCase().trim();
  // Capitalize first word
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
};
