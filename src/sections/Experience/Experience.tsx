import ExperienceCard from "./ExperienceCard"
import { useLanguage } from "../../components/LanguageContext"

interface ExperienceProps {
  refProp: React.Ref<HTMLDivElement>
}

export default function Experience({ refProp }: ExperienceProps) {
  const { t } = useLanguage()
  const experience = t.experience

  return (
    <div ref={refProp}>
      <h1>Experience</h1>
      <div className="cardsContainer">
        {Object.keys(experience).map((name) => {
          const exp = experience[name as keyof typeof experience]

          return (
            <ExperienceCard
              key={name}
              tools={exp.tools}
              title={exp.title}
              image={exp.image}
              date={exp.date}
              content={exp.content}
            />
          )
        })}
      </div>
    </div>
  )
}
