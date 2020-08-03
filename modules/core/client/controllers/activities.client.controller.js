(function () {
  'use strict';

  angular
    .module('core')
    .controller('ActivitiesController', ['$scope','$stateParams', 'ActivitiesService',
      function ($scope,$stateParams,ActivitiesService) {
        var vm = this;

        $scope.list = function() {
          $scope.activities = ActivitiesService.query();
        };

        $scope.findOne = function() {
          $scope.activity = ActivitiesService.get({ 
            activityId: $stateParams.activityId
          });
        };
      }]);
})();
