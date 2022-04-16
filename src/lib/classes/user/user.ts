import { FrapyUser } from "../../api/user";

export class user {
  constructor(private readonly url: string) {}

  public retrieveUserBySession() {
    return new FrapyUser(this.url).retrieveUserBySession();
  }

  public activate() {}
}
