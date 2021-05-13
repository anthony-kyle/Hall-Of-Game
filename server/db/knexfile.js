/**
 * /server/db/knexfile.js
 * Define knex database connectivity
 *
 * @category   DB Config
 * @package    GameTrack
 * @author     Anthony McGrath <akm@anthonykyle.co.nz>
 * @copyright  2021 Anthony McGrath
 */

module.exports = {

  development: {
    client: 'mysql',
    version: '8',
    connection: {
      host: 'localhost',
      user: 'localdev',
      password: '#Yfc55mwWdZRn9k45dd5u!qi9',
      database: 'gametrack'
    },
  },

  staging: {
   client: 'mysql',
    version: '8',
    connection: {
      host: 'localhost',
      user: 'localdev',
      password: '#Yfc55mwWdZRn9k45dd5u!qi9',
      database: 'gametrack'
    },
  },

  production: {
    client: 'mysql',
    version: '5',
    connection: {
      host: 'localhost',
      user: 'anthonyk_jmd',
      password: 'VCuDnd5My2X7S@ZEC77Vd%ZaN61fl&',
      database: 'anthonyk_gametrack'
    },
  }

};