import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span key={movie} className="saved-movie">{movie.title}</span>
    ))}
    <button className="clear-button" onClick={props.clearSavedList}>Clear</button>
    <Link to="/">
      <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
