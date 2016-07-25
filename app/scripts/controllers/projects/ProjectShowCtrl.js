(function() {
  function ProjectShowCtrl($scope, $state, $rootScope, $anchorScroll, Fixtures, HamburgerMenu) {
    $scope.currentProject = Fixtures.getProject($state.params.id);
    $rootScope.current = $state.current.name;

    console.log($rootScope.current);

    // Always default to top of page on state change
    $rootScope.$watchCollection('$stateParams', function() {
       $anchorScroll('top');
    });

    $rootScope.toggleMenu = function() {
        HamburgerMenu.toggleMenu();
    };

    $rootScope.overflowXHidden = function() {
      $('.main_wrapper').addClass('blog_main');
    };
  }

  angular
    .module('jq2016Revamp')
    .controller('ProjectShowCtrl', ['$scope', '$state', '$rootScope', '$anchorScroll', 'Fixtures', 'HamburgerMenu', ProjectShowCtrl]);
})();