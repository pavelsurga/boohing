
interface PlanFloorConstructor {
    name: string
    floor: number
    hallList: string[]
    size: Record<string, string>
}

export class PlanFloor {

    name: string
    floor: number
    hallList: string[]
    size: Record<string, string>

    constructor({ name, floor, hallList, size }: PlanFloorConstructor) {
        this.name = name
        this.floor = floor
        this.hallList = hallList
        this.size = size
    }

    public setName(newName: string) {
        this.name = newName
    }

    public setFloor(newFloor: number) {
        this.floor = newFloor
    }

    public setHallList(newHallList: string[]) {
        this.hallList = newHallList
    }
}