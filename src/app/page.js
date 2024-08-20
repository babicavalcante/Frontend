
import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <Button variant="primary">Primary</Button>{' '}

      <Cabecalho titulo="Página Inicial" sub="Barbara" />

      <Link href="/fundamentos">Página Fundamentos</Link><br />
      <Link href="/clientes">Página Clientes</Link><br />

    </main>
  );
}
