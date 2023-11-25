import { AbstractUser } from "./AbstractUser";

interface GuestConstructor {
    rate: number
    avatar: string
    name: string
    id: string
    age: number
    promo: string[]
}

export class Guest extends AbstractUser {
    ate: number
    avatar: string
    name: string
    id: string
    age: number
    promo: string[]

    constructor({ rate, avatar, name, id, age }: GuestConstructor) {
        super()
        this.setAvatar(avatar)
        this.setId(id)
        this.setName(name)
        this.setRate(rate)
        this.setAge(age)
    }

    public setAge(newAge: number) {
        this.age = newAge
    }

    public setPromo(newPromo: string[]) {
        this.promo = newPromo
    }

    //open booking

    //delete booking

    //edit booking

    //looking booking

    //set rate rest

    //set rate admin

}