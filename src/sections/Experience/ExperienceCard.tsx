
import './Experience.css'
import CardHeader from './CardHeader'
import { useState } from 'react'
import CardContent from './CardContent'

interface ExperienceCardProps {
    tools: string[]
    title: string,
    image: string
    date: string
    content: {
        text:   string[]
        images: string[]
    }
}

export default function ExperienceCard({tools, title, image, content, date}: ExperienceCardProps) {
    const [opened, setOpened] = useState(false)
    return (
        <div className="card" onClick = {()=>{setOpened(!opened)}}>
            <CardHeader tools={tools} title={title} image={image} opened={opened} date={date}></CardHeader>
            <CardContent opened={opened} content = {content}></CardContent>
        </div>
    )
}