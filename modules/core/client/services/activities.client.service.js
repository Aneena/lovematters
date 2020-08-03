(function () {
  'use strict';

  angular
    .module('core')
    .factory('ActivitiesService', ['$resource',
      function ($resource) {
        return $resource('/activity/:activityId',{activityId:'@_id'});
      }
    ]);
})();
