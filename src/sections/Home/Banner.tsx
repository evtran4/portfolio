import './Home.css'
import profilePicture from '../../../public/profile_picture_2-modified.png'
import IconGroup from '../../components/IconGroup'
import type { Icon } from '../../types'
import linkedInIcon from '../../../public/linkedinIcon.svg'
import gmailIcon from '../../../public/gmailIcon.svg'
import githubIcon from '../../../public/githubIcon.svg'
import { useLanguage } from '../../components/LanguageContext'

const links: Icon[] = [
    {link: "https://github.com/evtran4", imagePath: githubIcon},
    { link: "https://www.linkedin.com/in/evtranumd/", imagePath: linkedInIcon},
    { link: "mailto:evtran@terpmail.umd.edu", imagePath: gmailIcon}
];
export default function Banner () {
    const { t } = useLanguage()

    return (
        <div>
            <div className = "bannerContainer">
                <img className = "profilePicture" src = {profilePicture}></img>
                <div className = "sideContainer">
                    <div className = "textContainer">
                        <h1>{t.banner.title}</h1>
                        <p>{t.banner.description1}</p>
                        <p>{t.banner.description2}</p>
                    </div>
                    <IconGroup size={50} icons={links}></IconGroup>
                </div>
            </div>
        </div>
    )
}
