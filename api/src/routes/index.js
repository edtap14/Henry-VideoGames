const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const VideogameRouter = require("./videogames.js");
const router = Router();

router.get("/videogames", VideogameRouter.getGames);
// router.get("/otraruta", VideogameRouter.getAll);
router.get("/videogames/search", VideogameRouter.getByName);
router.get("/videogames/details", VideogameRouter.getById);
router.get("/videogames/genres", VideogameRouter.getByGenre);
router.post("/videogames/create", VideogameRouter.createGame);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
