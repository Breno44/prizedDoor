import styles from "../styles/Gift.module.css";

export default function Gift() {
  return (
    <div className={styles.gift}>
      <div className={styles.giftHeader}></div>
      <div className={styles.giftBody}></div>
      <div className={styles.giftRibbon1}></div>
      <div className={styles.giftRibbon2}></div>
    </div>
  );
}
