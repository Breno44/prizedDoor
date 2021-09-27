import styles from "../styles/Game.module.css";
import Door from "../components/Door";
import { useState } from "react";
import DoorModel from "../model/door";
import { createDoors, updateDoors } from "../function/doors";
import Link from "next/link";

export default function Home() {
  const [doors, setDoors] = useState(createDoors(5, 2));

  function renderDoors() {
    return doors.map((door) => {
      return <Door key={door.number} value={door} onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))} />;
    });
  }

  return (
    <div className={styles.game}>
      <div className={styles.doors}>{renderDoors()}</div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Reiniciar o jogo</button>
        </Link>
      </div>
    </div>
  );
}
