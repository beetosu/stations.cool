import styles from "./station-player.module.css";
import Station from "@/app/types/station";

type StationPlayerProps = {
	currentStation: Station;
}

export default function StationPlayer({ currentStation }: StationPlayerProps) {
    function getLinks(): JSX.Element {
        return currentStation.donationUrl ? (<div>
            <a href={currentStation.url}>Website</a> | <a href={currentStation.donationUrl}>Donate</a>
        </div>) : (<a href={currentStation.url}>Website</a>)
    }
    debugger;
    return (
    <div className={styles.stationPlayer}>
        <h2>{currentStation.name} ({currentStation.fm} FM)</h2>
        <p>{currentStation.location}</p>
        <audio className={styles.audioPlayer} controls src={currentStation.audioUrl}></audio>
        <div>
            {getLinks()}
        </div>
    </div>
    )
}
