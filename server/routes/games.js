/**
 * /server/routes/games.js
 * Define route functionality for Games API Path
 *
 * @category   Express Server Backend
 * @package    GameTrack
 * @author     Anthony McGrath <akm@anthonykyle.co.nz>
 * @copyright  2021 Anthony McGrath
 */

// Include Express Server
const express = require("express");

// Include DB Functionality
const {} = require("../db/games");

// Define Router
const router = express.Router();
const path = require("path");

// Define REST API Endpoints with HTTP Request Types And Destination Functions
router.get("/", );

// Global Error Handler For API Requests
router.use(errorHandler);

/*
function functionTemplate(req, res) {
  return dbFn().then((data) => {
    const sanitized = data.map((item) => {
      return {
        key: item.value
      }
    })
    return res.json(sanitized)
  })
}
*/

function errorHandler(err, req, res, next) {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ message: "Access denied." });
  } else {
    res.status(500).json({ message: "Something went RATHER wrong. Shame." });
  }
}

module.exports = router