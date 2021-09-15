import React from "react";
import { useArgs } from "@storybook/client-api";

import { default as MovieCardComponent } from ".";

export default {
  component: MovieCardComponent,
  title: "Component/MovieCard",
};

export const MovieCard = (args) => {
  const [{ inFavorite }, updateArgs] = useArgs();
  const toggleFavorite = () => {
    updateArgs({ inFavorite: !inFavorite });
  };
  return (
    <div style={{ width: "27.781rem" }}>
      <MovieCardComponent {...args} toggleFavorite={toggleFavorite} />
    </div>
  );
};

MovieCard.args = {
  movie: {
    poster_path:
      "http://image.tmdb.org/t/p/w300/au8scCY0oS9RRtgqeJbkIqyBj3U.jpg",
    title: "The Tomorrow War",
  },
  inFavorite: false,
};
