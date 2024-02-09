import { Link, useNavigate } from "react-router-dom";

export default function ServicesComponent(props: {
  image: string;
  title: string;
  description: string;
  border: string;
  titleColor: string;
  groupClass: string;
  link: string;
}) {
  const cardClass =
    "group rounded-lg duration-150 flex flex-row ease-in-out mx-4";
  const titleClass = "text-xl font-semibold mb-2 md:text-xl";
  const divClass =
    "lg:w-[28vw] h-[20vh] px-5 flex flex-row justify-center items-center lg:h-40";
  const navigate = useNavigate();

  const handleClick = (link: string) => {
    navigate(link);
    window.scrollTo(0, 0);
  };

  return (
    <section className="max-w-lg w-full h-fit">
      <Link to={props.link} onClick={() => handleClick(props.link)}>
        <div className={`${props.border} ${cardClass}`}>
          <div className={`${divClass} ${props.groupClass}`}>
            <div>
              <img
                className="mb-6 mt-8 lg:w-32 lg:h-20 lg:mx-1"
                src={props.image}
                alt=""
              />
            </div>

            <div className="text-left mx-6 flex lg:h-28 flex-col items-baseline lg:w-60">
              <h4 className={`${props.titleColor} ${titleClass}`}>
                {props.title}
              </h4>
              <p className="w-fit text-gray text-sm group-hover:text-white text-left">
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
