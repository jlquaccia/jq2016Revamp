(function() {
    function Fixtures() {
        var Fixtures = {};
        var projects = [
            {
                title: 'Bloc Chat',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/bloc_chat.png',
                description: 'Coming soon: an actual description.'
            },
            
            {
                title: 'Bloc Jams',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/bloc_jams.png',
                description: 'Coming soon: an actual description.'
            },
            
            {
                title: 'The Music Project',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/artist_recommendations.png',
                description: 'Coming soon: an actual description.'
            },
            
            {
                title: 'Markitoff',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/markitoff.png',
                description: 'Coming soon: an actual description.'
            },
            
            {
                title: 'Simply Put Your Way',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/simply-put-your-way.png',
                description: 'Coming soon: an actual description.'
            },
            
            {
                title: 'Festival Quiz',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/festival-quiz.png',
                description: 'Coming soon: an actual description.'
            },
            
            {
                title: 'Wikiland',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/wikiland.png',
                description: 'Coming soon: an actual description.'
            }
        ];
        
        Fixtures.getProjects = function() {
            return projects;
        };
        
        return Fixtures;
    }
    
    angular
        .module('jq2016Revamp')
        .factory('Fixtures', [Fixtures]);
})();