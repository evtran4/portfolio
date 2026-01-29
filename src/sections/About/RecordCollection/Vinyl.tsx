import AudioPlayer from "./AudioPlayer.tsx";
interface VinylProps {
    image: string,
    audio: string,
    title: string
    isPlaying: boolean,
    setIsPlaying: Function
}
const Vinyl = ({image, audio, title, isPlaying, setIsPlaying}: VinylProps) => {

    return (
        <div className='vinyl'>
            <img className = {isPlaying ? "record spin": "record"} src={image}></img>
            <AudioPlayer src={audio} title={title} preload={"auto"}  isPlaying={isPlaying} setIsPlaying={setIsPlaying}></AudioPlayer>
        </div>
    );
};

export default Vinyl;