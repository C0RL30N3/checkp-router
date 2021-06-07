import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// Components
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";

import Footer from "./components/Footer";
import AddMovie from "./components/AddMovie";
import MovieDetails from "./components/MovieDetails";
//Router
import { Route, Switch } from "react-router-dom";

function App() {
  const [ListOfMovies, setListOfMovies] = useState([
    {
      title: "Jumanji",
      description:
        " The story focuses on a group of teenagers who come across Jumanji—now transformed into a video game—twenty-one years after the events of the 1995 film. ",
      posterUrl: "http://cima4u.io/wp-content/uploads/00-2312.jpg",
      rate: {
        size: 30,
        count: 5,
        value: 5,
        edit: false,
      },
      id: "1",
      trailerlink:"https://www.youtube.com/embed/rBxcF-r9Ibs"
    },
    {
      title: "joker",
      description:
        "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society",
      posterUrl: "http://cima4u.io/wp-content/uploads/0-9760.jpg",
      rate: {
        size: 30,
        count: 5,
        value: 4,
        edit: false,
      },
      id: "2",
      trailerlink:"https://www.youtube.com/embed/t433PEQGErc"
      },
    {
      title: "Pirates Of the caribbean",
      description:
        "Jack Sparrow and Barbossa embark on a quest to find the elusive fountain of youth, only to discover that Blackbeard and his daughter are after it too. ",
      posterUrl: "http://cima4u.io/wp-content/uploads/1000-41.jpg",
      rate: {
        size: 30,
        count: 5,
        value: 3,
        edit: false,
      },
      id: "3",
      trailerlink:"https://www.youtube.com/embed/DRiDBQtIAnQ"
      },
    {
      title: "Dachra",
      description:
        "  An investigation into witchcraft leads a trio of journalism students to a mysterious town marked by sinister rituals. Inspired by true events.",
      posterUrl:
        "https://imgr.cineserie.com/2018/09/1356320.jpg?imgeng=/f_jpg/cmpr_0/w_212/h_318/m_cropbox&ver=1",
      rate: {
        size: 30,
        count: 5,
        value: 4,
        edit: false,
      },
      id: "4",
      trailerlink:"https://www.youtube.com/embed/a5_WTF7KtYQ"
      },
   
    
   
  ]);

  const modification = (modif) =>
    modif
      ? setListOfMovies([
          ...ListOfMovies,
          {
            title: modif.title,
            description: modif.description,
            posterUrl: modif.posterURl,
            rate: {
              size: 30,
              count: 5,
              value: modif.rate.value,
              edit: false,
            },
            id: Math.round(),
            watched: false,
          },
        ])
      : null;





  const [search, setSearch] = useState("");
  const searchbytitle = (value) => {
    setSearch(value);
  };
  const [ratefiltring, setRatefiltring] = useState(0);
  const searchbyrate = (value) => {
    setRatefiltring(value);
  };
  const handleRemove = (id) =>
    setListOfMovies(ListOfMovies.filter((el) => el.id !== id));

  return (
    <div className="App" >
      <h1 style={{color:'white', fontSize:'150px'}}> Movie App</h1>
      <Switch>
        <Route exact path="/">
         
          <Filter searchbytitle={searchbytitle} searchbyrate={searchbyrate} />
          <AddMovie  modification={modification} />
          <MovieList
            ListOfMovies={ListOfMovies}
            handleRemove={handleRemove}
            search={search}
            ratefiltring={ratefiltring}
          />
         
         
          <Footer />
        </Route>
        <Route
          path="/:title"
          render={(props) => <MovieDetails data={ListOfMovies} {...props} />}
        />
        
      </Switch>
    </div>
  );
}

export default App;
