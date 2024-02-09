export default function WorkerComponent(props: {
  image: string;
  name: string;
  job: string;
}) {
  return (
    <section className="mx-auto">
      <div className="my-4 mt-10 space-y-3">
        <div className="items-start justify-center flex flex-col">
          <img
            className="w-[200px] h-[24vh] object-cover rounded-md"
            src={props.image}
            alt=""
          />
        </div>

        <div className="text-left w-fit object-cover h-auto">
          <h4 className="font-heading font-medium mb-1">{props.name}</h4>
          <p className="uppercase font-text text-xs text-lighterGray">
            {props.job}
          </p>
        </div>
      </div>
    </section>
  );
}
