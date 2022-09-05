import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import DetailsPage from './pages/DetailsPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/movies" element={< MoviesPage />} />
        <Route exact path="/" element={< HomePage />} />
        <Route exact path="/movies/movie/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes;