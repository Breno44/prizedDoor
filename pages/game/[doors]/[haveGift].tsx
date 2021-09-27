/* eslint-disable @next/next/link-passhref */
import styles from "../../../styles/Game.module.css";
import Door from "../../../components/Door";
import { useEffect, useState } from "react";
import DoorModel from "../../../model/door";
import { createDoors, updateDoors } from "../../../function/doors";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const router = useRouter();
  const [doors, setDoors] = useState([]);

  useEffect(() => {
    const doors = +router.query.doors;
    const haveGift = +router.query.haveGift;

    setDoors(createDoors(doors, haveGift));
  }, [router?.query]);

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
