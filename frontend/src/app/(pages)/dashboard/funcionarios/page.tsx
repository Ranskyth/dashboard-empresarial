/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { DataTable } from "@/components/_components/data-table"
import { GetFuncionarios } from "@/services/getFuncionarios"


const Funcionarios = () => {

    const {data} = GetFuncionarios()

    console.log(data)
     
    return(
        <div className="px-4">
           <DataTable ButtonName="Funcionario" data={data}/>
        </div>
    )
}

export default Funcionarios
