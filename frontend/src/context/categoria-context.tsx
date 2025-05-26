/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useState } from "react";

interface Props {
  categoria: string[];
  CreateCategoria: (value: any) => void;
}

export const CategoriaContext = createContext({} as Props);

export const CategoriaContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
const [categoria, setCategoria] = useState<string[]>(["Todos"]);
  const CreateCategoria = (value: string) => {
    setCategoria(prev => [...prev, value])
  }

  console.log(categoria)

  return (<CategoriaContext.Provider value={{categoria, CreateCategoria }}>
    {children}
  </CategoriaContext.Provider>)
};
