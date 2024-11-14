import React from "react";
import { Link, Navigate } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import { Container, Logo, Menu } from "./styles";

const Header = () => {
  const handleLogooff = () => {
    localStorage.clear();
    window.location.href = "/login";
  }
  const handleAnnounce = () => {
    window.location.href = "/perfil";
  }

  const userLogged = localStorage.getItem('Yt');

  return (
    <Container>
      <Logo>
        <Link to='/'><img src={LogoImg} alt="" /></Link>
      </Logo>
      <Menu>
        <ul>
          {!userLogged ?
            <><li><Link to='/login'><span>Login</span></Link></li><li><Link to='/cadastro'><span>Cadastre-se</span></Link></li></>
            :
            <><li><Link onClick={handleLogooff}><span>Desconectar</span></Link></li><li><Link onClick={handleAnnounce}><span>Anunciar imóvel</span></Link></li></>
          }
        </ul>
      </Menu>
    </Container>
  )
}

export default Header;