import styles from "../styles/NumberInput.module.css";

interface NumberInputProps {
  value: number;
  onChnage: (newValue: number) => void;
}

export default function NumberInput(props) {
  const dec = () => props.onChange(props.value - 1);
  const inc = () => props.onChange(props.value + 1);

  return (
    <div className={styles.numberInput}>
      <span className={styles.text}>{props.text}</span>
      <span className={styles.value}>{props.value}</span>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={dec}>
          -
        </button>
        <button className={styles.btn} onClick={inc}>
          +
        </button>
      </div>
    </div>
  );
}
