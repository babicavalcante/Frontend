'use client'


import { useEffect, useState } from "react";
import apiDisney from "../services/apiDisney";
import Pagina from "../components/Pagina";


export default function Page(){
    const [personagens, setPersonagens] = useState([])
    useEffect(()=>{
        apiDisney.get('character').then(resultado=>{
            setPersonagens(resultado.data.data)
        })
    }, [])
    
    return (
        <Pagina titulo="Disney">
            {personagens.map(item => (
                <p key={item._id}>
                    {item.name}
                </p>
            ))}

        </Pagina>
    )
}