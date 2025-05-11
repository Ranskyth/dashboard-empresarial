/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { DataTable } from "@/app/_components/data-table"
import { Product } from "@/types/ProductType"
import { useEffect, useState } from "react"

const data: Product[] = [
  {
    id: 1,
    preco: 316,
    estoque: 122,
    nome: "aaaaaaa",
    categoria: "a",
    descricao:"aaaaaaaaaaaaaaaaaaaaaaa",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_601144-MLB83784365745_042025-O-pulver-de-moletom-com-capuz-folgado-street-style-para-homen.webp"
  },
]

const Produtos = () => {
    const [data, setData] = useState<Product[]>([])

    useEffect(() => {
        (async() => {
            (async () => {
                const data = await fetch("http://localhost:3333/products", { credentials: "include" })
                const datajson = await data.json()
                setData(datajson)
            })()
        })()
    }, [])

    console.log(data)
     
    return(
        <div className="px-4">
           <DataTable data={data}/>
        </div>
    )
}

export default Produtos
