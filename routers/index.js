const express = require("express")
const router = express.Router()
const castsProduct = require("./products")
const usersRouter = require("./users")
// const productionHouseRouter = require("./productionHouses")
const Controller = require("../controllers/Controller")

router.get("/", Controller.home)

router.use("/products", castsProduct)
router.use("/users", usersRouter)
// router.use("/productionHouses", productionHouseRouter)

module.exports = router