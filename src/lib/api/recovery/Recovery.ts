import { HttpClient } from "../client";

import { RecoveryRto } from "@models/recovery/recoveryRto.model";
import { RecoveryDto } from "@models/recovery/recoveryDto.model";

import type {
  ApiActionParams,
  ApiSelectWithActionParams,
} from "@internal_types/api";

export class Recovery extends HttpClient {
  public constructor(url: string) {
    super(url);
  }

  public init = ({ dto }: ApiActionParams<RecoveryDto>) => {
    return this.instance.post<RecoveryRto>(`/recovery-process/init`, dto);
  };

  public verify = ({ id, dto }: ApiSelectWithActionParams<RecoveryDto>) => {
    return this.instance.post<RecoveryRto>(
      `/recovery-process/${id}/verify`,
      dto
    );
  };
}
