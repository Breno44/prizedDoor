import styles from "../styles/Door.module.css";

export default function Door(props) {

  const select = props.selected ? styles.select : '';

  return (
    <div className={styles.area}>
      <div className={`${styles.structure} ${select}`}>
        <div className={styles.door}>
          <div className={styles.number}>3</div>
          <div className={styles.doorHandle}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
