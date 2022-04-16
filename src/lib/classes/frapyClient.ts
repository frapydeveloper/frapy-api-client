import { Auths } from "../api/auth";
import { user } from "../classes/user";

export class FrapyClient {
  constructor(private readonly url: string) {}

  public auth = new Auths(this.url);
  public user = new user(this.url);
}
