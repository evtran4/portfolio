import './About.css'
import { aboutMe } from '../../en';
import Polariod from './Polariod';
interface AboutProps {
    refProp: React.Ref<HTMLDivElement>;
}
export default function About({refProp}: AboutProps) {
    return (
        <div ref = {refProp}>
            <h1>About Me</h1>
            {aboutMe.paragraphs.map((text)=>(
                <p className = "paragraphText">{text}</p>
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
        </div>
    )
}