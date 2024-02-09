import { CiLocationOn } from "react-icons/ci";
import { Dog } from "./DogAPIList";


export default function DogsAPIImage(props: {
  name: string;
  location: string;
  dog: Dog;
}) {

  return (
    <div className="flex flex-col justify-start sm:mx-auto align-baseline">
      <div>
          <div key={props.dog.id} className="my-6 mx-4">
            <div className="w-[150px] h-[190px] object-cover rounded-lg shadow-lg overflow-hidden">
              <img
                src={props.dog.url}
                alt={`Dog ${props.dog.id}`}
                className="w-[150px] h-[190px] md:w-[190px] md:h-[240px] cursor-pointer object-cover hover:scale-110 hover:brightness-75 duration-300" />
            </div>
            <p className="font-medium mt-3 text-xl">{props.name}</p>

            <div className="flex flex-row space-x-1 items-center">
              <CiLocationOn className="w-5 h-auto" />
              <p className=" text-gray">{props.location}</p>
            </div>
          </div>
      </div>
    </div>
  );
}
