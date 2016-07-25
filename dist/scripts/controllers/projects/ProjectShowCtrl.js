(function() {
  function ProjectShowCtrl($scope, $state, $rootScope, Fixtures) {
    $scope.currentProject = Fixtures.getProject($state.params.id);
    $rootScope.current = $state.current.name;
  }

  angular
    .module('jq2016Revamp')
    .controller('ProjectShowCtrl', ['$scope', '$state', '$rootScope', 'Fixtures', ProjectShowCtrl]);
})();