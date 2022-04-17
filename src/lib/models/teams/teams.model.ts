import { EntityModelBase } from "../entityModelBase";

import { User } from "../user/user.model";

export class Teams extends EntityModelBase {
  public readonly name!: string;
  public readonly tenantId!: string;
  public readonly ownerUser!: User;
}
