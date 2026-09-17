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
            <iframe src = "https://drive.google.com/file/d/1rqJYuWA4F6lPKhLKvv0J-p_ZxGt02BF_/preview?tab=t.0"></iframe>
        </div>
    )
}