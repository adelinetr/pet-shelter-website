import { CiLocationOn } from "react-icons/ci";
import { Cat } from "./CatsApiList";

export default function CatAPIImage(props: {
  name: string;
  location: string;
  cat: Cat;
}) {
  return (
    <div className="flex flex-col justify-start sm:mx-auto align-baseline">
      <div>
        <div key={props.cat.id} className="my-6 mx-4">
          <div className="w-[150px] h-[190px] object-cover rounded-lg shadow-lg overflow-hidden">
            <img
              src={props.cat.url}
              className="w-[150px] h-[190px] md:w-[190px] md:h-[240px] cursor-pointer object-cover hover:scale-110 hover:brightness-75 duration-300"
              alt={`Cat ${props.cat.id}`}
            />
          </div>
          <p className="font-medium text-xl mt-3">{props.name}</p>

          <div className="flex flex-row space-x-1 items-center">
            <CiLocationOn className="w-5 h-auto" />
            <p className="text-gray">{props.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
