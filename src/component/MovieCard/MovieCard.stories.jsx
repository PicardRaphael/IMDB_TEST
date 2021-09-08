import React from 'react';

import {default as MovieCardComponent} from '.';

export default {
  component: MovieCardComponent,
  title: 'Component/MovieCard',

};

export const MovieCard = args => <div style={{ width: '13.75rem'}}><MovieCardComponent {...args} /></div>;

MovieCard.args = {
  movie: {
    poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/au8scCY0oS9RRtgqeJbkIqyBj3U.jpg',
    title: 'The Tomorrow War'
  }
};