import ExperienceCard from "../Experience/ExperienceCard";
import { useLanguage } from "../../components/LanguageContext"

interface ProjectProps {
    refProp: React.Ref<HTMLDivElement>;
}
export default function Projects ({refProp}: ProjectProps) {
    const { t } = useLanguage()
    const projects = t.projects
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