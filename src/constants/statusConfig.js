import {
  IoCloseCircleOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";

export const STATUS_CONFIG = {
  FAILED: {
    borderColor: "border-noma-red",
    icon: IoCloseCircleOutline,
    iconColor: "text-noma-red",
  },
  PASSED: {
    borderColor: "border-noma-green",
    icon: IoCheckmarkCircleOutline,
    iconColor: "text-noma-green",
  },
  default: {
    borderColor: "border-noma-light-gray",
    icon: null,
    iconColor: "",
  },
};
