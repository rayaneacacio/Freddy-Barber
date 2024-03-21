import { ReactElement } from "react";
import { Container } from "./style";
import { Logo } from "../../components/Logo";
import { Contact } from "../../components/Contact";
import { Sobre } from "../Sobre";
import { Barbearia } from "../Barbearia";
import { Servicos } from "../Servicos";
import { Contatos } from "../Contatos";

export function Home(): ReactElement {
  function handleContact(): void {
    const divContatos = document.querySelector(".contatos")! as HTMLDivElement;

    window.scroll({
      top: (divContatos.offsetTop - 80),
      behavior: "smooth"
    });
  }

  return (
    <Container>
      <div>
        <header>
          <Logo />
          <Contact />
        </header>

        <main>
          <h1>Barbearia do Fred</h1>
          <p>Venha agendar seu corte com quem entende do assunto, veja os horarios disponiveis no nosso site.</p>
          <button onClick={ handleContact }>ENTRE EM CONTATO</button>
          <Contact />
        </main>
      </div>

      <Sobre />
      <Barbearia />
      <Servicos />
      <Contatos />

      <footer>FREDSON SANTOS - Copyright 2020</footer>
    </Container>
  )
}