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
        this.setAvatar(avatar)
        this.setId(id)
        this.setName(name)
        this.setRate(rate)
    }

    // create place

    // edit place

    // create place plan

    // edit place plan

    // add admin

    // delete admin

}