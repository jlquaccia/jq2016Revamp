(function() {
  function PostShowCtrl($scope, $rootScope, $stateParams, $anchorScroll, $state, HamburgerMenu, Post) {
    $scope.post = Post.get({id: $stateParams.id});

    // Hamburger Icon Animation
    $rootScope.toggleMenu = function() {
        HamburgerMenu.toggleMenu();
    };

    // Always default to top of page on state change
    $rootScope.$watchCollection('$stateParams', function() {
       $anchorScroll('top');
    });

    $rootScope.current = $state.current.name;

    console.log($rootScope.current);
  }

  angular
    .module('jq2016Revamp')
    .controller('PostShowCtrl', ['$scope', '$rootScope', '$stateParams', '$anchorScroll', '$state', 'HamburgerMenu', 'Post', PostShowCtrl]);
})();