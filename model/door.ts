import Door from "../components/Door";

export default class DoorModel {
  #number: number;
  #haveGift: boolean;
  #selected: boolean;
  #open: boolean;

  constructor(number, haveGift = false, selected = false, open = false) {
    this.#number = number;
    this.#haveGift = haveGift;
    this.#selected = selected;
    this.#open = open;
  }

  get number() {
    return this.#number;
  }

  get haveGift() {
    return this.#haveGift;
  }

  get selected() {
    return this.#selected;
  }

  get open() {
    return this.#open;
  }

  get close() {
    return !this.#open;
  }

  deselect() {
    const selected = false;
    return new DoorModel(this.number, this.haveGift, selected, this.open);
  }

  toggleSelection() {
    const selected = !this.selected;
    return new DoorModel(this.number, this.haveGift, selected, this.open);
  }

  openDoor() {
    const open = true;
    return new DoorModel(this.number, this.haveGift, this.selected, open);
  }
}
