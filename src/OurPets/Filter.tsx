import Checkbox from "./Checkbox";
import { useState } from "react";

export default function FilterPoints() {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  const handleCheckboxClick = (value: string) => {
    setSelectedCheckboxes((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  return (
    <div className="flex flex-col space-y-4">
      <Checkbox place="Vilnius" onClick={() => handleCheckboxClick("Vilnius")} />
      <Checkbox place="Kaunas" onClick={() => handleCheckboxClick("Kaunas")} />
      <Checkbox place="Klaipėda" onClick={() => handleCheckboxClick("Klaipėda")} />
      <Checkbox place="Palanga" onClick={() => handleCheckboxClick("Palanga")} />
    </div>
  );
}
