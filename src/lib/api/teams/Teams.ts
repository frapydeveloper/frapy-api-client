import { HttpClient } from "../client";

import { TeamsRto } from "@models/teams/teamsRto.model";
import { TeamsDto } from "@models/teams/teamsDto.model";
import { TeamsRtoList } from "@models/teams/teamsRtoList.model";
import { TeamsUpdateDto } from "@models/teams/teamsUpdateDto";

import type {
  ApiActionParams,
  ApiSelectManyParams,
  ApiSelectParams,
  ApiSelectWithActionParams,
} from "@internal_types/api";

export class Teams extends HttpClient {
  public constructor(url: string) {
    super(url);
  }

  private readonly endpoint: string = "/teams";

  public retrieve = ({ id }: ApiSelectParams) => {
    return this.instance.get<TeamsRto>(`${this.endpoint}/${id}`);
  };

  public retrieveList = ({ pagination }: ApiSelectManyParams) => {
    return this.instance.get<TeamsRtoList>(`${this.endpoint}`, {
      params: pagination,
    });
  };

  public create = ({ dto }: ApiActionParams<TeamsDto>) => {
    return this.instance.post<TeamsRto>(`${this.endpoint}`, dto);
  };

  public update = ({ id, dto }: ApiSelectWithActionParams<TeamsUpdateDto>) => {
    return this.instance.put<TeamsRto>(`${this.endpoint}/${id}`, dto);
  };

  public delete = ({ id }: ApiSelectParams) => {
    return this.instance.delete<TeamsDto>(`${this.endpoint}/${id}`);
  };
}
