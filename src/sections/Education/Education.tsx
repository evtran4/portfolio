import './Education.css'
import { education } from '../../en';
import shell from '../../../public/shell.png'
import Polariod from '../About/Polariod';
import bitcamp from '../../../public/bitcamp.jpg'
interface EducationProps {
    refProp: React.Ref<HTMLDivElement>;
}

export default function Education ({refProp}: EducationProps) {
    return (
        <div ref = {refProp}>
            <h1>Education</h1>
            <div className = "educationContainer">
                <div className = "leftText">
                    {education.paragraphs.map((pg, i)=>(
                        <p className = "paragraphText" key={i} dangerouslySetInnerHTML={{ __html: pg }} />
                    ))}
                </div>
                <div className = "rightImages">
                    <img src={shell} className = "galleryImage"></img>
                    {/* <Polariod image={bitcamp} description={'BitCamp Hackathon at UMD!'} index={0}></Polariod> */}
                </div>
            </div>
        </div>
    )
}