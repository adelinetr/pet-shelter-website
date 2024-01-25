import DogsAPIImage from "./DogsAPIImage";

export default function DogsApiList() {
  const dogsNamesList = ["Mars", "Rio", "Annie", "Lora"];

  const locationsList = [
    "Klaipeda, Lithuania",
    "Vilnius , Lithuania",
    "Palanga, Lithuania",
    "Kaunas, Lithuania",
  ];

  const getRandomElement = (arr: any[]) =>
    arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined;

  function getRandomDog() {
    const name = getRandomElement(dogsNamesList);
    const location = getRandomElement(locationsList);

    return { name, location };
  }

  return (
    <div className="max-w-7xl flex flex-col mx-auto">
      <div className="mx-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {(() => {
          const dogImages = [];
          for (let index = 0; index < 90; index++) {
            const dog = getRandomDog();

            dogImages.push(
              <DogsAPIImage
                key={index}
                name={dog.name}
                location={dog.location}
              />
            );
          }
          return dogImages;
        })()}
      </div>
    </div>
  );
}
