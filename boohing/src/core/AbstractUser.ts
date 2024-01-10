export class AbstractUser {
    id: string | undefined;
    name: string | undefined;
    avatar: string | undefined;
    rate: number | undefined;

  public setName(newName: string) {
    this.name = newName
  }

  public setAvatar(newAvatar: string) {
    this.avatar = newAvatar
  }

  public setRate(newRate: number) {
    this.rate = newRate
  }
}