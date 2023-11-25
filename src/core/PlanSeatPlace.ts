
interface PlanSeatPlace {
position: Record<string, string>
capacity: string
type: string
id: string
}

class PlanSeatPlace  {

    position: Record<string, string>
    capacity: string
    type: string
    id: string

    constructor({ position, capacity, type, id }: PlanSeatPlace) {
        this.position = position
        this.capacity = capacity
        this.type = type
        this.id = id
    }
    
    public setPosition (newPosition: Record<string, string>) {
        this.position = newPosition
    }

    public setCapacity (newCapacity: string) {
        this.capacity = newCapacity
    }

    public setType (newType: string) {
        this.type = newType
    }
}

export default PlanSeatPlace;