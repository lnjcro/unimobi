import React, { Fragment } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";
import LogoImg from "../../assets/logo.png"
import { Container, Copy, Item } from "./styles";

const Footer = () => {
  return (
    <Fragment>
      <Container>
        <Item>
          <img src={LogoImg} alt="" />
          <p>Aqui você encontra o imóvel dos seus sonhos!</p>
          <nav>
            <li><span><FaFacebook size={32} /></span></li>
            <li><span><FaInstagram size={32} /></span></li>
            <li><span><FaWhatsapp size={32} /></span></li>
          </nav>
        </Item>
      </Container>
      <Copy>
        <ul>
          <li><span>Termos de Uso
          </span></li>
          <li><span>Política de Privacidade
          </span></li>
          <li><span>Política de Cookies</span></li>
        </ul>
      </Copy>
    </Fragment>
  )
}

export default Footer;