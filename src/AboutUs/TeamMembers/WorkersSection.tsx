import WorkerComponent from "./WorkerComponent";
import Mia from './images/Mia.png'
import Inga from './images/Inga.png'
import Charlotte from './images/Charlotte.png'
import Kavi from './images/Kavi.png'
import Elara from './images/Elara.png'
import Daan from './images/Daan.png'
import Lila from './images/Lila.png'
import Vaida from './images/Vaida.png'

export default function WorkersSection() {
    return(
        <section>
            <div className="grid gap-6 lg:w-[900px] h-fit grid-cols-2 mb-20 lg:grid-cols-4">
                <WorkerComponent
                image={Mia}
                name="Mia Wilson"
                job="Shelter Manager"
                />
                <WorkerComponent
                image={Inga}
                name="Inga Urbonaitė"
                job="Adoption Counselor"
                />
                <WorkerComponent
                image={Charlotte}
                name="Charlotte Smith"
                job="Volunteer Coordinator"
                />
                <WorkerComponent
                image= {Kavi}
                name="Kavi Desai"
                job="Veterinarian"
                />
                <WorkerComponent
                image={Elara}
                name="Elara Martinez"
                job="Adoption Counselor"
                /> 
                <WorkerComponent
                image={Daan}
                name="Daan Singh"
                job="Adoption Counselor"
                />
                <WorkerComponent
                image={Lila}
                name="Lila Nguyen"
                job="Veterinary Assistant"
                />
                <WorkerComponent
                image={Vaida}
                name="Vaida Butkutė"
                job="Administrative Assistant"
                />
            </div>
        </section>
    )
}