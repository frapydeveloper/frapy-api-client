import { RtoListModelBase } from "../rtoListBase";
import { Auth } from "./auth.model";

export class AuthRtoList extends RtoListModelBase {
  auths?: Auth[];
}
