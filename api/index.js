//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const axios = require("axios");
const { key, UrlApi } = process.env;
const { Videogames } = require("./src/db");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
    const { data } = await axios.get(
      `https://api.rawg.io/api/games?key=${key}`
    );
    // console.log(data.results[0].);

    data.results.forEach(async (videogames) => {
      try {
        await Videogames.create({
          name: videogames.name,
          description: videogames.slug,
          date: videogames.released,
          Ranking: videogames.rating_top,
          plataformas: videogames.platforms
            .map((plataform) => plataform.platform.name)
            .toString(",")
        });
      } catch (err) {
        console.log(err);
      }
    });
  });
});
