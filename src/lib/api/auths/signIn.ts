import apiClient from "../client";

interface IRequiredProps {
  email: string;
  password: string;
}

interface IOptionalProps {}

interface IProps extends IRequiredProps, IOptionalProps {}

export const authSignIn = async ({ email, password }: IProps) => {
  return apiClient.post("/auths/sign-in", { credentials: { email, password } });
};
