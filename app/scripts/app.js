(function() {
    function config($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            // Home
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })
        
            // Posts Index
            .state('posts', {
                url: '/posts',
                controller: 'PostListCtrl as postList',
                templateUrl: '/templates/posts/index.html'
            })
            
            // Posts New
            .state('new', {
              url: '/posts/new',
              controller: 'PostAddCtrl as postAdd',
              templateUrl: '/templates/posts/new.html'
            })
        
            // Posts Edit
            .state('edit', {
              url: '/posts/:id/edit',
              controller: 'PostUpdateCtrl as postUpdate',
              templateUrl: '/templates/posts/edit.html'
            })
            // Posts Show
            .state('show', {
              url: '/posts/:id',
              controller: 'PostShowCtrl as postShow',
              templateUrl: '/templates/posts/show.html'
            })
            // Projects Section
            .state('projects', {
                url: '/#projects',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })
            // Contact Section
            .state('contact', {
                url: '/#contact',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })
            // About Section
            .state('about', {
                url: '/#about',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })
            // Projects Show
            .state('project', {
                url: '/projects/:id/:title',
                controller: 'ProjectShowCtrl as projectShow',
                templateUrl: '/templates/projects/show.html'
            });

        $urlRouterProvider
            .otherwise('/');
    }
    
    angular
        .module('jq2016Revamp', ['ui.router', 'ngResource', 'ngtimeago', 'jlareau.bowser'])
        .config(config);
})();