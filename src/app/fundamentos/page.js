import React from 'react'
import Cabecalho from '../components/Cabecalho'
import { Alert, Container } from 'react-bootstrap'
import Link from 'next/link'

export default function Fundamentos() {
  

    return (
        <>
            <Cabecalho />
            <Link href="/">Página Inicial</Link><br />
            <Link href="/clientes">Página Clientes</Link><br />
            <Container>
                <Alert>
                    Atenção! Preste muita atenção.
                </Alert>

                <h1>Fundamentos</h1>
                <p>Sucesso</p>
                1<Cabecalho />
            </Container>
        </>
    )
}
