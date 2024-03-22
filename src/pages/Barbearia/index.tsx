import { ReactElement } from "react";
import { Container } from "./style";
import { AspasSvg } from "../../assets/svgs/aspas";

export function Barbearia(): ReactElement {
  const home = document.querySelector("body > div") as HTMLDivElement;
  const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const htmlElement = entry.target as HTMLDivElement;
        htmlElement.style.animation = "animateSvg 1s forwards";
      };
    });
  }, {
    threshold: 1
  });

  if(home) {
    home.addEventListener("scroll", (): void => {
      intersectionObserver.observe(document.querySelector(".barbearia svg")!);
    })
  }

  return (
    <Container className="barbearia">
      <AspasSvg />
      <h1>A melhor barbearia da Bahia</h1>
      <h2>Marcos Souza</h2>
    </Container>
  )
}