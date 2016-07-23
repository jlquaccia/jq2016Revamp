(function() {
    function Fixtures() {
        var Fixtures = {};
        var projects = [
            {
                id: '1',
                urlTitle: 'BlocChat',
                title: 'Bloc Chat',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/bloc_chat.png',
                description: 'Coming soon: an actual description.'
            },
            
            {
                id: '2',
                urlTitle: 'BlocJams',
                title: 'Bloc Jams',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/bloc_jams.png',
                description: 'Coming soon: an actual description.'
            },
            
            {
                id: '3',
                urlTitle: 'TheMusicProject',
                title: 'The Music Project',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/artist_recommendations.png',
                description: 'Coming soon: an actual description.'
            },
            
            {
                id: '4',
                urlTitle: 'Markitoff',
                title: 'Markitoff',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/markitoff.png',
                description: 'Coming soon: an actual description.'
            },
            
            {
                id: '5',
                urlTitle: 'SimplyPutYourWay',
                title: 'Simply Put Your Way',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/simply-put-your-way.png',
                description: 'Coming soon: an actual description.'
            },
            
            {
                id: '6',
                urlTitle: 'FestivalQuiz',
                title: 'Festival Quiz',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/festival-quiz.png',
                description: 'Coming soon: an actual description.'
            },
            
            {
                id: '7',
                urlTitle: 'Wikiland',
                title: 'Wikiland',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/wikiland.png',
                description: 'Coming soon: an actual description.'
            }
        ];
        
        Fixtures.getProjects = function() {
            return projects;
        };

        Fixtures.getProject = function(id) {
            return projects[id - 1];
        };
        
        return Fixtures;
    }
    
    angular
        .module('jq2016Revamp')
        .factory('Fixtures', [Fixtures]);
})();