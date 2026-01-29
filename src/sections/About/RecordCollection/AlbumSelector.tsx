import { useState } from "react"
import type { Song } from "../../../types"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightIcon from '@mui/icons-material/ChevronRightRounded';

interface AlbumSelectorProps {
    songs: Song[],
    setSong: Function
}

export default function AlbumSelector ({songs, setSong}: AlbumSelectorProps) {
    const [pos, setPos] = useState(0)
    const handleSetSong = (skip: number) => {
        let newPos = pos + skip

        if (newPos >= songs.length) {
            newPos = 0
        } else if (newPos < 0) {
            newPos = songs.length - 1
        }
        setPos(newPos);
        setSong(songs[newPos])
    }
    return(
        <>
            <div className="albumSelector">
                <div className = "scroll">
                    <ChevronLeftIcon sx={{fontSize: 70}} onClick={()=>{handleSetSong(-1)}}/>
                        <img src={songs[pos].album} className="albumImage"></img>
                    <ChevronRightIcon sx={{fontSize: 70}} onClick={()=>{handleSetSong(1)}}/>
                </div>
                <p>{songs[pos].title}</p>
            </div>
        </>
    )
}