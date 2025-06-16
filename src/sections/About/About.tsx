import './About.css'
import { aboutMe } from '../../en';
import Polariod from './Polariod';
interface AboutProps {
    refProp: React.Ref<HTMLDivElement>;
}
export default function About({refProp}: AboutProps) {
    return (
        <>
            <h1 ref = {refProp}>About Me</h1>
            {aboutMe.paragraphs.map((text)=>(
                <p className = "aboutMeText">{text}</p>
            ))}
            <div className = "polariodGallary">
            {aboutMe.images.map((polariod: { image: string, description: string }, index: number) => (
                <Polariod
                    key={index}
                    image={polariod.image}
                    description={polariod.description}
                    index={index} 
                />
            ))}
            </div>
        </>
    )
}