(function() {
  function scrolly($document, $window) {
    return function(scope, element, attrs) {
      $document.bind('scroll', function() {
        console.log('Scrolled');
      });
    };
  }

  angular
    .module('jq2016Revamp')
    .directive('scrolly', ['$document', '$window', scrolly]);
})();