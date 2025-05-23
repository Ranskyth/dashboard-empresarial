/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"

export const usedataUser = () => {
    const [user, dataUser] = useState({})
    useEffect(() => {
        (async () => {
            const data = await fetch("http://localhost:3333/user", { credentials: "include" })
            const datajson = await data.json()
            dataUser(datajson)
        })()
    }, [])

    return user
}