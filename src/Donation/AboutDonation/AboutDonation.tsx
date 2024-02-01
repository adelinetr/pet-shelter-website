import DonationImg from "../images/about-donation.png";

export default function AboutDonation() {
  return (
    <section className="flex md:mx-0 flex-col justify-center items-center mb-32 mt-20">
      <div className="flex mx-6 flex-col justify-center items-center mb-20">
        <h3>About Donation</h3>
        <p className="mt-8 md:w-1/3 text-center text-gray font-text leading-relaxed">
          Whether you choose to make a one-time donation, become a monthly
          supporter, or contribute essential supplies, - every contribution
          makes a significant impact.
          <br />
          <br />
          Explore the different ways you can donate, learn about our current
          needs, and discover how your generosity can transform lives. Together,
          we can make a difference and create brighter futures for our furry
          friends.
        </p>
      </div>
      <img
        src={DonationImg}
        className="md:px-5 w-full h-80 md:h-max object-cover brightness-75"
        alt=""
      />
    </section>
  );
}
