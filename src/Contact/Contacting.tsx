export default function Contacting() {
  return (
    <section className="flex-col w-fit h-fit flex mx-auto items-center lg:max-w-6xl justify-center mt-20">
      <div className="bg-lightGray w-[90vw] lg:w-[80vw] xl:w-[70vw] lg:max-w-6xl rounded-lg h-fit mb-6 pb-20 ">
        <div className="mt-12 w-fit mx-auto flex flex-col justify-center items-center">
          <h3 className="text-center mx-auto mb-6">Contact us</h3>
          <p className="text-sm mx-6 text-center w-fit text-gray font-text leading-6 md:w-1/2">
            Whether you're seeking information about our adoption process,
            volunteering opportunities, or have general inquiries about pet
            care, don't hesitate to contact us.{" "}
          </p>
        </div>

        <div className="mx-10 mt-20">
          <div className="flex flex-col items-center mx-auto space-y-10 mb-14 w-fit">
            <input
              className="input"
              type="text"
              placeholder="Name, Surname"
            />
            <input
              className="input"
              type="text"
              placeholder="Your Email"
            />
            <input
              className="input"
              type="text"
              placeholder="Phone Number"
            />
            <input
              className=" border-lighterGray text-clip input rounded-lg bg-white border px-4 pb-20 pt-4"
              type="text"
              placeholder="Your question..."
            />
          </div>

          <div className="button-hover relative flex justify-center items-center">
            <button className="basic-button float-none absolute md:px-20 bg-mainOrange text-white hover:bg-[#C25E25] duration-300 border-none md:float-left">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
