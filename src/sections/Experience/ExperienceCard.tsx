
import ihsIcon from '../../../public/IHS_Icon.webp'
import './Experience.css'
import CardHeader from './CardHeader'
import ihsBanner from '../../../public/ihs_banner.jpeg'
import { useState } from 'react'
import CardContent from './CardContent'
export default function ExperienceCard() {
    const [opened, setOpened] = useState(false)
    return (
        <div className="card">
            <CardHeader tools={["Vue", "Node", "GCP", "Git", "Firebase", "SQL"]} title={'Software Engineering Intern @ IHS'} image={ihsIcon} opened={opened} setOpened={setOpened}></CardHeader>
            <CardContent opened={opened}></CardContent>
        </div>
    )
}