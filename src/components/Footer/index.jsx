import React from "react";
import LogoImage from '../../assets/images/logo.png';
import './styles.scss';
import { AiOutlineWhatsApp, AiFillInstagram, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer-rights">
      <p>© 2022 Floks, Todos os direitos Reservados</p>
      <img src={LogoImage} alt="Imagem referenciando a logo da empresa." />
      <div className="footer-socials">
        <a href="/movies"><AiOutlineWhatsApp /></a>
        <a href="/movies"><AiFillInstagram /></a>
        <a href="https://www.github.com/wesleybortoloso"><AiFillGithub /></a>
      </div>
    </footer>
  )
}

export default Footer