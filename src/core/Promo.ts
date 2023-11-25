
interface PromoConstructor {
    id: string
    lifeTime: Record<string, string>
    name: string
    description: string
}

export class Promo {

    id: string
    lifeTime: Record<string, string>
    name: string
    description: string

    constructor({ id, lifeTime, name, description }: PromoConstructor) {
        this.id = id
        this.lifeTime = lifeTime
        this.name = name
        this.description = description
    }

    public setLifeTime (newLifeTime: Record<string, string>) {
        this.lifeTime = newLifeTime
    } 

    public setName (newName: string) {
        this.name = newName
    } 

    public setDescription (newDescription: string) {
        this.description = newDescription
    } 

}

export default Promo