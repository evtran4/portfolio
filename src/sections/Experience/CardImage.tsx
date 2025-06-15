interface CardImageProps {
    imagePath: string
}
export default function CardImage({imagePath}: CardImageProps) {
    return (
        <img className = "cardImage" src={imagePath}></img>
    )
}