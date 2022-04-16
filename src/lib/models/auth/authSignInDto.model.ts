export class AuthSignInDto {
  public readonly credentials?: {
    readonly password?: string;
    readonly email?: string;
  };
}
