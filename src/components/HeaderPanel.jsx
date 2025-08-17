import Tabs from "../UI/Tabs";
import Metadata from "./Metadata";

export default function HeaderPanel({ activeTab, setActiveTab, data }) {
  return (
    <div className="mb-8">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Metadata data={data} />
    </div>
  );
}
