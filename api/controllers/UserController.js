/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  create: function (req, res) {
User.create({name:'Mike'}).exec(console.log);
    return res.json({
      todo: 'Not implemented yet!'
    });
  },

  like: function (req, res) {
    return res.json({
      todo: 'Not implemented yet!'
    });
  },
	
};

