"use client";

import styles from "./page.module.css";
import StationPlayer from "./components/station-player/station-player";
import Stations from "./common/stations";
import { useState } from "react";

export default function Home() {
  const [currentStationIdx, updateCurrentStation] = useState<number>(Math.floor(Math.random() * Stations.length));

  function randomizeStation() {
    const oldStation = currentStationIdx;
    let newStation = currentStationIdx;
    while (oldStation === newStation) {
      newStation = Math.floor(Math.random() * Stations.length);
    }
    updateCurrentStation(newStation);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>stations.cool 📻</h1>
        <button onClick={randomizeStation}>Random Station!</button>
      </header>
      <main className={styles.main}>
        <StationPlayer currentStation={Stations[currentStationIdx]} />
      </main>
    </div>
  );
}
