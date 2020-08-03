'use strict';

module.exports = function(app) {
  var activity = require('../../server/controllers/activity.server.controller');
  app.route('/activity')
		.get(activity.list);
};
