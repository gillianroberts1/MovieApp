/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./App.css";

//b9a2b260

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=b9a2b260";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json()

    console.log(data.Search)
  };
  useEffect(() => {
    searchMovies('spiderman')
  }, []);

  return <div className="App"></div>;
};

export default App;
