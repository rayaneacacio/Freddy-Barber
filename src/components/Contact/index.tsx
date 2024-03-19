import { ReactElement } from "react";
import { Container } from "./style";
import { LocationSvg } from "../../assets/svgs/location";
import { WhatsappSvg } from "../../assets/svgs/whatsapp";

export function Contact(): ReactElement {
  return (
    <Container>
       <div>
        <LocationSvg />
        <p>Rua cafezal, 000 - Colina Verde - BA</p>
      </div>

      <div>
        <WhatsappSvg />
        <p>(73) 99932-3341</p>
      </div>
    </Container>
  )
}