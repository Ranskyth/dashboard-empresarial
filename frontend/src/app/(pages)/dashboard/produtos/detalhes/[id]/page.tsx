/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"


import { NewProduct } from "@/components/_components/newProduct"
import { GetProducts } from "@/services/getProducts"



const Editar = () => {

    const {data} = GetProducts()

    console.log(data)
     
    return(
        <div className="px-4 h-full">
           <NewProduct/>
        </div>
    )
}

export default Editar
