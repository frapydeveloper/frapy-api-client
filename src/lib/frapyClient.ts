import { Auths } from "./api/auths";
import { Registration } from "./api/registration";
import { Recovery } from "./api/recovery";
import { Users } from "./api/users";
import { Teams } from "./api/teams";

export class FrapyClient {
  constructor(private readonly url: string) {}

  public auths = new Auths(this.url);
  public registration = new Registration(this.url);
  public recovery = new Recovery(this.url);
  public teams = new Teams(this.url);
  public users = new Users(this.url);
}
