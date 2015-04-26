#!/usr/bin/env node
var getReview = function (movie){

  switch(movie){

  case "Toy Story 2":
  title = "Great story. Mean prospector.";
  break;

  case "Finding Nemo":
  title = "Cool animation, and funny turtles.";
  break;

  case "The Lion King":
  title = "Great songs.";
  break;

  default:
  title = "I dont know";
  }
};

getReview("Toy Story 2");