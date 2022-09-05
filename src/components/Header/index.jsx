import React, { useState } from 'react';
import './styles.scss';
import LogoImage from '../../assets/images/logo.png'
import Input from '../../components/Input/index'
import Button from '../Button';

const Header = () => {
  const [searchMovie, setSearchMovie] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/movies?search=${searchMovie}`;
  }


  return (
    <header>
      <a href="/">
        <img src={LogoImage} alt="Imagem referenciando a logo da empresa." />
      </a>
      <form onSubmit={handleSubmit} className='nav-search'>
        <Input placeholder="Nome do filme..." onChange={(e) => setSearchMovie(e.target.value)} />
        <Button title="Procurar" type="submit" />
      </form>
    </header>
  )
}

export default Header