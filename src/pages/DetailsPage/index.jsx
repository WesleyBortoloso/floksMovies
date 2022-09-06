import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import { MdOutlineStarRate } from "react-icons/md";
import HomeButton from "../../components/HomeButton";
import MovieCard from "../../components/MovieCard";
import Footer from "../../components/Footer";
import './styles.scss';



export default function DetailsPage() {
  let params = useParams()
  const movieId = params.id
  const Movie_API = `https://api.themoviedb.org/3/movie/${movieId}`;
  const Trending_API = `https://api.themoviedb.org/3/trending/movie/day`;
  const Provider_API = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers`;
  const api_key = "7cfc85516ca2247cf6e74cb94dc31857";

  const [isLoading, setIsLoading] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const [movieProvider, setMovieProvider] = useState([]);
  const trendMovies = trendingMovies.slice(0, 3);

  useEffect(() => {
    axios.get(Provider_API, {
      params: {
        api_key,
        language: "pt-BR"
      }
    })
      .then(res => {
        setMovieProvider(res.data.results['AD'].flatrate[0]);
      });
  }, [Provider_API]);

  useEffect(() => {
    setIsLoading(true)
    axios.get(Movie_API, {
      params: {
        api_key,
        language: "pt-BR"
      }
    })
      .then(res => {
        setMovie(res.data);
        setIsLoading(false);
      });
  }, [Movie_API]);

  useEffect(() => {
    axios.get(Trending_API, {
      params: {
        api_key,
        language: "pt-BR"
      }
    })
      .then(res => {
        setTrendingMovies(res.data.results);
      });
  }, [Trending_API]);

  const detailsSection = (
    <>
      <Header />
      <section className="page-details">
        <div className="movie-title">
          <h1>{movie.title}</h1>
          <img src={`https://image.tmdb.org/t/p/w1280${movieProvider.logo_path}`} alt="" className="provider-logo" />
        </div>
        <section className="details-section">
          <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
            alt={`Imagem referenciando o filme ${movie.title}`} />
          <div className="movie-details">
            <p className="movie-tagline">{movie.tagline}</p>
            <p className="movie-description">{movie.overview}</p>
            <p className="movie-rate"><MdOutlineStarRate />{movie.vote_average}</p>
            <p className="movie-release">Data de estreia: {movie.release_date} </p>
          </div>
        </section>
        <HomeButton />
      </section>
      <section className="trend-section">
        <h1 className="trend-title"> Não é o ideal? Temos algumas sugestões pra você!</h1>
        <div className="trend-movies">
          {
            trendMovies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))
          }
        </div>
      </section>
      <Footer />
    </>
  )

  return (
    <>
      {isLoading ? <Loader /> : detailsSection}
    </>
  )
}