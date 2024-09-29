import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SectionActivity from "./components/SectionActivity";
import SectionGenerator from "./components/SectionGenerator";
import useFetchActivity from "./hooks/useFetchActivity";

function App() {
  const [filter, setFilter] = useState<string>("");
  const { activity, fetchActivity } = useFetchActivity(filter);

  const handleGenerate = () => {
    fetchActivity();
  };

  return (
    <>
      <Header />
      <main>
        <SectionGenerator
          handleGenerate={handleGenerate}
          filter={filter}
          setFilter={setFilter}
        />
        <hr />
        <SectionActivity activity={activity} />
      </main>
    </>
  );
}

export default App;
