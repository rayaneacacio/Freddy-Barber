import { ReactElement } from "react";
import { Container, Image } from "./style";
import { home, intersectionObserver } from "../../scripts/intersectionObserver";

export function Sobre(): ReactElement {
  if(home) {
    home.addEventListener("scroll", (): void => {
      const children = Array.from(document.querySelectorAll(".sobreABarbearia *")) as HTMLElement[];
      children.map(child => {
        intersectionObserver.observe(child);
      });

      if(window.innerWidth >= 1000) {
        intersectionObserver.observe(document.querySelector(".img")!);
      }
    });
  }

  return (
    <Container>
      <div className="sobreABarbearia">
        <div className="row"></div>
        <p>Sobre a Barbearia</p>
        <h2>Bem-vindo a Barbearia</h2>
        <p>Uma das barbearias mas tradicionais da cidade, somos especializados no mais diversos tipos de cortes, além de 
        excelentes profisssionais, para a segurança garantida de todos os clientes.</p>
      </div>

      <Image className="img">
        <div />
        <div />
      </Image>
    </Container>
  )
}