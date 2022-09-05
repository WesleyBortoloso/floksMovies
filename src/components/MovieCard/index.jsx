import React from "react";
import './styles.scss';
import { MdOutlineStarRate } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";

const API_images = "https://image.tmdb.org/t/p/w1280/";

const truncate = (overview, words) => {
  return overview.split(" ").splice(0, words).join(" ");
}

const MovieCard = ({ id, title, vote_average, overview, poster_path }) => {
  return (
    <>
      <Link className="movie" to={`/movies/movie/${id}`}>
        <div className="back-card">
          <h1 className="back-title">Ver detalhes do filme</h1>
          <BsBoxArrowUpRight />
        </div>
        <div className="front-card">
          <div className="cover">
            <img src={API_images + poster_path} alt={title} />
          </div>
          <div className="info">
            <p className="title">{title}</p>
            <p className="overview">{truncate(overview, 8)}... </p>
            <span className="rating"><MdOutlineStarRate />{vote_average}</span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MovieCard;