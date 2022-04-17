import { HttpClient } from "../client";

import { RegistrationRto } from "@models/registration/registrationRto.model";
import { RegistrationDto } from "@models/registration/registrationDto.model";

import type {
  ApiActionParams,
  ApiSelectWithActionParams,
} from "@internal_types/api";

export class Registration extends HttpClient {
  public constructor(url: string) {
    super(url);
  }

  public init = ({ dto }: ApiActionParams<RegistrationDto>) => {
    return this.instance.post<RegistrationRto>(
      `/registration-process/init`,
      dto
    );
  };

  public verify = ({ id, dto }: ApiSelectWithActionParams<RegistrationDto>) => {
    return this.instance.post<RegistrationRto>(
      `/registration-process/${id}/verify`,
      dto
    );
  };
}
