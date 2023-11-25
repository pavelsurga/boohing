
interface PlanTableConstructor {
id: string
form: string[]
position: Record<string, string>
orientation: number
type: string
}

export class PlanTable  {

    id: string
    form: string[]
    position: Record<string, string>
    orientation: number
    type: string

    constructor({ id, form, position, orientation, type }: PlanTableConstructor) {
        this.id = id
        this.form = form
        this.position = position
        this.orientation = orientation
        this.type = type
    }

    public setForm (newForm: string[]) {
        this.form = newForm
    }

    public setPosition (newPosition: Record<string, string>) {
        this.position = newPosition
    }

    public setOrientation (newOrientation: number) {
        this.orientation = newOrientation
    }

    public setType (newType: string) {
        this.type = newType
    }
}