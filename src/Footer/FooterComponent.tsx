import { Link, useNavigate } from 'react-router-dom'

export default function FooterComponent(props: {
  heading: string;
  page1: string;
  page2: string;
  page3: string;
  link1: string;
  link2: string;
  link3: string;
}) {

    const navigate = useNavigate();
  
    const handleClick = (link: string) => {
      navigate(link);
      window.scrollTo(0, 0); // Scrolls to the top of the page
    };

  return (
    <section>
      <div className="text-center flex flex-col">
        <h4 className="text-mainOrange text-xl lg:text-2xl mb-2 lg:text-left">
          {props.heading}
        </h4>
        <ul className="text-lighterGray text-sm lg:text-left space-y-1">
          <li>
            <Link to={props.link1} onClick={() => handleClick(props.link1)}  className="hover:text-white duration-200">
              {props.page1}
            </Link>
          </li>
          <li>
            <Link to={props.link2} onClick={() => handleClick(props.link1)} className="hover:text-white duration-200">
              {props.page2}
            </Link>
          </li>
          <li>
            <Link to={props.link3} onClick={() => handleClick(props.link1)}  className="hover:text-white duration-200">
              {props.page3}
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
