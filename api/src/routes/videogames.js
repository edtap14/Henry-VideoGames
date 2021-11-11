const express = require("express");
const server = express();
const axios = require("axios");
const key = "a7da8537df8b4e75a6065a0d8167857b";
const { v4: uuidv4 } = require("uuid");
const { Videogames } = require("../db");

server.use(express.json());

const message = "El videojuego no fue encontrado";

module.exports = {
  getAll: function async(req, res, next) {
    const videogames = axios.get(`https://api.rawg.io/api/games?key=${key}`);
    videogames
      .then((response) => {
        const videogameData = response.data.results.map((videogame) => {
          return {
            id: videogame.id,
            name: videogame.name,
            slug: videogame.slug,
            background_image: videogame.background_image,
            rating: videogame.rating,
            released: videogame.released,
            platforms: videogame.platforms,
            genres: videogame.genres
          };
        });
        res.status(200).json(videogameData);
      })
      .catch((error, message) => {
        res.status(404).json({ error: error });
      });
  },
  getByName: function async(req, res, next) {
    console.log(req);
    const videogame = axios.get(
      `https://api.rawg.io/api/games?key=${key}&search=${req.body.name}`
    );
    videogame
      .then((response) => {
        const videogameData = response.data.results.map((videogame) => {
          return {
            id: videogame.id,
            name: videogame.name,
            slug: videogame.slug,
            background_image: videogame.background_image,
            rating: videogame.rating,
            released: videogame.released,
            platforms: videogame.platforms,
            genres: videogame.genres
          };
        });
        res.status(200).json(videogameData);
      })
      .catch((error) => {
        res.send(error);
      });
  },
  getById: function async(req, res, next) {
    console.log(req.body.id);
    const videogame = axios.get(
      `https://api.rawg.io/api/games/${req.body.id}?key=${key}`
    );
    videogame
      .then((response) => {
        const datos = {
          id: response.data.id,
          name: response.data.name,
          slug: response.data.slug,
          background_image: response.data.background_image,
          rating: response.data.rating,
          released: response.data.released,
          platforms: response.data.platforms,
          genres: response.data.genres
        };
        res.status(200).json(datos);
      })
      .catch((error) => {
        res.send(error);
      });
  },
  getByGenre: function async(req, res, next) {
    console.log(req.body.genres);
    const videogame = axios.get(`https://api.rawg.io/api/genres?key=${key}`);
    videogame.then((response) => {
      const videogameData = response.data.results.map((videogame) => {
        return {
          id: videogame.id,
          name: videogame.name,
          slug: videogame.slug,
          image: videogame.image_background,
          games: videogame.games
        };
      });
      res.status(200).json(videogameData);
    });
  },
  createGame: function async(req, res, next) {
    console.log(req.body);
    const videogame = new Videogames({
      id: uuidv4(),
      name: req.body.name,
      description: req.body.slug,
      // background_image: req.body.background_image,
      Ranking: Math.round(req.body.rating),
      date: req.body.released,
      plataformas: req.body.platforms
      // genres: req.body.genres
    });
    videogame
      .save()
      .then(() => {
        res.status(201).json(videogame);
      })
      .catch((error) => {
        res.send(error);
      });
  }
};
