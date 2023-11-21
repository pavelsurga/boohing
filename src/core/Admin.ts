import { AbstractUser } from "./AbstractUser";

interface AdminContructor {
    name: string
    id: string
    rate: number
    avatar: string
}

export class Admin extends AbstractUser {
    constructor({ rate, avatar, name, id }: AdminContructor) {
        super()
        this.setAvatar(avatar)
        this.setId(id)
        this.setName(name)
        this.setRate(rate)
    }

    // accept booking

    // reject booking

    // edit booking

    // offer table

    // set rate guest
  
}
