interface PolariodProps {
    image: string,
    description: string,
    index: number
}
import { useMemo } from "react";

export default function Polariod ({image, description, index}: PolariodProps) {
    const randomTransform = useMemo(() => {
        // const translateY = Math.random() * 100 - 50;
        const translateY = index % 2 == 0 ? 0: -50;
        const rotate = index % 2 == 0 ? -10: 10;
        return `translateY(${translateY}px) rotate(${rotate}deg)`;
    }, []);

    const randomZIndex = useMemo(() => {
        return Math.random();
    }, []);

    return (
        <div className="polariod" style={{ transform: randomTransform, zIndex: randomZIndex }}>
            <img className="polariodImage" src={image}></img>
            <p className="polariodText">{description}</p>
        </div>
    )
}