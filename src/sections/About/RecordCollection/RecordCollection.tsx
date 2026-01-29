import { useEffect, useState } from "react";
import type { Song } from "../../../types";
import Vinyl from "./Vinyl";
import AlbumSelector from "./AlbumSelector";

interface RecordCollectionProps {
    refProp: React.Ref<HTMLDivElement>;
}

const songs: Song[] = [
        {
            title: "Brookyln Bridge to Chorus - The Strokes",
            audio: './strokes.mp3',
            image: './strokes.png',
            artist: "The Strokes",
            album:  './strokesAlbum.jpg',
            albumName: 'The New Abnormal'
        },
        {
            title: "Don't Stop Me Now - Queen",
            audio: './dont-stop-me-now.mp3',
            image: './queen.png',
            artist: "Queen",
            album:  './queenAlbum.jpg',
            albumName: 'Queen Greatest Hits'
        },
        {
            title: "Holland, 1945 - Neutral Milk Hotel",
            audio: './nmh.mp3',
            image: './nmh.png',
            artist: "Neutral Milk Hotel",
            album:  './nmk.jpg',
            albumName: 'In the Aeroplane Over the Sea'
        }
]
export default function RecordCollection ({refProp}: RecordCollectionProps) {
    const [song, setSong] = useState<Song>(songs[0])
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(()=>{
        setIsPlaying(false)
    },[song])

    return (
        <div ref = {refProp}>
            <h1>My Record Collection</h1>
            <div className="recordCollection">
                <div className="albums">
                    <AlbumSelector songs={songs} setSong = {setSong}></AlbumSelector>
                </div>
                <Vinyl image={song.image} audio={song.audio} title={song.title} isPlaying={isPlaying} setIsPlaying={setIsPlaying}></Vinyl>
            </div>
        </div>
    )
}