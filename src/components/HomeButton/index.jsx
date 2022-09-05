import React from "react";
import { MdHome } from "react-icons/md";
import './styles.scss';


const HomeButton = () => {
  return (
    <a href="/movies" className="float-button">
      <MdHome />
    </a>
  )
}

export default HomeButton