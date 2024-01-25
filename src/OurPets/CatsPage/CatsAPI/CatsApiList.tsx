import Selector from "../Search/Selector";
import CatsAPIImage from "./CatsAPIImage";
import { useEffect, useState } from "react";

export interface Cat {
  id: string;
  url: string;
  name: string;
  location: string;
}

export default function CatsApiList() {
  const catsNamesList = ["Luna", "Rocky", "Milo", "Biscuit"];
  const locationsList = ["Klaipėda", "Vilnius", "Palanga", "Kaunas"];

  const [cats, setCats] = useState<Cat[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>("");

  useEffect(() => {
    const fetchCats = async () => {
      try {
        for (let i = 0; i < 10; i++) {
          const response = await fetch(
            `https://api.thecatapi.com/v1/images/search?limit=8&page=${i}`
          );
          const data = await response.json();

          const cats: Cat[] = data
            .filter((cat: Cat) => cat.url.toLowerCase().endsWith(".jpg"))
            .map((cat: Cat) => ({
              ...cat,
              name: getRandomElement(catsNamesList) || "",
              location: getRandomElement(locationsList) || "",
            }));

          setCats((prevCats) => [...prevCats, ...cats]);
        }
      } catch (error) {
        console.error("Error fetching cats:", error);
      }
    };

    fetchCats();
  }, []);

  const getRandomElement = (arr: any[]) =>
    arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined;

  const handleCityChange = (selected: string) => {
    setSelectedCity(selected);
  };

  const filteredCats = cats.filter((cat) => {
    if (selectedCity === "All cities" || selectedCity === "") {
      return true;
    } else {
      return cat.location === selectedCity;
    }
  });

  return (
    <section className="flex flex-col justify-center items-center ">
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
          {filteredCats.map((cat, index) => (
            <CatsAPIImage
              key={index}
              name={cat.name}
              location={cat.location}
              cat={cat}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
