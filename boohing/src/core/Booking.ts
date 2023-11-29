
interface BookingConstructor {
    startTime: string
    duration: string
    comments: string
    guestInfo: Record<string, string>
    guestsCount: string
}

export class Booking {

    startTime: string
    duration: string
    comments: string
    guestInfo: Record<string, string>
    guestsCount: string

    constructor({ startTime, duration, comments, guestInfo, guestsCount }: BookingConstructor) {
        this.comments = comments
        this.duration = duration
        this.guestInfo = guestInfo
        this.startTime = startTime
        this.guestsCount = guestsCount
    }

    public setStartTime(newStartTime: string) {
        this.startTime = newStartTime
    }

    public setDuretion(newDuretion: string) {
        this.duration = newDuretion
    }

    public setGuestInfo(newGuestInfo: Record<string, string>) {
        this.guestInfo = newGuestInfo
    }

    public setComments(newComments: string) {
        this.comments = newComments
    }

    public setGuestsCount(newGuestsCount: string) {
        this.guestsCount = newGuestsCount
    }

}
