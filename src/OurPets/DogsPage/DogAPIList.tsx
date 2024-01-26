import { useState } from "react";
import DogsAPIImage from "./DogsAPIImage";
import Selector from "../CatsPage/Search/Selector";

export default function DogsApiList() {
  const dogsNamesList = ["Mars", "Rio", "Annie", "Lora"];

  const locationsList = ["Klaipėda", "Vilnius", "Palanga", "Kaunas"];

  const getRandomElement = (arr: any[]) =>
    arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined;

  function getRandomDog() {
    const name = getRandomElement(dogsNamesList);
    const location = getRandomElement(locationsList);

    return { name, location };
  }

  const [selectedCity, setSelectedCity] = useState<string>("");

  const handleCityChange = (selected: string) => {
    setSelectedCity(selected);
  };

  const dogImages = (() => {
    const images = [];
    for (let index = 0; index < 90; index++) {
      const dog = getRandomDog();
      if (
        selectedCity === "" ||
        selectedCity === "All cities" ||
        dog.location === selectedCity
      ) {
        images.push(
          <DogsAPIImage key={index} name={dog.name} location={dog.location} />
        );
      }
    }
    return images;
  })();

  return (
    <div className="max-w-7xl flex flex-col mx-auto">
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row h-max mt-20 mb-20 justify-center items-center">
        <Selector
          label="city"
          option="All cities"
          option2="Vilnius"
          option3="Kaunas"
          option4="Klaipėda"
          option5="Palanga"
          name="City"
          value={selectedCity}
          onSelect={handleCityChange}
        />
      </div>
      <div className="max-w-7xl flex flex-col mx-auto">
        <div className="md:mx-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {dogImages}
        </div>
      </div>
    </div>
  );
}
