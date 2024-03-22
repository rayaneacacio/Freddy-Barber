import { ReactElement, useState } from "react";
import { Container, Carrossel } from "./style";
import { TesouraSvg } from "../../assets/svgs/tesoura";
import { CabeloSvg } from "../../assets/svgs/cabelo";
import { CortadorDeCabelo } from "../../assets/svgs/cortadorDeCabelo";
import { NavalhaSvg } from "../../assets/svgs/navalha";
import corte1 from "../../assets/imgs/corte1.png";
import corte2 from "../../assets/imgs/corte2.png";
import corte3 from "../../assets/imgs/corte3.png";
import corte4 from "../../assets/imgs/imgpag2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useEffect } from "react";
register();

export function Servicos(): ReactElement {
  const [ slidesPerView, setSlidesPerview ] = useState(1);

  const slides: string[] = [
    corte1,
    corte2,
    corte3,
    corte4
  ];

  const home = document.querySelector("body > div") as HTMLDivElement;
  const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const htmlElement = entry.target as HTMLDivElement;

        if(htmlElement.classList.contains("row")) {
          htmlElement.style.animation = "animateWidthRow 0.5s forwards";
          htmlElement.style.animationDelay = "0.3s";
        } else {
          htmlElement.style.animation = "animateWidthText 1s forwards";
        }
        
      };
    });
  }, {
    threshold: 1
  });

  const swiperObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const htmlElement = entry.target as HTMLDivElement;
        htmlElement.style.animation = "animateToTop 1s forwards";
      };
    });
  }, {
    threshold: 0
  });

  if(home) {
    home.addEventListener("scroll", (): void => {
      const p = document.querySelector(".servicos p")!;
      const swiper = document.querySelector(".swiper")!;
      const rows = Array.from(document.querySelectorAll(".servicos .row"))!;

      intersectionObserver.observe(p);
      swiperObserver.observe(swiper);

      rows.map(row => {
        intersectionObserver.observe(row);
      });
    })
  }

  function handleResize(): void {
    if(window.innerWidth >= 1400) {
      setSlidesPerview(3);
      return;
    }
    
    if(window.innerWidth >= 1000) {
      setSlidesPerview(2);
      return;
    }

    setSlidesPerview(1);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }

  }, []);

  return (
    <Container className="servicos">
      <div className="row" />
      <p>Nossos Serviços</p>
      <h2>Conheça as especialidades da casa</h2>

      <div className="description">
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

      <Carrossel className="carrossel">
        <div>
          <Swiper slidesPerView={ slidesPerView } navigation loop={ true }>
            {
              slides?.map((img: string, index: number) => (
                <SwiperSlide key={ index }>
                  <div className="imgSlide" style={{ backgroundImage: `url(${ img })` }} />

                  <div className="descriptionSlide">
                    <div />
                    <div>
                      <h2>Side Parting</h2>
                      <p>Uma das barbearias mas tradicionais da cidade, somos especializados no mais diversos tipos de 
                      cortes, além de excelentes profisssionais, para a segurança garantida de todos os clientes</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </Carrossel>
    </Container>
  )
}