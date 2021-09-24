import Door from "../components/Door";
import { useState } from "react";
import DoorModel from "../model/door";

export default function Home() {
  const [p1, setP1] = useState(new DoorModel(1));

  return (
    <div style={{ display: "flex" }}>
      <Door value={p1} onChange={(newDoor) => setP1(newDoor)} />
    </div>
  );
}
