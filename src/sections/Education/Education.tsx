import './Education.css'
import shell from '../../../public/shell.png'
import { useLanguage } from '../../components/LanguageContext';
// import Polariod from '../About/Polariod';
// import bitcamp from '../../../public/bitcamp.jpg'
interface EducationProps {
    refProp: React.Ref<HTMLDivElement>;
}

export default function Education ({refProp}: EducationProps) {
    const { t } = useLanguage()

    return (
        <div ref = {refProp}>
            <h1>Education</h1>
            <div className = "educationContainer">
                <div className = "leftText">
                    {t.education.paragraphs.map((pg, i)=>(
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