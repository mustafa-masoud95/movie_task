import React from 'react';
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom'
import Movie from './pages/Movie'
import NotFound from './pages/NotFound'
import TV from './pages/TV';
import MovieDetail from './pages/MovieDetail';
import ShowDetail from './components/ShowDetail';
import Search from './pages/Search';
import Explore from './pages/Explore';
import TvDetail from './pages/TvDetail';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="movie" element={<Movie/>}/>
          <Route path="movie/:id" element={<MovieDetail/>}/>
          <Route path="explore/:id" element={<TvDetail/>}/>
          <Route path="search/:id" element={<MovieDetail/>}/>
          <Route path="tv/:id" element={<TvDetail/>}/>
          <Route path="/:id" element={<TvDetail/>}/>
          <Route path="tv" element={<TV/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path="explore" element={<Explore/>}/>
          {/* <Route path="/*" element={<NotFound/>}/> */}

        </Route>
      </Routes>
      
      

    </div>
  );
}

export default App;
