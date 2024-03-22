import { ReactElement } from "react";
import { Container } from "./style";
import { LocationSvg } from "../../assets/svgs/location";
import { WhatsappSvg } from "../../assets/svgs/whatsapp";
import { EmailSvg } from "../../assets/svgs/email";
import { FacebookSvg } from "../../assets/svgs/facebook";
import { InstagramSvg } from "../../assets/svgs/instagram";
import { Logo } from "../../components/Logo";

export function Contatos(): ReactElement {
  const home = document.querySelector("body > div") as HTMLDivElement;
  const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const htmlElement = entry.target as HTMLDivElement;
        htmlElement.style.animation = "animateToRight 0.5s forwards";
      };
    });
  }, {
    threshold: 1
  });


  if(home) {
    home.addEventListener("scroll", (): void => {
      const links = Array.from(document.querySelectorAll(".links a"))!;

      links.map(link => {
        intersectionObserver.observe(link);
      });
    })
  }

  return (
    <Container className="contatos">
      <div className="titleDesktop">
        <h2>Entre contato agora mesmo!</h2>
      </div>

      <div className="row" />
      <h2 className="titleMobile">Entre contato agora mesmo!</h2>
      
      <div className="content">
        <div className="links">
          <a href="#">
            <WhatsappSvg />
            <p>(73) 9 9932-3341</p>
          </a>

          <a href="mailto:fredson673@gmail.com" target="_blank">
            <EmailSvg />
            <p>fredson673@gmail.com</p>
          </a>

          <a href="#">
            <FacebookSvg />
            <p>Freddy Barber</p>
          </a>

          <a href="#">
            <InstagramSvg /> 
            <p>@FreddyBarber</p>
          </a>

          <a href="#">
            <LocationSvg />
            <p>Rua cafezal, 367-Colina Verde-BA</p>
          </a>
        </div>

        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4270.66775011955!2d-39.745947702871234!3d-17.520276960158252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1711049046170!5m2!1spt-BR!2sbr" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    
      <div className="logo">
        <Logo />
        <div>
          <a href="#"> <FacebookSvg /> </a>
          <a href="#"> <InstagramSvg /></a>
          <a href="#"> <WhatsappSvg /> </a>
        </div>
      </div>
    </Container>
  )
}