/* eslint-disable react-hooks/rules-of-hooks */
import { UserType } from "@/types/UserType"
import { useEffect, useState } from "react"

export const usedataUser = () => {
    const [user, dataUser] = useState<UserType>({} as UserType)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (async () => {
            try{
                const data = await fetch("http://localhost:3333/user", { credentials: "include" })
                const datajson:UserType = await data.json()
                dataUser(datajson)
            }catch(error){
                console.log(error)
            }finally{
                setLoading(false)
            }
        })()
    }, [])

    return {user, loading}
}