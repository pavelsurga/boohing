
interface PlaceConstructor {
    rate: number
    avatar: string
    name: string
    id: string
    photos: string[]
    conditions: Record<string, string>
    statistics: unknown
    admin: string
    placeType: string[]
    geo: Record<string, string>
    stocks: string
    promo: string[]
}

export class Place {

    id: string;
    name: string;
    avatar: string;
    rate: number;
    photos: string[]
    conditions: Record<string, string>
    statistics: unknown
    admin: string
    placeType: string[]
    geo: Record<string, string>
    stocks: string
    promo: string[]

    constructor({ rate, avatar, name, id, photos, conditions,
        statistics, admin, placeType, geo, stocks, promo }: PlaceConstructor) {
            this.rate = rate
            this.avatar = avatar
            this.name = name
            this.id = id
            this.photos = photos
            this.conditions = conditions
            this.statistics = statistics
            this.admin = admin
            this.placeType = placeType
            this.geo = geo
            this.stocks = stocks
            this.promo = promo
    }

    public setName(newName: string) {
        this.name = newName
    }

    public setAvatar(newAvatar: string) {
        this.avatar = newAvatar
    }

    public setRate(newRate: number) {
        this.rate = newRate
    }

    public setPhotos(newPhotos: string[]) {
        this.photos = newPhotos
    }

    public setStatistics(newStatistics: unknown) {
        this.statistics = newStatistics
    }

    public setAdmin(newAdmin: string) {
        this.admin = newAdmin
    }

    public setPlaceType(newPlaceType: string[]) {
        this.placeType = newPlaceType
    }

    public setGeo(newGeo: Record<string, string>) {
        this.geo = newGeo
    }

    public setPromo(newPromo: string[]) {
        this.promo = newPromo
    }

    // create place plan

    // edit place plan

    // add admin

    // delete admin

}