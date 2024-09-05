import Image from "next/image";
import styles from "./page.module.css";
import StationPlayer from "./components/station-player/station-player";
import Stations from "./common/stations";

type Station = {
  name: string;
  fm: string;
  location: string;
  audioUrl: string;
  url: string;
  donationUrl?: string;
}

export default function Home() {
  let currentStation = Stations[Math.floor(Math.random() * Stations.length)]

  return (
    <main className={styles.main}>
      <StationPlayer currentStation={currentStation} />
    </main>
  );
}
