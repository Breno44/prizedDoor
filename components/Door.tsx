import styles from "../styles/Door.module.css";
import DoorModel from "../model/door";

interface DoorProps {
  door: DoorModel;
}

export default function Door(props: DoorProps) {
  const { door } = props;
  const select = door.selected ? styles.select : "";

  return (
    <div className={styles.area}>
      <div className={`${styles.structure} ${select}`}>
        <div className={styles.door}>
          <div className={styles.number}>{door.number}</div>
          <div className={styles.doorHandle}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
