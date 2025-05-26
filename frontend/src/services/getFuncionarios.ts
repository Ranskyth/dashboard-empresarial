import { API_BACKEND } from "@/configs/config"
import { Product } from "@/types/ProductType"
import { useEffect, useState } from "react"

export const GetFuncionarios = () => {
    const [data, setData] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const data = await fetch(`${API_BACKEND}/funcionarios`, { credentials: "include" })
                const datajson = await data.json()
                setData(datajson)
            } catch (error) {
                console.log({ "error": error })
            } finally {
                setLoading(false)
            }
        })()
    }, [])
    return { data, loading}
}