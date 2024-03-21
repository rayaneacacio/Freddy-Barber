import { ReactElement } from "react";
import { Container, Image } from "./style";

export function Sobre(): ReactElement {
  return (
    <Container>
      <div>
        <div className="row"></div>
        <p>Sobre a Barbearia</p>
        <h2>Bem-vindo a Barbearia</h2>
        <p>Uma das barbearias mas tradicionais da cidade, somos especializados no mais diversos tipos de cortes, além de 
        excelentes profisssionais, para a segurança garantida de todos os clientes.</p>
      </div>

      <Image>
        <div />
        <div />
      </Image>
    </Container>
  )
}