/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { NewProduct } from "@/components/_components/newProduct"
import { GetProducts } from "@/services/getProducts"
import { useParams } from "next/navigation"



const Editar = () => {

    const {id} = useParams()

     
    return(
        <div className="px-4 h-full">
           <NewProduct/>
        </div>
    )
}

export default Editar
