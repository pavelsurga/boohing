
interface PlanHallConstructor {
    id: string
    condition: string
    name: string
    type: string
    photos: string[]
    tableList: string[]
    size: Record<string, string>
    position: Record<string, string>
    form: string
}

export class PlanHall {

    id: string
    condition: string
    name: string
    type: string
    photos: string[]
    tableList: string[]
    size: Record<string, string>
    position: Record<string, string>
    form: string

    constructor({ id, condition, name, type, photos, tableList,
        size, position, form }: PlanHallConstructor) {
            this.id = id
            this.condition = condition
            this.name = name
            this.type = type
            this.photos = photos
            this.tableList = tableList
            this.size = size
            this.position = position
            this.form = form
    }

    public setCondition (newCondition: string) {
        this.condition = newCondition
    }

    public setName (newName: string) {
        this.name = newName
    }

    public setType (newType: string) {
        this.type = newType
    }

    public setPhotos (newPhotos: string[]) {
        this.photos = newPhotos
    }

    public setTableList (newTableList: string[]) {
        this.tableList = newTableList
    }

    public setSize (newSize: Record<string, string>) {
        this.size = newSize
    }

    public setPosition (newPosition: Record<string, string>) {
        this.position = newPosition
    }

    public setForm (newForm: string) {
        this.form = newForm
    }
}