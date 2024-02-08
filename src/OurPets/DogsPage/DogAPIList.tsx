import { useEffect, useState } from "react";
import DogsAPIImage from "./DogsAPIImage";
import Selector from "../Search/Selector";
import Search from "../Search";

export interface Dog {
  id: string;
  url: string;
  width: number;
  height: number;
  name: string;
  location: string;
}

export default function DogsApiList() {
  const dogsNamesList = ["Mars", "Rio", "Annie", "Lora"];
  const locationsList = ["Klaipėda", "Vilnius", "Palanga", "Kaunas"];

  const [dogs, setDogs] = useState<Dog[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById("sectionDog")!;
    if (
      section.scrollHeight - window.innerHeight <= window.scrollY &&
      !isLoading &&
      section.scrollHeight - window.innerHeight + 1000 >= window.scrollY &&
      !isLoading
    ) {
      setIsLoading(true);
      loadNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    //loadNextPage();
  }, [isLoading]);

  const loadNextPage = async () => {
    try {
      const response = await fetch(
        `https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&page=${currentPage}&limit=10`
      );
      const data = await response.json();

      const newDogs: Dog[] = data.map((dog: Dog) => ({
        ...dog,
        name: getRandomElement(dogsNamesList) || "",
        location: getRandomElement(locationsList) || "",
      }));

      setDogs((currentDogs) => [...currentDogs, ...newDogs]);
      setPage(currentPage + 1);
    } catch (error) {
      console.error("Error fetching dogs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getRandomElement = (arr: any[]) =>
    arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined;

  const handleCityChange = (selected: string) => {
    setSelectedCity(selected);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  /*Filtering cats by selecting cities in Selector*/
  const filteredDogs = dogs.filter((dog) => {
    if (selectedCity === "All cities" || selectedCity === "") {
      return true;
    } else {
      return dog.location === selectedCity;
    }
  });

  const searchedDogs = filteredDogs.filter(
    (cat) =>
      cat.location.toLowerCase().includes(searchQuery) ||
      cat.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div id="sectionDog" className="max-w-7xl flex flex-col mx-auto">
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

      <div className="mx-6 md:mb-12 w-full hidden md:block">
        <Search value={searchQuery} onChange={handleSearchChange} />
      </div>

      <div className="max-w-7xl flex flex-col mx-auto">
        <div className="md:mx-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {searchedDogs.map((dog, index) => (
            <DogsAPIImage
              key={index}
              name={dog.name}
              dog={dog}
              location={dog.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
