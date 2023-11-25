export class AbstractTable {

    photos: string[]
    planTableId: string
    id: string
    limitGuest: string
    conditions: Record<string, string>
    statistics: unknown
    acceptedBookings: string[]

    public setPhotos(newPhotos: string[]) {
        this.photos = newPhotos
    }

    public setPlanTableId(newPlanTableId: string) {
        this.planTableId = newPlanTableId
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
