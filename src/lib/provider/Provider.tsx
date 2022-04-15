import React from "react";

interface IRequiredProps {}

interface IOptionalProps {
  apiUrl?: string;
  children?: JSX.Element | JSX.Element[];
}

interface IProps extends IRequiredProps, IOptionalProps {}

const apiUrl: string = "";

export const Context = React.createContext({ apiUrl });

function Provider({ children, apiUrl = "" }: IProps) {
  return <Context.Provider value={{ apiUrl }}>{children}</Context.Provider>;
}

export default Provider;
