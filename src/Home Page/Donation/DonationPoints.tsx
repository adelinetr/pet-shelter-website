import DonationIcon from "./donation-icon.svg";

export default function DonationPoints(props: { description: string }) {
  return (
    <div className="mt-8 md:max-w-2xl flex items-center gap-4">
      <img src={DonationIcon} alt="" />
      <p>{props.description}</p>
    </div>
  );
}
