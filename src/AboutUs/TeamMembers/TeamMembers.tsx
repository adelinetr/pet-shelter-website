import WorkersSection from "./WorkersSection";

export default function TeamMembers() {
    return(
        <section>
            <div className="space-y-10 flex flex-col justify-center items-center">
                <h3 className="mx-4 w-90 text-center lg:w-auto lg:mt-14">Who We Are: The Faces Behind the Mission</h3>

                <div className="flex flex-row justify-center items-center">
                    <WorkersSection />
                </div>
            </div>
        </section>
    )
}