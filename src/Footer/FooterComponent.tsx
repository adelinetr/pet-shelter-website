export default function FooterComponent(props: {
  heading: string;
  page1: string;
  page2: string;
  page3: string;
}) {
  return (
    <section>
      <div className="text-center flex flex-col">
        <h4 className="text-mainOrange text-xl lg:text-2xl mb-3 lg:text-left">
          {props.heading}
        </h4>
        <ul className="text-lighterGray text-base lg:text-left space-y-1">
          <li>
            <a className="hover:text-white duration-200" href="./">
              {props.page1}
            </a>
          </li>
          <li>
            <a className="hover:text-white duration-200" href="./">
              {props.page2}
            </a>
          </li>
          <li>
            <a className="hover:text-white duration-200" href="./">
              {props.page3}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
