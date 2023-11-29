
export interface AbstractPlanItemConstructor {
    id: string
    orientation: number
    form: string[]
    position: Record<string, string>
}

export class AbstractPlanItem {

    id: string
    orientation: number
    form: string[]
    position: Record<string, string>

    constructor({ id, orientation, form, position }: AbstractPlanItemConstructor) {
        this.id = id
        this.orientation = orientation
        this.form = form
        this.position = position
    }
    
    public setOrientation(newOrientation: number) {
        this.orientation = newOrientation
    }

    public setPosition(newPosition: Record<string, string>) {
        this.position = newPosition
    }

    public setForm(newForm: string[]) {
        this.form = newForm
    }   
}