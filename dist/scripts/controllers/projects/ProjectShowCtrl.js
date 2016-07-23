(function() {
  function ProjectShowCtrl($scope, $state, Fixtures) {
    $scope.currentProject = Fixtures.getProject($state.params.id);

    // console.log($state.params.id);
  }

  angular
    .module('jq2016Revamp')
    .controller('ProjectShowCtrl', ['$scope', '$state', 'Fixtures', ProjectShowCtrl]);
})();