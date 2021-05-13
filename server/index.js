/**
 * index.js
 * Run App
 *
 * @category   Backend
 * @package    GameTrack
 * @author     Anthony McGrath <akm@anthonykyle.co.nz>
 * @copyright  2021 Anthony McGrath
 */

// Require Server Functionality
const server = require("./server");

// Check if PORT Environment variable exists
const port = process.env.PORT || 3000;

// Start Server
server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log("Listening on port", port);
});
