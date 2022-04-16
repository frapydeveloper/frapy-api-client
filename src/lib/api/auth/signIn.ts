import { HttpClient } from "../client";

import { AuthRto } from "@models/auth/authRto.model";
import { AuthRtoList } from "@models/auth/authRtoList.model";
import { AuthSignInDto } from "@models/auth/authSignInDto.model";

import type {
  ApiActionParams,
  ApiSelectParams,
  ApiSelectManyParams,
} from "@internal_types/api";

export class Auths extends HttpClient {
  public constructor(url: string) {
    super(url);
  }

  public retrieve = ({ id }: ApiSelectParams) => {
    return this.instance.get<AuthRto>(`/auths/${id}`);
  };

  public retrieveList = ({ pagination }: ApiSelectManyParams) => {
    return this.instance.get<AuthRtoList>(`/auths`, {
      params: pagination,
    });
  };

  public delete = ({ id }: ApiSelectParams) => {
    return this.instance.delete<AuthRto>(`/auths/${id}`);
  };

  public signIn = ({ dto }: ApiActionParams<AuthSignInDto>) => {
    return this.instance.post<AuthRto>("/auths/sign-in", dto);
  };

  // public update = ({id, dto }: ApiSelectWithActionParams<UserUpdateDto>) => {
  //   return this.instance.put<AuthRto>(`/auths/sign-in/${id}`, dto);
  // };
}
