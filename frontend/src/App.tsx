import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import MovieList from './movie/MovieList';

function App() {
  // My application that contains a nav bar with the 3 attached pages and their views
  return (
    <div className="App">
      <header className="m3">
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <h2>The Joel Hilton Film Collection &nbsp; &nbsp; &nbsp;</h2>
            </Link>

            <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
              <ul className="navbar-nav flex-grow-1">
                <li className="nav-item">
                  <Link
                    className="btn btn-primary text-decoration-none text-white "
                    to="/"
                  >
                    Home
                  </Link>
                </li>{' '}
                &nbsp;&nbsp;
                <li className="nav-item">
                  <Link
                    className="btn btn-primary text-decoration-none text-white "
                    to="/podcast"
                  >
                    Podcast
                  </Link>
                </li>{' '}
                &nbsp;&nbsp;
                <li className="nav-item">
                  <Link
                    className="btn btn-primary text-decoration-none text-white "
                    to="/movie"
                  >
                    Movie Collection
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/movie" element={<MovieList />} />
      </Routes>
    </div>
  );
}

export default App;
