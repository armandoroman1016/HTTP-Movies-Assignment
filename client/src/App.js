import React, { useState } from "react";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import { Route } from "react-router-dom";
import Movie from "./Movies/Movie";
import FormikUpdates from './Movies/UpdateMovieForm'

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} movieList = {MovieList} />;
        }}
      />
      <Route 
          path = "/update-movie/:id"
          render = { props => {
            return <FormikUpdates {...props} savedList = {savedList}/>
        }}
        />
    </>
  );
};

export default App;
