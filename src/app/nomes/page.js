'use client'


import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Pagina from '../components/Pagina';


export default function Nomes() {

    const [nome, setNome] = useState("Barbara");

    function alterarNome(){
      const novoNome = nome == 'Barbara' ? 'Barbara Cavalcante' : 'Barbara'
      setNome(novoNome)
    }
    return (
        <Pagina titulo="Nomes">
            <h1>{nome}</h1>
            <Button onClick={alterarNome}>Alterar Nome</Button>
        </Pagina>
    )
}