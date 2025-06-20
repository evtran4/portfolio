import ExperienceCard from "./ExperienceCard";
import { experience } from '../../en'

interface ExperienceProps {
  refProp: React.Ref<HTMLDivElement>;
}

export default function Experience({refProp}: ExperienceProps) {
    return (
        <div ref = {refProp}>
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
        </div>
    )
}