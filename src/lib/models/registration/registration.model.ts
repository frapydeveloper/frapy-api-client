import { EntityModelBase } from "../entityModelBase";

import { User } from "../user/user.model";

export class Registration extends EntityModelBase {
  public readonly user?: User;
  public readonly userId!: string;
  public readonly isActive!: boolean;
}
