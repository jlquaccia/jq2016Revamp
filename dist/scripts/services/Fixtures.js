(function() {
    function Fixtures() {
        var Fixtures = {};
        var projects = [
            {
                id: '1',
                urlTitle: 'BlocChat',
                title: 'Bloc Chat',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/bloc_chat.png',
                imageUrl2: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/bloc_chat_3.png',
                imageUrl3: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/bloc_chat_4.png',
                projectUrl: 'https://jason-quaccia-bloc-chat.herokuapp.com',
                summary: 'Bloc Chat was the most involving project I have tackled to date.  I modeled the design of the site after Slack (a popular messaging app for teams of people).  During work on this project I became much more familiar with Firebase and continued to dig deeper into the power of Angular, using it in new ways that I hadn\'t yet before.',
                explanation: 'An easy to use chat room app that allows users to chat in real-time from any device (fully-responsive).',
                problem: 'As a growing and constantly aspiring web developer, in order to break into the industry I need to prove my worth with multiple technologies.  With Bloc Chat, I chose to focus on a couple different technologies in particular to achieve just that.',
                solution: 'The two main technologies that are at the core of my chatroom app are Angular and Firebase.  I learned a great deal while putting this app together from using the Firebase API to house data about chatrooms and messages to utilizing Angular Cookies to gauge when a user has or has not created a username yet.',
                results: 'The results are a fully functional and responsive chat application and a much greater understanding of Firebase and Angular.  Additionally, without any background in web design, I also feel as though I have improved my eye for design on the web while working on this project.',
                conclusion: 'Confidence.  I feel that much more of it after completing this project.  I\'m excited to go even further with the next application.',
                technologies: ['HTML', 'CSS', 'JavaScript', 'Normalize', 'Ionicons', 'Google Fonts', 'Font Awesome', 'Bootstrap', 'Animate.css', 'Firebase', 'Angular', 'jQuery', 'AngularFire', 'Angular UI Router', 'Angular Cookies', 'Git', 'Github', 'Heroku', 'Responsive Design']
            },
            
            {
                id: '2',
                urlTitle: 'BlocJams',
                title: 'Bloc Jams',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/bloc_jams.png',
                imageUrl2: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/bloc_jams_2.png',
                imageUrl3: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/bloc_jams_4.png',
                projectUrl: 'https://jason-quaccia-bloc-jams.herokuapp.com',
                summary: 'An app that allows users to stream music, create custom playlists and rate their favorite albums and songs.',
                explanation: 'One of the most used applications on my phone and laptop is Spotify.  With this project my goal was to replicate as many Spotify features as I could and integrate them into my app.',
                problem: 'I had never built a music app quite like this before.  New technologies were going to have to be explored.  I knew from the start that the learning curve for this application was going to be steep.',
                solution: 'This was the first project that I built with the Angular framework and really gave me the opportunity to soak up the majority of Angular fundamentals and concepts (controllers, services, filters, states, etc.).  This application also introduced me to the Firebase API, which I used to authenticate users and persist album and song star ratings.',
                results: 'By the end of this project I not only understood the fundamentals of Angular and Firebase but also gain a much deeper understanding of JavaScript and Object Oriented Programming in general.',
                conclusion: 'Building this application elevated my front-end development skills to a much higher level.  Many concepts and fundamentals clicked during work on this project.  It was the first time as a web programmer that I felt I was truly starting to feel in control.',
                technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Google Fonts', 'Ionicons', 'Font Awesome', 'Normalize', 'Animate.css', 'jQuery', 'Angular', 'Angular UI Router', 'BuzzJS', 'Firebase', 'AngularFire', 'Git', 'Github', 'Heroku', 'Responsive Design']
            },
            
            {
                id: '3',
                urlTitle: 'TheMusicProject',
                title: 'The Music Project',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/artist_recommendations.png',
                imageUrl2: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/the-music-project.png',
                imageUrl3: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/the-music-project-3.png',
                projectUrl: 'https://el-proyecto-de-la-musica.herokuapp.com',
                summary: 'The Music Project was designed to be a one-stop-shop for all of your band (or groupie) needs. You can listen to popular tracks by your favorite artists, checkout related artists, keep up with news about what your favorite band has been up to and even see if they are playing in your hometown.',
                explanation: 'This project was intended to appeal to every demographic. I wanted to create a place where a user could go for music where they wouldn’t come across many limitations. With the Spotify and Bandsintown API’s being utilized in The Music Project the catalog of information available is quite significant.',
                problem: 'I have always felt that the main problem with a lot of music applications out there was content. Several apps may appear cool and exciting but this means very little if core content is lacking. If a user wants to find a concert to go to this weekend they would like the peace of mind of knowing that the concerts being suggested to them cover the entire scope of upcoming shows that weekend within their area, not just what is relative to the content on the site only.',
                solution: 'The solution to this problem is taking existing content on the web and centrally locating it in one place. Spotify, Bandsintown and Pitchfork are all integrated within The Music Project to help bring every piece together. All three of these companies house some of the largest libraries of information relative to music in existence today, helping to shape The Music Project into a very powerful tool to use.',
                results: 'My friends were my main focus group for this. The feedback that I received was very positive. The app was depicted as very easy to use and a great tool to utilize.',
                conclusion: 'One of the major lessons I took away from this project was that it is very easy, and time-consuming, to get carried away with adding more and more features to a web application. Next time I think I will limit the list of features to what is necessary and not desired. I learned a tremendous amount about API’s and working with arrays and hashes. I hadn’t realized just how easy it was to utilize an API with the power of Ruby on Rails. Google has become my best friend and greatest resource. I have been more active on StackOverflow as a result of this project, and overall much better at seeking out solutions to the endless sea of questions that I constantly try to tread water in. This experience has been eye-opening and truly valuable. I am nowhere near the developer I hope to be one day but I can say with confidence that I have grown immensely from this project and am well on my way toward my aspirations.',
                technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Rails', 'jQuery', 'Bootstrap', 'Feedify.js', 'Geocomplete.js', 'Classie.js', 'Normalize', 'Animate.css', 'SCSS', 'Git', 'Github', 'Heroku', 'PostgreSQL', 'Sqlite3', 'SCSS', 'Devise Gem', 'Figaro Gem', 'HTTParty Gem', 'Carrierwave Gem', 'MiniMagick Gem', 'Mechanize Gem', 'Geocoder Gem', 'Spotify API', 'Bandsintown API', 'Responsive Design']
            },
            
            {
                id: '4',
                urlTitle: 'Markitoff',
                title: 'Markitoff',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/markitoff.png',
                imageUrl2: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/markitoff2.png',
                imageUrl3: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/markitoff_3.png',
                projectUrl: 'https://jason-quaccia-blocitoff.herokuapp.com',
                summary: 'Markitoff is an app I built for school while enrolled in Bloc Inc.’s full-stack web developer track. Not only designed to help out with your daily tasks, it acts as a motivation enhancer and a way to diminish procrastination. Upon submitting a task to complete, 7 days are given to accomplish what you said that you were going to do. If you don’t complete a task within one week then that task will be removed from your list. It may not have been as important to you as you thought.',
                explanation: 'Markitoff was the first real hands-on project that I built from scratch that revolved around Rails full-stack web development. I learned how to automate rake tasks and utilize Ajax within a Rails application. Markitoff is 100% responsive and all of the styling was done by me.',
                problem: 'Ever say you are going to do something but don’t? Do you try to stay organized but end up reverting back to your old ways in the end? Procrastination is a serious problem now and has been for generations.',
                solution: 'With Markitoff you can get your tasks done and stay motivated knowing that each task has a limited amount of time to be completed. This makes checking things off your todo list fun and ultimately makes you a better person.',
                results: 'The results were quite positive. Although Markitoff is a very simple web application it was received well by the users that tested it.',
                conclusion: 'Markitoff works because it helps to motivate you and organize your daily routine. I feel the rake automation greatly enhances the experience and prompts the user to try harder. This project has taught me a lot about Rails and has strengthened my fundamental knowledge as a web developer. I will surely carry forward this knowledge with me in the future.',
                technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'TypedJS', 'Animate.css', 'Font Awesome', 'PostgreSQL', 'Ruby', 'Rails', 'Sqlite3', 'Devise Gem', 'Figaro Gem', 'Faker Gem', 'Whenever Gem', 'SCSS', 'Git', 'Github', 'Heroku', 'Responsive Design']
            },
            
            {
                id: '5',
                urlTitle: 'SimplyPutYourWay',
                title: 'Simply Put Your Way',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/simply-put-your-way.png',
                imageUrl2: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/simply-put-your-way3.png',
                imageUrl3: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/simply-put-your-way5.png',
                projectUrl: 'http://jlquaccia.github.io/simply-put-your-way',
                summary: 'Simply Put Your Way is a business dedicated to home organization. For some extra practice I chose to code up all of the front-end for the site. I utilized HTML, SCSS, Bootstrap and Animate.css. The entire mockup is fully responsive as well. This project was the first that I worked on where I really got to know the fundamentals of Twitter’s Bootstrap and it’s inner workings.',
                technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Normalize', 'Animate.css', 'jQuery', 'Git', 'Github', 'Responsive Design']
            },
            
            {
                id: '6',
                urlTitle: 'FestivalQuiz',
                title: 'Festival Quiz',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/festival-quiz.png',
                imageUrl2: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/festival-quiz2.png',
                imageUrl3: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/festival-quiz3.png',
                projectUrl: 'http://jlquaccia.github.io/festival-quiz',
                summary: 'Do you even festival? Inspired by true ‘festival-related’ events, I decided to have a little fun and test the trivial knowledge of others on the subject. Powered by lots of jQuery and JavaScript, it was an interesting experience putting this one together. Being that this was one of my very first projects I can say that I definitely learned a lot of web development fundamentals including a thing or two I hadn’t already known about these festival things.',
                technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Google Fonts', 'jQuery', 'Git', 'Github', 'Responsive Design']
            },
            
            {
                id: '7',
                urlTitle: 'Wikiland',
                title: 'Wikiland',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/wikiland.png',
                imageUrl2: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/wikiland2.png',
                imageUrl3: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/wikiland3.png',
                projectUrl: 'https://jason-quaccia-blocipedia.herokuapp.com',
                summary: 'Wikipedia is universal, and to be able to build a replica for one of my first projects is incredible. WikiLand allows users to create and collaborate on their own wikis privately or publicly. This was a school project that I built while enrolled in Bloc Inc.’s full-stack web developer track.',
                explanation: 'I built WikiLand from the ground up. The amount of learning that took place within the span of starting and finishing this project is irreplaceable. With Ruby on Rails powering the core, I have been able to tackle and strengthen my skill-set on various web development topics. I have learned to incorporate user authentication with the Devise gem, as well as establishing wikis that can be created, read, updated and deleted. I’ve also overcome challenges of designating various user roles by utilizing different authorization scopes via the Pundit gem and also incorporated Stripe to allow upgrading from a free plan to a premium one. Wikis can be set to private, be made collaborative (premium accounts only) and are created and editable with the option of using markdown syntax thanks to the Redcarpet gem.',
                problem: 'The internet is a place rich with knowledge which is also easily accessible. By design, the web was created in order to connect the world together and share this knowledge with one another. Knowledge should be made universal, because as a human race we all face the same life challenges. Through shared information from all around there is no telling what answers we may find.',
                solution: 'WikiLand simplifies the process of sharing knowledge online. Users have the ability to publicly, as well as collaboratively, create and display wikis ranging from an endless possibility of topics.',
                results: 'WikiLand has been proven to be simple and intuitive to use and is fully responsive.',
                conclusion: 'The goal that was aimed to be accomplished with WikiLand was definitely achieved. The simplicity in its usability made for a powerful tool that anyone can use. As my first real project working with Rails it was easy to become overwhelmed at times because there was so much to absorb. However, as an aspiring developer I was pleasantly surprised with the intuitive nature that Rails revolves around. I have learned countless lessons and core fundamental development skills upon completing this project that will absolutely be recycled throughout my career.',
                technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'EpicEditorJS', 'PostgreSQL', 'Sqlite3', 'SCSS', 'Devise Gem', 'Figaro Gem', 'Pundit Gem', 'Faker Gem', 'Stripe Gem', 'Redcarpet Gem', 'Haml', 'Friendly ID Gem', 'Git', 'Github', 'Heroku', 'Responsive Design']
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