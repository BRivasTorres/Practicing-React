import SongLyric from './SongLyric'
import SongArtist from './SongArtist'

const SongDetails = ({ serch, lyric, bio }) => {
    return (
        <div>
            <h2>Details</h2>
            <SongLyric />
            <SongArtist />
        </div>
    )
}

export default SongDetails
