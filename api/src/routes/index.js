const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const VideogameRouter = require("./videogames.js");
const router = Router();

router.get("/videogames", VideogameRouter.getAll);
router.get("/videogames/search", VideogameRouter.getByName);
router.get("/videogames/id", VideogameRouter.getById);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
