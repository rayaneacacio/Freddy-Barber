import { ReactElement } from "react";
import { Container } from "./style";
import { Logo } from "../../components/Logo";
import { Contact } from "../../components/Contact";

export function Home(): ReactElement {
  return (
    <Container>
      <header>
        <Logo />
        <Contact />
      </header>

      <main>
        <h1>Barbearia do Fred</h1>
        <p>Venha agendar seu corte com quem entende do assunto, veja os horarios disponiveis no nosso site.</p>
        <button>AGENDE SEU CORTE</button>
        <Contact />
      </main>
    </Container>
  )
}