(function() {
    function HomeCtrl($scope, $rootScope, $location, $anchorScroll, $state, HamburgerMenu, Fixtures) {
        // Hamburger Icon Animation
        $rootScope.toggleMenu = function() {
            HamburgerMenu.toggleMenu();
        };

        $rootScope.scrollToTop = function() {
            $anchorScroll();
            $location.hash('home_top');
            console.log('Inside scrollToTop method.');
        };

        // Always default to top of page on state change
        $rootScope.$watchCollection('$stateParams', function() {
           $anchorScroll('home_top');
        });
        
        this.projects = Fixtures.getProjects();

        $scope.submitMessage = function() {
            if ($scope.contactForm.$valid) {
                $.post('https://aqueous-lowlands-24334.herokuapp.com/inquiries', {inquiry: {name: $scope.name, email: $scope.email, phone_number: $scope.phone_number, message: $scope.message}});

                console.log('message sent');

                $scope.name = '';
                $scope.email = '';
                $scope.phone_number = '';
                $scope.message = '';
            }
        };

        $rootScope.current = $state.current.name;

        console.log($rootScope.current);
    }
    
    angular
        .module('jq2016Revamp')
        .controller('HomeCtrl', ['$scope', '$rootScope', '$location', '$anchorScroll', '$state', 'HamburgerMenu', 'Fixtures', HomeCtrl]);
})();

// https://aqueous-lowlands-24334.herokuapp.com/inquiries
// http://localhost:4000/inquiries