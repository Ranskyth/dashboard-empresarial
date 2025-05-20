import { Product } from "@/types/ProductType"
import { useEffect, useState } from "react"

export const GetProducts = () => {
    const [data, setData] = useState<Product[]>([])
    useEffect(() => {
        (async () => {
            try {
                const data = await fetch("http://localhost:3333/products", { credentials: "include" })
                const datajson = await data.json()
                setData(datajson)
            } catch (error) {
                console.log({ "error": error })
            }
        })()
    }, [])
    return { data }
}