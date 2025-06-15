import "./Experience.css";

interface CardContentProps {
    opened: boolean;
    // children: React.ReactNode;
}

export default function CardContent({ opened }: CardContentProps) {
    return (
        <div className={`card-details ${opened ? "open" : ""}`}>
            <p>HIII</p>
        </div>
    );
}
