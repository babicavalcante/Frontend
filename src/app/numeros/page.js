'use client';

import Pagina from "../components/Pagina";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Numero() {
    // Declara o estado número e a função para atualizar o estado
    const [numero, setNumero] = useState(0);

    // Função para somar 1 ao número
    function somar() {
        setNumero(prevNumero => prevNumero + 1);
    }

    // Função para diminuir 1 ao número
    function diminuir() {
        setNumero(prevNumero => prevNumero - 1);
    }

    return (
        <Pagina titulo="Número">
            <Button onClick={somar}>+</Button>
            <h1>{numero}</h1>
            <Button onClick={diminuir}>-</Button>
        </Pagina>
    );
}