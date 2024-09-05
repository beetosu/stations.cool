import styles from "./station-player.module.css";
import Station from "@/app/types/station";

type StationPlayerProps = {
	currentStation: Station;
}

export default function StationPlayer({ currentStation }: StationPlayerProps) {
    return (
    <div className={styles.stationPlayer}>
        <h2>{currentStation.name} ({currentStation.fm} FM)</h2>
        <p>{currentStation.location}</p>
        <audio className={styles.audioPlayer} controls src={currentStation.audioUrl}></audio>
        <div>
            <a href={currentStation.url}>Website</a>{currentStation.donationUrl ? ' | ' : ''}{currentStation.donationUrl ? (<a href={currentStation.donationUrl}>Donate</a>) : ''}
        </div>
    </div>
    )
}
