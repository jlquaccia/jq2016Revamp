(function() {
  function PostListCtrl($scope, $rootScope, $http, $resource, $state, $anchorScroll, Posts, Post, HamburgerMenu) {
    window.foo = Posts;
    $scope.posts = Posts.query();
    
    $scope.deletePost = function(postId) {
      if (confirm('Are you sure you want to delete this post?')) {
        Post.delete({id: postId}, function() {
          $scope.posts = Posts.query();
          $state.go('posts');
        });
      }
    };

    // Hamburger Icon Animation
    $rootScope.toggleMenu = function() {
        HamburgerMenu.toggleMenu();
    };

    // Always default to top of page on state change
    $rootScope.$watchCollection('$stateParams', function() {
       $anchorScroll('blog_top');
    });

    $rootScope.current = $state.current.name;
    console.log($rootScope.current);
  }
  
  angular
    .module('jq2016Revamp')
    .controller('PostListCtrl', ['$scope', '$rootScope', '$http', '$resource', '$state', '$anchorScroll', 'Posts', 'Post', 'HamburgerMenu', PostListCtrl]);
})();