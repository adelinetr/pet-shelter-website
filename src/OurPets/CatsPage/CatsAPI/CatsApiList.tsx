import CatsAPIImage from "./CatsAPIImage";
import { useEffect, useState } from "react";

export interface Cat {
  id: string;
  url: string;
  name: string; // Make sure 'name' is optional in the Cat type
  location: string; // Make sure 'location' is optional in the Cat type
}

export default function CatsApiList() {
  const catsNamesList = ['Luna', 'Rocky', 'Milo', 'Biscuit'];
  const locationsList = [
    'Klaipeda, Lithuania',
    'Vilnius, Lithuania',
    'Palanga, Lithuania',
    'Kaunas, Lithuania'
  ];

  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        for (let i = 0; i < 10; i++) {
          const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=8');
          const data = await response.json();

          const filteredCats: Cat[] = data
            .filter((cat: Cat) => cat.url.toLowerCase().endsWith('.jpg'))
            .map((cat: Cat) => ({
              ...cat,
              name: getRandomElement(catsNamesList) || '',
              location: getRandomElement(locationsList) || '',
            }));

          setCats(prevCats => [...prevCats, ...filteredCats]);
        }
      } catch (error) {
        console.error('Error fetching cats:', error);
      }
    };

    fetchCats();
  }, []);

  const getRandomElement = (arr: any[]) => arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined;

  return (
    <div className="max-w-7xl flex flex-col mx-auto">
      <div className="mx-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cats.filter(cat => cat.location === 'Vilnius, Lithuania').map((cat, index) => (
          <CatsAPIImage
            key={index}
            name={cat.name}
            location={cat.location}
            cat={cat}
          />
        ))}
      </div>
    </div>
  );
}
