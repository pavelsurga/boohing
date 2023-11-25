export class AbstractTable {

    photos: string[]
    position: string
    id: string
    limitGuest: string
    conditions: Record<string, string>
    statistics: unknown
    acceptedBookings: string[]

    public setPhotos(newPhotos: string[]) {
        this.photos = newPhotos
    }

    public setPosition(newPosition: string) {
        this.position = newPosition
    }

    public setId(newId: string) {
        this.id = newId
    }

    public setLimitGuest(newLimitGuest: string) {
        this.limitGuest = newLimitGuest
    }

    public setConditions(newConditions: Record<string, string>) {
        this.conditions = newConditions
    }

    public setStatistics(newStatistics: unknown) {
        this.statistics = newStatistics
    }

    public setAcceptedBooking(newAcceptedBookings: string[]) {
        this.acceptedBookings = newAcceptedBookings
    }
}
