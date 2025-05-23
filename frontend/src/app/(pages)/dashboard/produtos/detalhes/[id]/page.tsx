/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { DataTable } from "@/components/data-table"
import { GetProducts } from "@/services/getProducts"
import { Product } from "@/types/ProductType"
import { useEffect, useState } from "react"


const Editar = () => {

    const {data} = GetProducts()

    console.log(data)
     
    return(
        <div className="px-4">
           <h1>editar</h1>
        </div>
    )
}

export default Editar
