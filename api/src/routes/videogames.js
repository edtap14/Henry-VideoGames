const express = require("express");
const server = express();
const axios = require("axios");
const key = "a7da8537df8b4e75a6065a0d8167857b";
const { v4: uuidv4 } = require("uuid");
const { Videogames } = require("../db");

server.use(express.json());

module.exports = {
  getGames: async function (req, res) {
    let arr = [];
    let x = [];
    for (let i = 1; i < 6; i++) {
      let videogames = await axios.get(
        `https://api.rawg.io/api/games?key=${key}&page=${i}`
      );
      // console.log(videogames);
      let data = await videogames.data.results.map((g) => {
        return {
          id: g.id,
          name: g.name,
          slug: g.slug,
          background_image: g.background_image,
          rating: g.rating,
          released: g.released,
          platforms: g.platforms.map((p) => {
            return {
              name: p.platform.name
            };
          }),
          genres: g.genres.map((gen) => {
            return {
              name: gen.name
            };
          })
        };
      });

      arr.push(data);
    }

    const infoConcat = arr[0].concat(arr[1], arr[2], arr[3], arr[4]);
    res.json(infoConcat);
  },

  // getAll: function async(req, res, next) {
  //   const videogames = axios.get(
  //     `https://api.rawg.io/api/games?key=${key}&page_size=80`
  //   );
  //   videogames
  //     .then((response) => {
  //       console.log(response);
  //       const videogameData = {
  //         next: response.data.next,
  //         previus: response.data.previous,
  //         data: response.data.results.map((g) => {
  //           return {
  //             id: g.id,
  //             name: g.name,
  //             slug: g.slug,
  //             background_image: g.background_image,
  //             rating: g.rating,
  //             released: g.released,
  //             platforms: g.platforms.map((p) => {
  //               return {
  //                 name: p.platform.name
  //               };
  //             }),
  //             genres: g.genres.map((gen) => {
  //               return {
  //                 name: gen.name
  //               };
  //             })
  //           };
  //         })
  //       };
  //       // res.send("ohl");
  //       res.status(200).json(videogameData);
  //     })
  //     .catch((error, message) => {
  //       res.status(400).json({ error: error });
  //     });
  // },
  // // no mover
  getByName: function async(req, res, next) {
    console.log(req);
    const videogame = axios.get(
      `https://api.rawg.io/api/games?key=${key}&search=${req.query.name}`
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
    console.log(req.query.id);
    const videogame = axios.get(
      `https://api.rawg.io/api/games/${req.query.id}?key=${key}`
    );
    videogame
      .then((response) => {
        // console.log(response.data);
        const datos = {
          id: response.data.id,
          name: response.data.name,
          description: response.data.description_raw,
          released: response.data.released,
          update: response.data.updated,
          background_image: response.data.background_image,
          website: response.data.website,
          rating: response.data.rating,
          reviws_count: response.data.reviws_count,
          platforms: response.data.platforms.map((p) => {
            return {
              name: p.platform.name
            };
          }),
          genres: response.data.genres.map((gen) => {
            return {
              name: gen.name
            };
          })
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
