import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    if (!savedList.includes(movie)) {
      setSavedList( [...savedList, movie] );
    } else {
      alert('Duplicate! Movie already saved.')
    }
  };

  const clearSavedList = () => {
    setSavedList( [] );
  };

  return (
    <div>
      <SavedList list={savedList} clearSavedList={clearSavedList}/>
      <Route exact path='/' component={MovieList} />
      <Route 
        path='/movies/:id' 
        render={(props) => <Movie {...props} addToSavedList={addToSavedList}/>}
      />
    </div>
  );
};

export default App;
