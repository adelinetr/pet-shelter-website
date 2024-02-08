import Search from "../../Search";
import Selector from "../../Search/Selector";
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
  const [searchWord, setSearchWord] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setPage] = useState<number>(0);

  /*Load images on scroll */
  const handleScroll = () => {
    const section = document.getElementById("catSection")!;
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
  }, [isLoading]);

  /*Fetch images and add pages to the images*/
  const loadNextPage = async () => {
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=10&page=${currentPage}`
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
      setPage(currentPage + 1);
    } catch (error) {
      console.error("Error fetching cats:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getRandomElement = (arr: any[]) =>
    arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined;

  /*Selector's city change*/
  const handleCityChange = (selected: string) => {
    setSelectedCity(selected);
  };

  /*Filtering cats by selecting cities in Selector*/
  const filteredCats = cats.filter((cat) => {
    if (selectedCity === "All cities" || selectedCity === "") {
      return true;
    } else {
      return cat.location === selectedCity;
    }
  });

  /*Searching by a keyword in the Search Input*/
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value.toLowerCase());
  };

  /*Filter cats by a keyword in the Search Input*/
  const searchedCats = filteredCats.filter(
    (cat) =>
      cat.location.toLowerCase().includes(searchWord) ||
      cat.name.toLowerCase().includes(searchWord)
  );

  return (
    <section
      id="catSection"
      className="flex flex-row justify-center items-start"
    >
      <div className="w-full">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row h-max mt-20 md:mt-2 mb-20 justify-center items-center">
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
          <Search value={searchWord} onChange={handleSearchChange} />
        </div>

        <div className="max-w-7xl flex flex-col mx-auto">
          <div className="md:mx-6 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12">
            {searchedCats.map((cat, index) => (
              <CatsAPIImage
                key={index}
                name={cat.name}
                location={cat.location}
                cat={cat}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
