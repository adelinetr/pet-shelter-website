import WorkersSection from "./WorkersSection";

export default function TeamMembers() {
    return(
        <section className="w-fit h-fit mx-auto">
            <div className="space-y-10 flex flex-col justify-center items-center">
                <h3 className="mx-4 w-fit text-center lg:w-auto lg:mt-14">Who We Are: The Faces Behind the Mission</h3>
                <div className="flex flex-row justify-center mx-4 items-center">
                    <WorkersSection />
                </div>
            </div>
        </section>
    )
}