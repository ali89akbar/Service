import { useEffect, useState } from "react"

const UseFetch=(url)=>{
    const [data,setData]= useState("")
    const [loading,Setloading]=useState("")
    const [error,setError]=useState("")

    useEffect(()=>{

        const fetchdata= async ()=>{
            Setloading(true)
            try{
                const res = await fetch(url)
                const jsn = await res.json()
                setData(jsn)
                Setloading(false)
            }
            catch(error)
            {
                setError(error)
                Setloading(false)
            }
        }
        fetchdata()
    },[url])
    return{ data,loading,error}

}
export default UseFetch;