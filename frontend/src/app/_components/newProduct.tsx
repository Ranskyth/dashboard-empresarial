/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { API_BACKEND } from "@/configs/config";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"

type ProductData = {
    nome: string,
    categoria: string,
    preco: number,
    estoque: number,
    status: string,
    imagem: string,
    cores: string,
    tamanhos: string,
    descricao: string
}

const InputForm = ({
  nome,
  className,
  placeholder,
  register
}: {
  nome: string;
  className?: string;
  placeholder?: string;
  register?: any;
}) => {
  return (
    <div className={`flex flex-col space-y-1.5 ${className}`}>
      <Label htmlFor="name">{nome}</Label>
      <Input {...register} placeholder={placeholder}
       />
    </div>
  );
};

export const NewProduct = () => {

  const {register, handleSubmit} = useForm<ProductData>()
  const router = useRouter();

  const OnSubmit = (data:ProductData) => {
   (async() => {
     await fetch(`${API_BACKEND}/products`, {method:"POST",credentials:"include", headers:{"Content-Type":"application/json"}, body:JSON.stringify({...data,estoque:Number(data.estoque), preco:Number(data.preco)})}).then(res => console.log(res.headers)).catch(error => console.log(error))
   })()
  } 

  return (
    <div className="w-full h-full flex items-center  justify-center">
      <Card className="w-[90%] h-[85%]">
        <CardHeader>
          <CardTitle>Cradastro de Produtos</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(OnSubmit)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex gap-4">
                <InputForm register={register("nome")} className="flex-1/2" nome="nome" />
                <InputForm register={register("categoria")} nome="Categoria" />
                <InputForm register={register("preco")} nome="Preco" />
                <InputForm register={register("estoque")} nome="Estoque" />
                <InputForm register={register("status")} nome="Status" />
              </div>
              <div className="flex gap-4">
                <InputForm register={register("imagem")} className="flex-1" nome="Imagem" />
                <InputForm register={register("cores")} nome="Cores" />
                <InputForm register={register("tamanhos")} nome="Tamanho" />
              </div>
              <Textarea {...register("descricao")} className="h-[90%]" placeholder="descrição" />
            </div>
                      <Button variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit">Cadastrar Produto</Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">

        </CardFooter>
      </Card>
    </div>
  );
};
