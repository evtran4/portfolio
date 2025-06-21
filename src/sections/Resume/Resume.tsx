import './Resume.css'

interface ResumeProps {
    refProp: React.Ref<HTMLDivElement>;
}

export default function Resume ({refProp}: ResumeProps) {
    return (
        <div ref = {refProp}>
            <div className = "center">
                <h1>Resume</h1>
            </div>
            <iframe src = "https://docs.google.com/document/d/1C_ay8ABAWFfyUuGT4M1pgsuLsKx78ZFBJWJDWSV0yr8/preview"></iframe>
        </div>
    )
}