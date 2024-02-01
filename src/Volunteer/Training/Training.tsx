import "./Training.css";
import TrainingPoints from "./TrainingPoints";
import { GoArrowRight } from "react-icons/go";

export default function Training() {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="hidden md:block training-hero z-1 absolute rounded-lg"></div>
      <div className="training-mobile-hero z-1 absolute md:hidden rounded-lg"></div>

      <div className="relative text-white mx-10">
        <h3>Requirements & Training</h3>
        <TrainingPoints
          heading="Age & Safety: "
          text="Due to safety concerns, volunteers must be at least 16 years old. Some tasks, like handling specific animals, may have further age or experience requirements."
        />
        <TrainingPoints
          heading="Orientation & Training: "
          text="We prioritize the safety of our animals and volunteers. That's why we offer comprehensive training sessions covering animal handling, shelter protocols, and safety guidelines."
        />
        <TrainingPoints
          heading="Commitment:"
          text="To ensure continuity in our care routines, we request a commitment of 4 hours a week."
        />

        <button className="mt-12 basic-button flex justify-center items-center gap-3 border border-white hover:bg-white duration-300 hover:text-black">
          Complete a Form
          <GoArrowRight />
        </button>
      </div>
    </section>
  );
}
