import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs=(categorie)=>{
    const [state, setState] = useState({
        data:[],
        loading:true
    })
    useEffect(()=>{
        getGifs(categorie).then(image=>{
            setState({
                data:image,
                loading:false
            });
        })
    },[categorie])
    return state;
}