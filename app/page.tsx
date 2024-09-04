import Image from "next/image";
import styles from "./page.module.css";
import StationPlayer from "./components/station-player/station-player";

type Station = {
  name: string;
  fm: string;
  location: string;
  audioUrl: string;
  url: string;
  donationUrl?: string;
}

export default function Home() {
  let currentStation: Station = {
    name: 'WRUV',
    fm: '90.1',
    location: 'Burlington, VT',
    audioUrl: 'http://icecast.uvm.edu:8005/wruv_fm_128',
    url: 'http://wruv.org/'
  }

  return (
    <main className={styles.main}>
      <StationPlayer currentStation={currentStation} />
    </main>
  );
}
