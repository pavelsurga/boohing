import { AbstractUser } from "./AbstractUser";

interface OwnerConstructor {
    rate: number
    avatar: string
    name: string
    id: string
}

export class Owner extends AbstractUser {

    constructor({ rate, avatar, name, id }: OwnerConstructor) {
        super()
        this.avatar = avatar
        this.id = id
        this.name = name
        this.rate = rate
    }

    // create place

    // edit place

    // create place plan

    // edit place plan

    // add admin

    // delete admin

}