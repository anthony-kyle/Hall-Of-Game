/**
 * Server.js
 * Define server functionality and include routes
 *
 * @category   Express Server Backend
 * @package    GameTrack
 * @author     Anthony McGrath <akm@anthonykyle.co.nz>
 * @copyright  2021 Anthony McGrath
 */

// Require NPM Modules
const path = require("path");
const express = require("express");

// Link Route Files to Vars
const gameRoutes = require("./routes/games");
const userRoutes = require("./routes/users");

// Create Server
const server = express();

// Force SSL if live
if (process.env.NODE_ENV === "production") {
  server.use((req, res, next) => {
    if (req.header("x-forwarded-proto") !== "https")
      res.redirect(`https://${req.header("host")}${req.url}`);
    else next();
  });
}

// Define Middleware
server.use(express.json());
server.use(express.static(path.join(__dirname, "./public")));

// Define Routes
server.use("/api/v1", gameRoutes);
server.use("/api/v1/user", userRoutes);

// Export Server
module.exports = server;
