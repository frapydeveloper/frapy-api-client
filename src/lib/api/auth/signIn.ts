import { HttpClient } from "../client";

import { AuthRto } from "@models/auth/authRto.model";
import { AuthSignInDto } from "@models/auth/authSignInDto.model";

import type { ApiActionParams } from "@internal_types/api";

export class FrapyAuth extends HttpClient {
  public constructor(url: string) {
    super(url);
  }

  public authSignIn = ({ dto }: ApiActionParams<AuthSignInDto>) => {
    return this.instance.post<AuthRto>("/auths/sign-in", dto);
  };
}
