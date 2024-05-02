import React from 'react';
import classes from './MovieList.module.css';

class MovieList extends React.Component {
   render() {
      const movies = ["Pride and Prejudice", "Howl's Moving Castle", "Big Mama's House 17: Mama is the Size of the Sun", "Doodle Bob: The Movie"];
      const image = <img src='https://u-static.fotor.com/images/text-to-image/result/PRO-4e095b9ff0764af5bf748a293bb30946.jpg'/>
      return (
      <div class= "similarComponents">
         <h3 className = {classes.movieHeading}>Movies I Watched This Month</h3>
         <ol>
            <li className={classes.movieText}>{movies[0]}</li>
            <li className={classes.movieText}>{movies[1]}{image}</li>
            <li className={classes.movieText}>{movies[2]}</li>
            <li className={classes.movieText}>{movies[3]}</li>
         </ol>
      </div>
      );
   }
}

export default MovieList;