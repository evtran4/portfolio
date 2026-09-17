import type { Icon } from '../types'
import './Components.css'

interface IconGroupProps {
    size: number,
    icons: Icon[],
    tooltip?: boolean
}

export default function IconGroup ({size, icons, tooltip}: IconGroupProps) {
    return(
        <div className = "iconContainer">
            {icons.map((icon: Icon)=>(
                <a target="_blank" className="icon" href={icon.link}>
                    <img src={ icon.imagePath }style={{ width: size + "px", height: size + "px" }}></img>
                </a>
            ))}
        </div>
    )
}