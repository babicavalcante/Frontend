'use client'

import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";
import Pagina from "./components/Pagina";


export default function Home() {
  return (
    <main>
      <Pagina titulo="Página inicial">
      <Button variant="primary">Primary</Button>{' '}

      <Cabecalho titulo="Página Inicial" sub="Barbara" />
      <Cabecalho titulo="Frontend" />
      <Cabecalho titulo="Cabeçalho" />
      <Cabecalho titulo="React" />

      <Link href="/fundamentos">Página Fundamentos</Link><br />
      <Link href="/clientes">Página Clientes</Link><br />
      </Pagina>
    </main>
  );
}
