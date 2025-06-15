import './Home.css'
import profilePicture from '../../../public/profile_picture_2-modified.png'
import IconGroup from '../../components/IconGroup'
import type Icon from '../../types'
import linkedInIcon from '../../../public/linkedinIcon.svg'
import gmailIcon from '../../../public/gmailIcon.svg'
import githubIcon from '../../../public/githubIcon.svg'

const links: Icon[] = [
    {link: "https://github.com/evtran4", imagePath: githubIcon},
    { link: "https://www.linkedin.com/in/evtranumd/", imagePath: linkedInIcon},
    { link: "mailto:evtran@terpmail.umd.edu", imagePath: gmailIcon}
];
export default function Banner () {
    return (
        <div className = "bannerContainer">
            <img className = "profilePicture" src = {profilePicture}></img>
            <div className = "sideContainer">
                <div className = "textContainer">
                    <h1>Hi, I'm Evan</h1>
                    <p>20 year old full-stack software engineer at UMD ready to make an impact.</p>
                    <p>Check out my experience and projects!</p>
                </div>
                <IconGroup size={50} icons={links}></IconGroup>
            </div>
        </div>
    )
}
