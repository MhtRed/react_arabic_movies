import { Container } from "react-bootstrap";
import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  //Get All The Movies On The Main Home
  const getAllMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=e8f42870fffe08e7e7bbb870491ee1fe&language=ar&page=1"
    );
    setMovies(response.data.results);
    console.log(response.data.results);
    setMovies(response.data.results);
    setTotalPages(response.data.total_pages);
  };
  //Get The Pages Of Movies Based On Page Number
  const getPages = async (page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=e8f42870fffe08e7e7bbb870491ee1fe&language=ar&page=${page}`
    );
    setMovies(response.data.results);
    setTotalPages(response.data.total_pages);
    setPageNumber(response.data.page);
  };
  //Get The Search results Based On Search Word
  const search = async (searchValue) => {
    if (searchValue !== "") {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=e8f42870fffe08e7e7bbb870491ee1fe&language=en-US&query=${searchValue}&page=1&include_adult=false
          `
      );
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    }
  };
  useEffect(() => {
    getAllMovies();
  }, []);
  return (
    <div className="App">
      <NavBar search={search} />
      <BrowserRouter>
        <Container>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  pageNumber={pageNumber}
                  getPages={getPages}
                  totalPages={totalPages}
                  movies={movies}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
