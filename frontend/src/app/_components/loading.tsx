import { useEffect } from "react"

export const Loading = () => {
    useEffect(() => {
        (() => {
            return (
                <h1>Loading</h1>
            ) 
        })()
    }, [5000])
}