import type { Song } from "../../../types"


interface AlbumCardProps {
    song: Song
    setSong: Function
}

export default function AlbumCard ({song, setSong}: AlbumCardProps) {
    const selectSong = () => {
        setSong(song)
    }
    return (
        <div className="albumCard" onClick={selectSong}>
            <img className="albumImage" src={song.album}></img>
            <div className="albumText">
                <strong>{song.albumName}</strong>
                <p>{song.artist}</p>
            </div>
        </div>
    )
}