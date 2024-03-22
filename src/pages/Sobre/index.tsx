import { ReactElement } from "react";
import { Container, Image } from "./style";

export function Sobre(): ReactElement {
  const home = document.querySelector("body > div") as HTMLDivElement;
  const TextObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const htmlElement = entry.target as HTMLDivElement;

        if(htmlElement.classList.contains("row")) {
          htmlElement.style.animation = "animateHeightRow 1s forwards";
        } else {
          htmlElement.style.animation = "animateToBottom 1s forwards";
        }
      };
    });
  }, {
    threshold: 1
  });

  if(home) {
    home.addEventListener("scroll", (): void => {
      const children = Array.from(document.querySelectorAll(".sobreABarbearia *")) as HTMLElement[];

      children.map(child => {
        TextObserver.observe(child);
      });
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