import styles from "./station-player.module.css";
import Station from "@/app/types/station";

type StationPlayerProps = {
	currentStation: Station;
}

export default function StationPlayer({ currentStation }: StationPlayerProps) {
    const fullName = `${currentStation.name} (${currentStation.fm} FM)`
    document.title = fullName;
    return (
    <div className={styles.stationPlayer + ' block'}>
        <h2>{fullName}</h2>
        <p>{currentStation.location}</p>
        <audio className={styles.audioPlayer} controls autoPlay preload="auto" src={currentStation.audioUrl}></audio>
        <div>
            <a href={currentStation.url}>Website</a>{currentStation.donationUrl ? ' | ' : ''}{currentStation.donationUrl ? (<a href={currentStation.donationUrl}>Donate</a>) : ''}
        </div>
    </div>
    )
}
