import { Dispatch, SetStateAction } from "react";
import styles from "./next-station-button.module.css";
import Stations from "@/app/common/stations";

type NextStationButtonProps = {
    stationIdx: number;
    updateStation: Dispatch<SetStateAction<number | undefined>>
}

export default function NextStationButton({ stationIdx, updateStation }: NextStationButtonProps) {
    const station = Stations[stationIdx];
    return (
        <button className={styles.nextStation} onClick={() => updateStation(stationIdx)}>{station.name}<br/>({station.fm})</button>
    )
}
