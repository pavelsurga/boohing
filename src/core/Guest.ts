import { AbstractUser } from "./AbstractUser";

interface GuestConstructor {
    rate: number
    avatar: string
    name: string
    id: string
    age: number
}

export class Guest extends AbstractUser {
    age: number;

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

    //open booking

    //delete booking

    //edit booking

    //looking booking

    //set rate rest

    //set rate admin

}