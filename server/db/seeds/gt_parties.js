/**
 * /server/db/seeds/gt_parties.js
 * Define initial dataset for Games Table
 *
 * @category   Database Seed File
 * @package    GameTrack
 * @author     Anthony McGrath <akm@anthonykyle.co.nz>
 * @copyright  2021 Anthony McGrath
 */

 exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('gt_parties').del()
    .then(() => {
      // Inserts seed entries
      return knex('gt_parties').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
