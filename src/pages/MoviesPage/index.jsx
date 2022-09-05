import React, { useEffect, useState } from 'react';
import './styles.scss'
import axios from 'axios';
import MovieCard from '../../components/MovieCard';
import Header from '../../components/Header/index';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import ScrollToTop from 'react-scroll-to-top';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';
import { useSearchParams } from 'react-router-dom';
import NotFound from '../../assets/images/notfound.png';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const API = "https://api.themoviedb.org/3/discover/movie";
  const api_key = "7cfc85516ca2247cf6e74cb94dc31857";
  const search_API = "https://api.themoviedb.org/3/search/movie";

  const searchMovie = searchParams.get("search")

  useEffect(() => {
    setIsLoading(true);

    if (searchMovie) {
      axios.get(search_API, {
        params: {
          api_key,
          query: searchMovie,
          language: "pt-BR",
          page
        }
      }).then(res => {
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages);
        setIsLoading(false);
      });
    }
    else {
      axios.get(API, {
        params: {
          api_key,
          sort_by: "popularity.desc",
          language: "pt-BR",
          page
        }
      }).then(res => {
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      });
    }
  }, [page]);

  const downPage = () => {
    if (!(page <= 1)) {
      setPage(page - 1);
    }
  }

  const upPage = () => {
    if (!(page >= totalPages)) {
      setPage(page + 1);
    }
  }

  const filterMovies = (filter) => {
    setIsLoading(true);
    axios.get(`https://api.themoviedb.org/3/movie/${filter}`, {
      params: {
        api_key,
        language: "pt-BR",
        page
      }
    }).then(res => {
      setMovies(res.data.results);
      setTotalPages(res.data.total_pages);
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    });
  }

  const moviesSection = (
    <>
      {movies < 1 ?
        <div className='not-found'>
          <h1 className='notfound-title'>Não foi encontrado nenhum filme baseado na sua pesquisa, tente realizar uma busca utilizando outros termos!</h1>
          <img src={NotFound} alt="" />
        </div> :
        <>
          <h1 className="movies-title">Prepare a pipoca e encontre o melhor filme para você!</h1>
          <div className='movies-filter'>
            <button onClick={() => filterMovies(('upcoming'))} type="button"> Em breve </button>
            <button onClick={() => filterMovies('top_rated')} type="button"> Melhores avaliados</button>
            <button onClick={() => filterMovies('popular')} type="button"> Populares </button>
            <button onClick={() => filterMovies('now_playing')} type="button"> Em cartaz </button>
          </div>
          <div className="movies-grid" >
            {
              movies.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
              ))
            }
          </div>
          <div className='movies-footer'>
            <ScrollToTop smooth color="orange" />
            <button onClick={downPage}><MdKeyboardArrowLeft /></button>
            <h4>{page} de {totalPages}</h4>
            <button onClick={upPage}> <MdKeyboardArrowRight /> </button>
          </div>
          <Footer />
        </>

      }
    </>
  )

  return (
    <>
      <Header />
      <div className='movies-page'>
        {isLoading ? <Loader /> : moviesSection}
      </div>
    </>
  )
}