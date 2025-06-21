import { projects } from "../../en";
import ExperienceCard from "../Experience/ExperienceCard";
interface ProjectProps {
    refProp: React.Ref<HTMLDivElement>;
}
export default function Projects ({refProp}: ProjectProps) {
    return (
        <div ref = {refProp}>
            <h1>Projects</h1>
            <div className = "cardsContainer">
                {Object.keys(projects).map((name) => (
                    <ExperienceCard
                        tools={projects[name as keyof typeof projects].tools}
                        title={projects[name as keyof typeof projects].title}
                        image={projects[name as keyof typeof projects].image}
                        date={projects[name as keyof typeof projects].date}
                        content={projects[name as keyof typeof projects].content}
                    />
                ))}
            </div>
        </div>
    )
}