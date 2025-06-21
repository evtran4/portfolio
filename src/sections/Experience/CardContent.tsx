import "./Experience.css";

interface CardContentProps {
    opened: boolean;
    content: {
        text:   string[]
        images: string[]
    }
}

export default function CardContent({ opened, content}: CardContentProps) {
    return (
        <div className={`card-content ${opened ? "open" : ""}`}>
            {content.text.map((text, i)=>(
                <p key={i} dangerouslySetInnerHTML={{ __html: text }} />
            ))}
        </div>
    );
}
