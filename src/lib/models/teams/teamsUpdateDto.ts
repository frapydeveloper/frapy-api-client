import { Teams } from "./teams.model";

export type TeamsUpdateDto = Partial<Pick<Teams, "name">>;
