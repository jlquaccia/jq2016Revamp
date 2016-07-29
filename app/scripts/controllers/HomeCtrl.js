(function() {
    function HomeCtrl($scope, $rootScope, $location, $anchorScroll, $state, HamburgerMenu, Fixtures) {
        // Hamburger Icon Animation
        $rootScope.toggleMenu = function() {
            HamburgerMenu.toggleMenu();
        };

        $rootScope.scrollToTop = function() {
            $anchorScroll();
            $location.hash('home_top');
        };

        // Always default to top of page on state change
        $rootScope.$watchCollection('$stateParams', function() {
           $anchorScroll('home_top');
        });
        
        this.projects = Fixtures.getProjects();

        $scope.submitMessage = function() {
            if ($scope.contactForm.$valid) {
                $.post('http://localhost:4000/inquiries',
                  {
                    inquiry: {
                      name: $scope.name, email: $scope.email, phone_number: $scope.phone_number, message: $scope.message
                    }
                  });

                console.log('message sent');

                $rootScope.flashMessage();

                $scope.submitted = false;

                $scope.name = '';
                $scope.email = '';
                $scope.phone_number = '';
                $scope.message = '';

                $rootScope.resetFlashMessage();
            }
        };

        $rootScope.current = $state.current.name;

        console.log($rootScope.current);


        if ($rootScope.current === 'home') {
          $('.smoothScroll').click(function() {
            $('.blog_main').css('overflow-x', 'initial');

            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 800);
                return false;
              }
            }
          });
        }

        $rootScope.setOverflowXToHidden = function() {
          $('.blog_main').css('overflow-x', 'hidden');
        };

        $rootScope.setOverflowXToInitial = function() {
          $('.blog_main').css('overflow-x', 'initial');
        };

        $rootScope.flashMessage = function() {
          $('.flash_message').addClass('bounceIn');

          setTimeout(function() {
            $('.flash_message')
              .css('opacity', '1')
              .addClass('bounceOut');
          }, 3500);
        };

        // remove flash message animation classes and reset opacity to 0
        $rootScope.resetFlashMessage = function() {
          setTimeout(function() {
            $('.flash_message')
              .css('opacity', '0')
              .removeClass('bounceIn')
              .removeClass('bounceOut');
          }, 6000);
        };

        $scope.addHeight = function() {
          if ($scope.contactForm.$invalid) {
            $('section#contact').css('height', '1060px');
          }
        };
    }
    
    angular
        .module('jq2016Revamp')
        .controller('HomeCtrl', ['$scope', '$rootScope', '$location', '$anchorScroll', '$state', 'HamburgerMenu', 'Fixtures', HomeCtrl]);
})();

// https://aqueous-lowlands-24334.herokuapp.com/inquiries
// http://localhost:4000/inquiries