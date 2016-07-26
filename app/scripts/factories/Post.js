(function() {
  function Post($resource) {
    return $resource('https://aqueous-lowlands-24334.herokuapp.com/posts/:id.json', {}, {
      show: { method: 'GET' },
      update: { method: 'PUT', params: { id: '@id' } },
      delete: { method: 'DELETE', params: { id: '@id' } }
    });
  }
  
  angular
    .module('jq2016Revamp')
    .factory('Post', ['$resource', Post]);
})();

// https://aqueous-lowlands-24334.herokuapp.com/posts/:id.json
// http://localhost:4000/posts/:id.json