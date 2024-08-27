'use client'

import React from 'react';
import Cabecalho from '../components/Cabecalho';
import { Alert, Container } from 'react-bootstrap';
import Link from 'next/link'
import Pagina from '../components/Pagina';

export default function Nomes() {
  

    return (
        <>
        <Pagina titulo="Nomes">
            <Cabecalho titulo="Nomes" />
        
            <Container>
                <Alert>
                    Atenção! Preste muita atenção.
                </Alert>

                <Link href="/">Página Inicial</Link><br />
                <Link href="/clientes">Página Clientes</Link><br />

                <h1>Fundamentos</h1>
                <p>Sucesso</p>
                <Cabecalho />
            </Container>
        </Pagina>
        </>
    )
}
