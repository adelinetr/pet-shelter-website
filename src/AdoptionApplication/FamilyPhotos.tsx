import Family from "./images/family-photos.png";
import MobilePhotos from "./images/2images.png";

export default function FamilyPhotos() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center mb-20 mx-6 mt-20">
        <div className="lg:w-1/3 text-center mb-20">
          <h3>Heartwarming family photos of adopted pets</h3>
          <p>
            {" "}
            Each pet, once lonely and longing for a home, now stands alongside
            their human companions, radiating joy and gratitude.
          </p>
        </div>
        <div className="mx-6 md:mx-12 w-full">
          <img
            className="lg:w-1/2 h-auto mx-auto md:hidden"
            src={MobilePhotos}
            alt=""
          />
          <img
            className="hidden lg:w-1/2 h-auto mx-auto md:block"
            src={Family}
            alt=""
          />
        </div>
        <button className="mt-10 basic-button capitalize font-normal border px-12 hover:bg-mainOrange hover:text-white duration-300">
          View Our Pets
        </button>
      </div>
    </section>
  );
}
