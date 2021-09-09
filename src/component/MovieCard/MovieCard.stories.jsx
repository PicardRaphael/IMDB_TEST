import React from 'react';

import {default as MovieCardComponent} from '.';

export default {
  component: MovieCardComponent,
  title: 'Component/MovieCard',

};

export const MovieCard = args => <div style={{ width: '27.781rem'}}><MovieCardComponent {...args} /></div>;

MovieCard.args = {
  movie: {
    poster_path: 'http://image.tmdb.org/t/p/w300/au8scCY0oS9RRtgqeJbkIqyBj3U.jpg',
    title: 'The Tomorrow War'
  }
};