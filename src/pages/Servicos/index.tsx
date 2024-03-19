import { ReactElement } from "react";
import { Container } from "./style";
import { TesouraSvg } from "../../assets/svgs/tesoura";
import { CabeloSvg } from "../../assets/svgs/cabelo";
import { CortadorDeCabelo } from "../../assets/svgs/cortadorDeCabelo";
import { NavalhaSvg } from "../../assets/svgs/navalha";

export function Servicos(): ReactElement {
  return (
    <Container>
      <div className="row" />
      <p>Nossos Serviços</p>
      <h2>Conheça as especialidades da casa</h2>

      <div>
        <div>
          <TesouraSvg />
          <h1>Cabelo</h1>
          <div className="row" />
          <p>Uma das barbearias mas tradicionais da cidade, somos especializados no mais diversos tipos de cortes, além de 
          excelentes profisssionais, para a segurança garantida de todos os clientes</p>
        </div>

        <div>
          <CabeloSvg />
          <h1>Cabelo</h1>
          <div className="row" />
          <p>Uma das barbearias mas tradicionais da cidade, somos especializados no mais diversos tipos de cortes, além de 
          excelentes profisssionais, para a segurança garantida de todos os clientes</p>
        </div>

        <div>
          <CortadorDeCabelo />
          <h1>Cabelo</h1>
          <div className="row" />
          <p>Uma das barbearias mas tradicionais da cidade, somos especializados no mais diversos tipos de cortes, além de 
          excelentes profisssionais, para a segurança garantida de todos os clientes</p>
        </div>

        <div>
          <NavalhaSvg />
          <h1>Cabelo</h1>
          <div className="row" />
          <p>Uma das barbearias mas tradicionais da cidade, somos especializados no mais diversos tipos de cortes, além de 
          excelentes profisssionais, para a segurança garantida de todos os clientes</p>
        </div>
      </div>
    </Container>
  )
}