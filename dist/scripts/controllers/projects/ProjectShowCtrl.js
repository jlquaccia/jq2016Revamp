(function() {
  function ProjectShowCtrl($scope, $state, $rootScope, $anchorScroll, $location, Fixtures, HamburgerMenu, bowser) {
    $scope.currentProject = Fixtures.getProject($state.params.id);
    $rootScope.current = $state.current.name;

    console.log($rootScope.current);

    $rootScope.toggleMenu = function() {
        HamburgerMenu.toggleMenu();
    };

    // Always default to top of page on state change
    // $scope.$watchCollection('$stateParams', function() {
    //    $anchorScroll('project_top');
    //    console.log('anchorScroll to project_top fired');
    // });

    $rootScope.scrollTopOfProjectPage = function() {
      $location.hash('project_top');
      $anchorScroll();
    };

    // Safari compatibility
    if (bowser.safari) {
      $('#feature .current_project_title').css('font-size', '40px');
      $('.blog_section').css('min-height', 'inherit');
    }
  }

  angular
    .module('jq2016Revamp')
    .controller('ProjectShowCtrl', ['$scope', '$state', '$rootScope', '$anchorScroll', '$location', 'Fixtures', 'HamburgerMenu', 'bowser', ProjectShowCtrl]);
})();