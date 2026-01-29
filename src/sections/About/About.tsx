import './About.css'
import Polariod from './Polariod';
import RecordCollection from './RecordCollection/RecordCollection';
import { useLanguage } from "../../components/LanguageContext"

interface AboutProps {
    refProp: React.Ref<HTMLDivElement>;
}

export default function About({refProp}: AboutProps) {
    const {t} = useLanguage()
    return (
        <div ref = {refProp}>
            <h1>About Me</h1>
            {t.aboutMe.paragraphs.map((text)=>(
                <p className = "paragraphText">{text}</p>
            ))}
            <div className = "polariodGallary">
            {t.aboutMe.images.map((polariod: { image: string, description: string }, index: number) => (
                <Polariod
                    key={index}
                    image={polariod.image}
                    description={polariod.description}
                    index={index} 
                />
            ))}
            </div>
            <RecordCollection refProp={refProp}></RecordCollection>
        </div>
    )
}