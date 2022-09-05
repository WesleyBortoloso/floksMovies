import React, { useState } from 'react';
import MainImage from '../../assets/images/main.png';
import LogoImage from '../../assets/images/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import "./styles.scss";

export default function HomePage() {
  const [searchMovie, setSearchMovie] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    window.location.href = `/movies?search=${searchMovie}`;
  }

  return (
    <>
      <div className='home-page'>
        <aside>
          <img src={MainImage} alt="Ilustração simbolizando objetos relacionados a filmes." />
          <strong>Confira os filmes mais comentados do momento!</strong>
          <p>Leia uma sinopse dos nossos escritores e encontre o filme desejado.</p>
        </aside>
        <main>
          <div className='main-content'>
            <img src={LogoImage} alt="Ilustração simbolizando objetos relacionados a filmes." />
            <h1>Os filmes mais recentes já estão aqui!</h1>
            <form onSubmit={handleSubmit} >
              <Input placeholder='Procure por um filme...' onChange={(e) => setSearchMovie(e.target.value)} />
              <Button type='submit' title='Procurar Filme' />
            </form>
            <h3>OU</h3>
            <a href="/movies"> Ver todos os filmes </a>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}