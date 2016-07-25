(function() {
    function Fixtures() {
        var Fixtures = {};
        var projects = [
            {
                id: '1',
                urlTitle: 'BlocChat',
                title: 'Bloc Chat',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/bloc_chat.png',
                summary: 'Coming soon: an actual description.',
                explanation: '',
                problem: '',
                solution: '',
                results: '',
                conclusion: ''
            },
            
            {
                id: '2',
                urlTitle: 'BlocJams',
                title: 'Bloc Jams',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/bloc_jams.png',
                summary: 'Coming soon: an actual description.',
                explanation: '',
                problem: '',
                solution: '',
                results: '',
                conclusion: ''
            },
            
            {
                id: '3',
                urlTitle: 'TheMusicProject',
                title: 'The Music Project',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/artist_recommendations.png',
                summary: 'The Music Project was designed to be a one-stop-shop for all of your band (or groupie) needs. You can listen to popular tracks by your favorite artists, checkout related artists, keep up with news about what your favorite band has been up to and even see if they are playing in your hometown.',
                explanation: 'This project was intended to appeal to every demographic. I wanted to create a place where a user could go for music where they wouldn’t come across many limitations. With the Spotify and Bandsintown API’s being utilized in The Music Project the catalog of information available is quite significant.',
                problem: 'I have always felt that the main problem with a lot of music applications out there was content. Several apps may appear cool and exciting but this means very little if core content is lacking. If a user wants to find a concert to go to this weekend they would like the peace of mind of knowing that the concerts being suggested to them cover the entire scope of upcoming shows that weekend within their area, not just what is relative to the content on the site only.',
                solution: 'The solution to this problem is taking existing content on the web and centrally locating it in one place. Spotify, Bandsintown and Pitchfork are all integrated within The Music Project to help bring every piece together. All three of these companies house some of the largest libraries of information relative to music in existence today, helping to shape The Music Project into a very powerful tool to use.',
                results: 'My friends were my main focus group for this. The feedback that I received was very positive. The app was depicted as very easy to use and a great tool to utilize.',
                conclusion: 'One of the major lessons I took away from this project was that it is very easy, and time-consuming, to get carried away with adding more and more features to a web application. Next time I think I will limit the list of features to what is necessary and not desired. I learned a tremendous amount about API’s and working with arrays and hashes. I hadn’t realized just how easy it was to utilize an API with the power of Ruby on Rails. Google has become my best friend and greatest resource. I have been more active on StackOverflow as a result of this project, and overall much better at seeking out solutions to the endless sea of questions that I constantly try to tread water in. This experience has been eye-opening and truly valuable. I am nowhere near the developer I hope to be one day but I can say with confidence that I have grown immensely from this project and am well on my way toward my aspirations.'
            },
            
            {
                id: '4',
                urlTitle: 'Markitoff',
                title: 'Markitoff',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/markitoff.png',
                summary: 'Coming soon: an actual description.',
                explanation: '',
                problem: '',
                solution: '',
                results: '',
                conclusion: ''
            },
            
            {
                id: '5',
                urlTitle: 'SimplyPutYourWay',
                title: 'Simply Put Your Way',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/simply-put-your-way.png',
                summary: 'Coming soon: an actual description.',
                explanation: '',
                problem: '',
                solution: '',
                results: '',
                conclusion: ''
            },
            
            {
                id: '6',
                urlTitle: 'FestivalQuiz',
                title: 'Festival Quiz',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/festival-quiz.png',
                summary: 'Coming soon: an actual description.',
                explanation: '',
                problem: '',
                solution: '',
                results: '',
                conclusion: ''
            },
            
            {
                id: '7',
                urlTitle: 'Wikiland',
                title: 'Wikiland',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/wikiland.png',
                summary: 'Coming soon: an actual description.',
                explanation: '',
                problem: '',
                solution: '',
                results: '',
                conclusion: ''
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