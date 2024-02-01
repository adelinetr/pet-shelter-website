export default function Button(props: { name: string }) {
  return (
    <div>
      <button
        className="group flex justify-center items-center gap-4 font-heading font-medium 
            text-lg border border-white hover:bg-white hover:text-black duration-300 h-16 rounded-md w-full md:w-auto md:h-fit md:py-4 
            md:px-10"
      >
        {props.name}
        <svg
          width="39"
          height="15"
          viewBox="0 0 39 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="group-hover:fill-black"
            d="M38.7071 8.20711C39.0976 7.81658 39.0976 7.18342 38.7071 6.79289L32.3431 0.428932C31.9526 0.0384079 31.3195 0.0384079 30.9289 0.428932C30.5384 0.819456 30.5384 1.45262 30.9289 1.84315L36.5858 7.5L30.9289 13.1569C30.5384 13.5474 30.5384 14.1805 30.9289 14.5711C31.3195 14.9616 31.9526 14.9616 32.3431 14.5711L38.7071 8.20711ZM0 8.5H38V6.5H0V8.5Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
