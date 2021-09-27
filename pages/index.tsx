import styles from "../styles/Form.module.css";
import Card from "../components/Card";
import Link from "next/link";
import NumberInput from "../components/NumberInput";
import { useState } from "react";

export default function Form() {
  const [qtdeDoors, setQtdeDoors] = useState(3);
  const [haveGift, setHaveGift] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput text="Qtde Portas?" value={qtdeDoors} onChange={(newQtde) => setQtdeDoors(newQtde)} />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput text="Porta com presente?" value={haveGift} onChange={(newGift) => setHaveGift(newGift)} />
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/game/${qtdeDoors}/${haveGift}`}>
            <h2 className={styles.link} style={{ flex: "1", margin: "0" }}>
              Iniciar
            </h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
