export class AbstractUser {
    id: string;
    name: string;
    avatar: string;
    rate: number;
 
  greet() {
    return this.id;
  }

  public setName(newName: string) {
    this.name = newName
  }

  public setAvatar(newAvatar: string) {
    this.avatar = newAvatar
  }

  public setId(newId: string) {
    this.id = newId
  }

  public setRate(newRate: number) {
    this.rate = newRate
  }
}