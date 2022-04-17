export class RegistrationDto {
  public readonly user?: {
    readonly password?: string;
    readonly email?: string;
    readonly username?: string;
    readonly firstName?: string;
    readonly lastName?: string;
  };
}
