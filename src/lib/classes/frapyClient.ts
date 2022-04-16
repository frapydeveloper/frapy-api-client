import { auth } from "../classes/auth";
import { user } from "../classes/user";

export class FrapyClient {
  constructor(private readonly url: string) {}

  public auth = new auth(this.url);
  public user = new user(this.url);
}
