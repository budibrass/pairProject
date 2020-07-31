const express = require("express")
const router = express.Router()

const UsersController = require("../controllers/User")

// Read
router.get("/", UsersController.showUser)

// // Delete
router.get("/:id/delete", UsersController.delete)

module.exports = router