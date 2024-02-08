import { ChangeEvent } from "react";

export default function Search(props: {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex justify-center mr-9 items-center">
      <input
        value={props.value}
        onChange={props.onChange}
        type="search"
        className="w-[60vw] focus:outline-none font-heading py-2 border-b border-lighterGray"
        placeholder="Enter the name or the city"
      />
      <button>
        <svg
          width="35"
          height="35"
          viewBox="0 0 30 30"
          fill="none"
          className="hover:bg-[#EDEDED] rounded-full transition-all duration-200 p-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="13.75"
            cy="13.75"
            r="8.75"
            stroke="#33363F"
            stroke-width="2"
          />
          <path
            d="M25 25L21.25 21.25"
            stroke="#33363F"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
