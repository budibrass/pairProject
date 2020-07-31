const express = require("express")
const router = express.Router()

const ProductsController = require("../controllers/Product")

// Read
router.get("/", ProductsController.showProduct)

// Create
router.get("/add", ProductsController.addGet)
router.post("/add", ProductsController.addPost)

// detail product
router.get("/detail", ProductsController.showDetailProduct)

// // Update
router.get("/:id/edit", ProductsController.editGet)
router.post("/:id/edit", ProductsController.editPost)

// // Delete
router.get("/:id/delete", ProductsController.delete)

//beli
router.get("/:id/beli", ProductsController.delete)

module.exports = router