export class AuthSignInDto {
  public readonly credentials?: {
    readonly password?: string;
    readonly otpCode?: string;
    readonly email?: string;
    readonly username?: string;
  };
}
