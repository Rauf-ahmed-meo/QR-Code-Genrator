
import { useState } from "react"
                   
export default function useLocalStorage(initialValue, increment){
    const [count, setcount] = useState(initialValue)
    return(
        <div>
        <div>{count}</div>
        <button onClick={()=>{setcount(count + increment)}}>increment</button>
        </div>
    )
}