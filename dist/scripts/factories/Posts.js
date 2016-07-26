(function() {
  function Posts($resource) {
    return $resource('https://aqueous-lowlands-24334.herokuapp.com/posts.json', {}, {
      query: { method: 'GET', isArray: true },
      create: { method: 'POST' }
    });
  }
  
  angular
    .module('jq2016Revamp')
    .factory('Posts', ['$resource', Posts]);
})();

// https://aqueous-lowlands-24334.herokuapp.com/posts.json
// http://localhost:4000/posts.json