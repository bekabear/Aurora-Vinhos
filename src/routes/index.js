const express = require("express")
const HomeController = require("../controller/HomeController.js");
const ServicosController = require("../controller/ServicosController.js");
const NossaEmpresaController = require("../controller/NossaEmpresaController.js");
const NoticiasController = require("../controller/NoticiasController.js");
const ContatoController = require("../controller/ContatoController.js");

const router = express.Router();

router.get("/", HomeController.index);
router.get("/servicos", ServicosController.index);
router.get("/nossaEmpresa", NossaEmpresaController.index);
router.get("/noticias", NoticiasController.index);
router.get("/contato", ContatoController.index);
router.post("/contato", ContatoController.send);

module.exports = router;

