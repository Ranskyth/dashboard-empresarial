/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { DataTable } from "@/components/_components/data-table"
import { GetProducts } from "@/services/getProducts"
import { Product } from "@/types/ProductType"
import { useEffect, useState } from "react"


const Produtos = () => {

    const {data} = GetProducts()

    console.log(data)
     
    return(
        <div className="px-4">
           <DataTable ButtonName="Produto" data={data}/>
        </div>
    )
}

export default Produtos
