export class AbstractUser {
    id: string;
    name: string;
    avatar: string;
    rate: number;

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