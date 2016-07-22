(function() {
    function ProjectsCtrl($rootScope, $anchorScroll, HamburgerMenu) {
      // Hamburger Icon Animation
      $rootScope.toggleMenu = function() {
          HamburgerMenu.toggleMenu();
      };

      // Always default to top of page on state change
      $rootScope.$watchCollection('$stateParams', function() {
         $anchorScroll('top');
      });
    }
    
    angular
        .module('jq2016Revamp')
        .controller('ProjectsCtrl', ['$rootScope', '$anchorScroll', 'HamburgerMenu', ProjectsCtrl]);
})();