import FooterComponent from "./FooterComponent";

export default function Footer() {
  return (
    <div className="bg-[#1A1A1A]">
      <div className="flex flex-col items-center mx-auto justify-center bg-[#1A1A1A] h-fit py-20 space-y-10 lg:grid lg:items-start lg:grid-cols-3 lg:space-y-0 lg:space-x-20 lg:max-w-7xl">
        <div className="flex flex-col lg:mx-20 items-center justify-center lg:items-start">
          <h2 className="font-heading text-mainOrange text-2xl">PetShelter</h2>
          <p className="text-lighterGray text-xs w-90 text-center mt-1 lg:w-80 lg:text-left">
            We strongly believe in providing a better life for stray animals
            thanks to our organization.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start justify-between space-y-8 lg:space-y-0 lg:w-full">
          <FooterComponent
            heading="All Pets"
            page1="Our Cats"
            page2="Our Dogs"
            page3=""
            link1="/our-pets/cats"
            link2="/our-pets/dogs"
            link3=""
          />

          <FooterComponent
            heading="Services"
            page1="Adoption"
            page2="Donation"
            page3="Volunteering"
            link1="/services/adoption"
            link2="/services/donation"
            link3="/services/volunteer"
          />

          <FooterComponent
            heading="How to"
            page1="How to Adopt"
            page2="How Donation Helps"
            page3="How To Volunteer"
            link1="/services/adoption"
            link2="/services/donation"
            link3="/services/volunteer"
          />
        </div>

        <div className="flex flex-row items-center justify-center space-x-20 lg:space-x-16">
          <div className="group cursor-pointer relative">
            <svg
              className="absolute"
              width="25"
              height="25"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1233_2429)">
                <path
                  className=" group-hover:fill-mainOrange duration-300"
                  d="M15.7538 2.83692C19.9631 2.83692 20.4615 2.85538 22.1169 2.92923C23.6554 2.99692 24.4862 3.25538 25.04 3.47077C25.7723 3.75385 26.3015 4.09846 26.8492 4.64615C27.4031 5.2 27.7415 5.72308 28.0246 6.45539C28.24 7.00923 28.4985 7.84615 28.5662 9.37846C28.64 11.04 28.6585 11.5385 28.6585 15.7415C28.6585 19.9508 28.64 20.4492 28.5662 22.1046C28.4985 23.6431 28.24 24.4738 28.0246 25.0277C27.7415 25.76 27.3969 26.2892 26.8492 26.8369C26.2954 27.3908 25.7723 27.7292 25.04 28.0123C24.4862 28.2277 23.6492 28.4862 22.1169 28.5538C20.4554 28.6277 19.9569 28.6462 15.7538 28.6462C11.5446 28.6462 11.0462 28.6277 9.39077 28.5538C7.85231 28.4862 7.02154 28.2277 6.46769 28.0123C5.73539 27.7292 5.20615 27.3846 4.65846 26.8369C4.10462 26.2831 3.76615 25.76 3.48308 25.0277C3.26769 24.4738 3.00923 23.6369 2.94154 22.1046C2.86769 20.4431 2.84923 19.9446 2.84923 15.7415C2.84923 11.5323 2.86769 11.0338 2.94154 9.37846C3.00923 7.84 3.26769 7.00923 3.48308 6.45539C3.76615 5.72308 4.11077 5.19385 4.65846 4.64615C5.21231 4.09231 5.73539 3.75385 6.46769 3.47077C7.02154 3.25538 7.85846 2.99692 9.39077 2.92923C11.0462 2.85538 11.5446 2.83692 15.7538 2.83692ZM15.7538 0C11.4769 0 10.9415 0.0184615 9.26154 0.0923077C7.58769 0.166154 6.43692 0.436923 5.44 0.824615C4.4 1.23077 3.52 1.76615 2.64615 2.64615C1.76615 3.52 1.23077 4.4 0.824615 5.43385C0.436923 6.43692 0.166154 7.58154 0.0923077 9.25538C0.0184615 10.9415 0 11.4769 0 15.7538C0 20.0308 0.0184615 20.5662 0.0923077 22.2462C0.166154 23.92 0.436923 25.0708 0.824615 26.0677C1.23077 27.1077 1.76615 27.9877 2.64615 28.8615C3.52 29.7354 4.4 30.2769 5.43385 30.6769C6.43692 31.0646 7.58154 31.3354 9.25539 31.4092C10.9354 31.4831 11.4708 31.5015 15.7477 31.5015C20.0246 31.5015 20.56 31.4831 22.24 31.4092C23.9138 31.3354 25.0646 31.0646 26.0615 30.6769C27.0954 30.2769 27.9754 29.7354 28.8492 28.8615C29.7231 27.9877 30.2646 27.1077 30.6646 26.0738C31.0523 25.0708 31.3231 23.9262 31.3969 22.2523C31.4708 20.5723 31.4892 20.0369 31.4892 15.76C31.4892 11.4831 31.4708 10.9477 31.3969 9.26769C31.3231 7.59385 31.0523 6.44308 30.6646 5.44615C30.2769 4.4 29.7415 3.52 28.8615 2.64615C27.9877 1.77231 27.1077 1.23077 26.0738 0.830769C25.0708 0.443077 23.9262 0.172308 22.2523 0.0984615C20.5662 0.0184615 20.0308 0 15.7538 0Z"
                  fill="#A7A7A7"
                />
                <path
                  className="group-hover:fill-mainOrange duration-300"
                  d="M15.7525 7.6615C11.2848 7.6615 7.66016 11.2861 7.66016 15.7538C7.66016 20.2215 11.2848 23.8461 15.7525 23.8461C20.2202 23.8461 23.8448 20.2215 23.8448 15.7538C23.8448 11.2861 20.2202 7.6615 15.7525 7.6615ZM15.7525 21.003C12.854 21.003 10.5032 18.6523 10.5032 15.7538C10.5032 12.8553 12.854 10.5046 15.7525 10.5046C18.6509 10.5046 21.0017 12.8553 21.0017 15.7538C21.0017 18.6523 18.6509 21.003 15.7525 21.003Z"
                  fill="#A7A7A7"
                />
                <path
                  className="group-hover:fill-mainOrange duration-300"
                  d="M26.0558 7.3415C26.0558 8.38766 25.2066 9.23074 24.1666 9.23074C23.1204 9.23074 22.2773 8.38151 22.2773 7.3415C22.2773 6.29535 23.1266 5.45227 24.1666 5.45227C25.2066 5.45227 26.0558 6.3015 26.0558 7.3415Z"
                  fill="#A7A7A7"
                />
              </g>
              <defs>
                <clipPath id="clip0_1233_2429">
                  <rect width="31.5077" height="31.5077" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="group cursor-pointer relative">
            <svg
              id="facebook"
              className="absolute"
              width="25"
              height="25"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1233_2433)">
                <path
                  className="className= group-hover:fill-mainOrange duration-300"
                  d="M16.2617 0C7.56112 0 0.507812 7.05331 0.507812 15.7538C0.507812 23.1418 5.59441 29.3412 12.4562 31.0439V20.5682H9.20772V15.7538H12.4562V13.6794C12.4562 8.3174 14.8829 5.83207 20.1472 5.83207C21.1454 5.83207 22.8676 6.02805 23.5721 6.2234V10.5872C23.2003 10.5481 22.5544 10.5286 21.7522 10.5286C19.1692 10.5286 18.171 11.5072 18.171 14.0512V15.7538H23.3169L22.4328 20.5682H18.171V31.3924C25.9717 30.4503 32.0161 23.8085 32.0161 15.7538C32.0155 7.05331 24.9622 0 16.2617 0Z"
                  fill="#A7A7A7"
                />
              </g>
              <defs>
                <clipPath id="clip0_1233_2433">
                  <rect
                    width="31.5077"
                    height="31.5077"
                    fill="white"
                    transform="translate(0.507812)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="group cursor-pointer relative">
            <svg
              className="absolute"
              width="23"
              height="23"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1236_2604)">
                <path
                  className="group-hover:fill-mainOrange duration-300"
                  d="M15.7695 12.8894V18.9905H24.2479C23.8756 20.9525 22.7584 22.6139 21.0828 23.731L26.1956 27.6981C29.1745 24.9484 30.8931 20.9097 30.8931 16.1119C30.8931 14.9949 30.7929 13.9206 30.6067 12.8896L15.7695 12.8894Z"
                  fill="#A7A7A7"
                />
                <path
                  className="group-hover:fill-mainOrange duration-300"
                  d="M6.94191 18.7523L5.78878 19.635L1.70703 22.8144C4.29925 27.9558 9.6122 31.5077 15.7705 31.5077C20.0239 31.5077 23.59 30.1041 26.1966 27.6981L21.0837 23.731C19.6802 24.6762 17.89 25.2492 15.7705 25.2492C11.6745 25.2492 8.19443 22.4851 6.94835 18.7614L6.94191 18.7523Z"
                  fill="#A7A7A7"
                />
                <path
                  className="group-hover:fill-mainOrange duration-300"
                  d="M1.70546 8.69324C0.631393 10.8128 0.015625 13.2045 0.015625 15.7537C0.015625 18.3029 0.631393 20.6947 1.70546 22.8142C1.70546 22.8285 6.94728 18.7469 6.94728 18.7469C6.63221 17.8016 6.44598 16.7992 6.44598 15.7536C6.44598 14.7079 6.63221 13.7055 6.94728 12.7603L1.70546 8.69324Z"
                  fill="#A7A7A7"
                />
                <path
                  className="group-hover:fill-mainOrange duration-300"
                  d="M15.7708 6.27289C18.0909 6.27289 20.1532 7.07488 21.8002 8.62165L26.3115 4.11037C23.5761 1.56116 20.0244 0 15.7708 0C9.61252 0 4.29925 3.53745 1.70703 8.69327L6.94869 12.7606C8.19461 9.03695 11.6748 6.27289 15.7708 6.27289Z"
                  fill="#A7A7A7"
                />
              </g>
              <defs>
                <clipPath id="clip0_1236_2604">
                  <rect
                    width="31.5077"
                    height="31.5077"
                    fill="white"
                    transform="translate(0.015625)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
