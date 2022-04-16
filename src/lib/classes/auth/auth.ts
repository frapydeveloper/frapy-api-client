import { FrapyAuth } from "../../api/auth";

export class auth {
  constructor(private readonly url: string) {}

  public signIn({ email, password }: { email: string; password: string }) {
    return new FrapyAuth(this.url).authSignIn({
      dto: { credentials: { email: email, password: password } },
    });
  }
}
