import { EntityModelBase } from "../entityModelBase";

import { Auth } from "../auth/auth.model";
import { Role } from "../role/role.model";

export class User extends EntityModelBase {
  public readonly registeredAt!: string;
  public readonly activated!: boolean;
  public readonly activationToken?: string;
  public readonly activatedAt?: string;
  public readonly auths?: Auth[];
  public readonly role?: Role;
  public readonly roleId?: string;
  //public readonly customer?: Customer;
  public readonly isAdmin!: boolean;
  public readonly isMaster!: boolean;
  public readonly email!: string;
  public readonly username!: string;
  public readonly firstName?: string;
  public readonly lastName?: string;
}
