import ExperienceCard from "./ExperienceCard";
import ihsIcon from '../../../public/IHS_Icon.webp'
import { experience } from '../../en'

export default function Experience() {
    return (
        <>
            <h1>Experience</h1>
            <div className = "cardsContainer">
                {Object.keys(experience).map((name) => (
                    <ExperienceCard
                        tools={experience[name as keyof typeof experience].tools}
                        title={experience[name as keyof typeof experience].title}
                        image={experience[name as keyof typeof experience].image}
                        date={experience[name as keyof typeof experience].date}
                        content={experience[name as keyof typeof experience].content}
                    />
                ))}
            </div>
        </>
    )
}