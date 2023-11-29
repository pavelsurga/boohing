import { AbstractUser } from "./AbstractUser";

interface AdminConstructor {
    name: string
    id: string
    rate: number
    avatar: string
}

export class Admin extends AbstractUser {
    constructor({ rate, avatar, name, id }: AdminConstructor) {
        super()
        this.avatar = avatar
        this.id = id
        this.name = name
        this.rate = rate
    } 

    // accept booking

    // reject booking

    // edit booking

    // offer table

    // set rate guest
  
}
