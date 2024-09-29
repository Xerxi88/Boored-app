import { useState } from "react";
import { FiltersProps } from "../types.ts";

const Filters = ({ filter, setFilter }: FiltersProps) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const categories: { [key: string]: string } = {
    education: "Educació",
    social: "Social",
    charity: "Caritat",
    cooking: "Cuinar",
    relaxation: "Relaxació",
    busywork: "Treball intens",
  };

  const handleButtonClick = (buttonName: string) => {
    const newFilter = activeButton === buttonName ? "" : buttonName;
    setActiveButton(newFilter);
  };

  return (
    <div className="filtres">
      {Object.entries(categories).map(([key, value]) => (
        <button
          key={key}
          className={activeButton === key ? "active" : ""}
          onClick={() => {
            handleButtonClick(key);
            if (filter === key) {
              setFilter("");
            } else {
              setFilter(key);
            }
          }}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default Filters;
