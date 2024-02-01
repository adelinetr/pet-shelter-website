export default function Search() {
  return (
    <section className="mt-20 h-screen">
      <h3 className="text-center text-3xl">Search</h3>

      <div className="flex flex-col justify-center items-center lg:flex-row">
        <div className="mx-8 mt-2 lg:mt-12">
          <h4 className="mb-2 mt-10 font-medium text-gray font-heading md:mt-0">
            Filter by place :
          </h4>
          <select
            name="byPlace"
            placeholder="By Place"
            className="w-72 h-9 border border-lighterGray text-gray focus:outline-none rounded-sm"
            id="place"
          >
            <option value="All">All</option>
            <option value="Vilnius">Vilnius</option>
            <option value="Kaunas">Kaunas</option>
            <option value="Palanga">Palanga</option>
            <option value="Klaipėda">Klaipėda</option>
          </select>
        </div>

        <div className="flex flex-row justify-center items-center mx-8 mt-8 lg:mt-20">
          <input
            type="text"
            placeholder="Search by name"
            className="w-48 md:w-80 text-xl border-b border-lighterGray focus:outline-none"
          />
          <button className="mx-2 px-5 bg-mainOrange text-white hover:bg-[#C2622C] duration-300 lg:px-10 lg:mx-4 text-sm py-2 font-medium font-heading tracking-wider uppercase rounded-lg">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
