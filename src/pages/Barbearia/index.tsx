import { ReactElement } from "react";
import { Container } from "./style";
import { AspasSvg } from "../../assets/svgs/aspas";

export function Barbearia(): ReactElement {
  return (
    <Container>
      <AspasSvg />
      <h1>A melhor barbearia da Bahia</h1>
      <h2>Marcos Souza</h2>
    </Container>
  )
}