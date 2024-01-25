import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";

interface Dog {
  id: string;
  url: string;
}

export default function DogsAPIImage(props: { name: string; location: string }) {
  const [dog, setDog] = useState<Dog | null>(null);

  useEffect(() => {
    const fetchDog = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();

        if (data && data.message) {
          setDog({
            id: data.message.split('/').pop() || '',
            url: data.message,
          });
        } else {
          console.error('Invalid API response:', data);
        }
      } catch (error) {
        console.error('Error fetching dogs:', error);
      }
    };
    fetchDog();
  }, []);

  return (
    <div className="flex flex-col justify-start align-baseline">
      <div className="mx-6">
        {dog && (
          <div className="my-6">
            <div className="w-[220px] overflow-hidden h-[280px]">
                <img
                src={dog.url}
                className="cursor-pointer object-cover hover:scale-110 hover:brightness-75  duration-300"
                style={{ width: '210px', height: '280px', objectFit: 'cover' }}
                alt={`Dog ${dog.id}`}
                />
            </div>
            <p className="font-medium mt-2 text-xl">{props.name}</p>

            <div className="flex flex-row space-x-1 items-center">
              <CiLocationOn className="w-5 h-auto" />
              <p className=" text-gray">{props.location}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}