
interface PromoConstructor {
    id: string
    lifeTime: Record<string, string>
    name: string
    discription: string
}

export class Promo {

    id: string
    lifeTime: Record<string, string>
    name: string
    discription: string

    constructor({ id, lifeTime, name, discription }: PromoConstructor) {
        this.id = id
        this.lifeTime = lifeTime
        this.name = name
        this.discription = discription
    }

    public setId (newId: string) {
        this.id = newId
    } 

    public setlifeTime (newlifeTime: Record<string, string>) {
        this.lifeTime = newlifeTime
    } 

    public setName (newName: string) {
        this.name = newName
    } 

    public setDiscription (newDiscription: string) {
        this.discription = newDiscription
    } 

}

export default Promo