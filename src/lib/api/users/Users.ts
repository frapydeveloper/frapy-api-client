import { HttpClient } from "../client";

import { UserRto } from "../../models/user/userRto.model";

export class Users extends HttpClient {
  public constructor(url: string) {
    super(url);
  }

  public retrieveUserBySession = () => {
    return this.instance.get<UserRto>("/users/by-session");
  };
}
