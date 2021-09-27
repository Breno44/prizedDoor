import DoorModel from "../model/door";


export function createDoors(qtde: number, selected: number):DoorModel[] {
    return Array.from({ length: qtde }, (_, i) => {
        const number = i + 1
        const haveGift = number === selected
        return new DoorModel(number, haveGift)
    })
}

export function updateDoors(doors: DoorModel[], modifiedDoor: DoorModel): DoorModel[] {
    return doors.map(door => {
        const modified = door.number === modifiedDoor.number

        if(modified) {
            return modifiedDoor
        } else {
            return modifiedDoor.open ? door : door.deselect()
        }
    })
}