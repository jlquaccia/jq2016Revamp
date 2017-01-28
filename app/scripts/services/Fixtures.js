(function() {
    function Fixtures() {
        var Fixtures = {};
        var projects = [
            {
                id: '1',
                urlTitle: 'AngelaSha',
                title: 'Angela Sha',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/angela_sha_1.png',
                imageUrl2: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/angela_sha_6.png',
                imageUrl3: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/angela_sha_3.png',
                mobileImage: '../assets/images/project_mobile_imgs/angela_sha_1.png',
                projectUrl: 'https://angelas-website.herokuapp.com',
                summary: 'Angela Sha is a pole dance performer and instructor.',
                results: 'With the need for a new website for Angela, I designed and developed a single page site for her that mainly runs on AngularJS.  I\'m particularly pleased with the way the masonry style photo gallery and lightbox turned out.  The design was completely original and fully responsive along with the rest of the site.',
                technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Angular', 'jQuery', 'Git', 'Github', 'Responsive Design', 'Cross-Browser Compatitble', 'Google Maps API']
            },

            {
                id: '2',
                urlTitle: 'Spotlight',
                title: 'Spotlight',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jason-quaccia-spotlight/spotlight-four.png',
                imageUrl2: 'https://s3-us-west-1.amazonaws.com/jason-quaccia-spotlight/spotlight-one.png',
                imageUrl3: 'https://s3-us-west-1.amazonaws.com/jason-quaccia-spotlight/spotlight-two.png',
                mobileImage: '../assets/images/project_mobile_imgs/spotlight-four.png',
                projectUrl: 'http://www.sblob.com/spotlight/999',
                summary: 'Spotlight is a sub section of SBLOB where artists of various backgrounds and professions are showcased.',
                explanation: 'Spotlight provides a central location for an artist to showcase all of there work, tell their story and link to all of their social media accounts',
                problem: 'Artists of all kinds (music, photography, animation, etc.) don\'t have a central online presence to house all of their work and media associated with them.  There are also not many platforms online that allow a user extensive profile customization.',
                solution: 'Spotlight is a project that allows artists to showcase all of their work and information in one place and also link to any external sites that house any additional online presence.  Spotlight profiles are also very customizable.  Allowing each artist a significant amount of creative freedom to display their profile in a manner that maintains the integrity of their personality much more efficiently.',
                results: 'Currently Spotlight is still very much in an infant stage, but artists who have already been reached out to to join the site have received it quite well.  They have enjoyed the freedom of expression and convenience of keeping all of their content in one place.',
                conclusion: 'Spotlight is currently being passed around and tested by new artists who are unfamiliar with the site to gain feedback and outside perception.  This is the first draft of the project and the first live presence of SBLOB in general to be put out into the wild wild internet.',
                technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Angular', 'jQuery', 'Git', 'Github', 'Responsive Design', 'Node.js', 'Express.js', 'MySql']
            },

            {
                id: '3',
                urlTitle: 'BlocTime',
                title: 'Bloc Time',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jason-quaccia-bloctime/bloctime-five.png',
                imageUrl2: 'https://s3-us-west-1.amazonaws.com/jason-quaccia-bloctime/bloctime-one.png',
                imageUrl3: 'https://s3-us-west-1.amazonaws.com/jason-quaccia-bloctime/bloctime-four.png',
                mobileImage: '../assets/images/project_mobile_imgs/bloctime-five.png',
                projectUrl: 'https://jason-quaccia-bloctime.herokuapp.com/',
                summary: 'Bloc Time is a single page app powered by Angular.js that utilizes the pomodoro technique to help make anyones\' day more productive',
                explanation: 'This app helps to make the end users\' day more efficient by splitting up their day into separate pomodoro\'s.  During each pomodoro (25 minutes) a user will work on whatever task is at hand.  Then a 5 minute break will follow, followed by the start of another 25 minute pomodoro.  This cycle continues throughout the day and is a system that has been proven to be an effective technique to boost productivity through allowing frequent small breaks throughout the day.',
                problem: 'Most people tend to mismanage their time when working during the day to optimize productive efficiency.  Some work too hard with seldom breaks, where some spend a greater emphasis on breaktime then they should.',
                solution: 'The pomodoro technique provides for a more structured way to productively spend your time during the day as well as a unit of measure to know just how much you\'ve done (i.e. number of pomodoro\'s completed).  It has been proven that small 5 minute breaks after 25 minutes stretches from work keeps your mind much more sharp and ultimately productive versus overworking yourself and not taking enough breaks.',
                results: 'The results are a more productive and efficient day!',
                conclusion: 'This project was a great learning curve for me.  Utilizing Angular for the bulk of the project, I exercised a lot of complex conditional logic that relied various different states throughout the app.',
                technologies: ['HTML', 'CSS', 'JavaScript', 'Normalize', 'Ionicons', 'Google Fonts', 'Font Awesome', 'Bootstrap', 'Animate.css', 'Firebase', 'Angular', 'jQuery', 'AngularFire', 'Angular UI Router', 'Git', 'Github', 'Heroku', 'Responsive Design']
            },

            {
                id: '4',
                urlTitle: 'BlocChat',
                title: 'Bloc Chat',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/bloc_chat.png',
                imageUrl2: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/bloc_chat_3.png',
                imageUrl3: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/bloc_chat_4.png',
                mobileImage: '../assets/images/project_mobile_imgs/bloc_chat.png',
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
                id: '5',
                urlTitle: 'BlocJams',
                title: 'Bloc Jams',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/bloc_jams.png',
                imageUrl2: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/bloc_jams_2.png',
                imageUrl3: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/bloc_jams_4.png',
                mobileImage: '../assets/images/project_mobile_imgs/bloc_jams.png',
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
                id: '6',
                urlTitle: 'TheMusicProject',
                title: 'The Music Project',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/artist_recommendations.png',
                imageUrl2: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/the-music-project.png',
                imageUrl3: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/the-music-project-3.png',
                mobileImage: '../assets/images/project_mobile_imgs/artist_recommendations.png',
                projectUrl: 'https://el-proyecto-de-la-musica.herokuapp.com',
                summary: 'The Music Project was designed to be a one-stop-shop for all of your band (or groupie) needs. You can listen to popular tracks by your favorite artists, checkout related artists, keep up with news about what your favorite band has been up to and even see if they are playing in your hometown.',
                explanation: 'This project was intended to appeal to every demographic. I wanted to create a place where a user could go for music where they wouldn’t come across many limitations. With the Spotify and Bandsintown API’s being utilized in The Music Project the catalog of information available is quite significant.',
                problem: 'I have always felt that the main problem with a lot of music applications out there was content. Several apps may appear cool and exciting but this means very little if core content is lacking. If a user wants to find a concert to go to this weekend they would like the peace of mind of knowing that the concerts being suggested to them cover the entire scope of upcoming shows that weekend within their area, not just what is relative to the content on the site only.',
                solution: 'The solution to this problem is taking existing content on the web and centrally locating it in one place. Spotify, Bandsintown and Pitchfork are all integrated within The Music Project to help bring every piece together. All three of these companies house some of the largest libraries of information relative to music in existence today, helping to shape The Music Project into a very powerful tool to use.',
                results: 'My friends were my main focus group for this. The feedback that I received was very positive. The app was depicted as very easy to use and a great tool to utilize.',
                conclusion: 'One of the major lessons I took away from this project was that it is very easy, and time-consuming, to get carried away with adding more and more features to a web application. Next time I think I will limit the list of features to what is necessary and not desired. I learned a tremendous amount about API’s and working with arrays and hashes. I hadn’t realized just how easy it was to utilize an API with the power of Ruby on Rails. Google has become my best friend and greatest resource. I have been more active on StackOverflow as a result of this project, and overall much better at seeking out solutions to the endless sea of questions that I constantly try to tread water in. This experience has been eye-opening and truly valuable. I am nowhere near the developer I hope to be one day but I can say with confidence that I have grown immensely from this project and am well on my way toward my aspirations.',
                technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Rails', 'jQuery', 'Bootstrap', 'Feedify.js', 'Geocomplete.js', 'Classie.js', 'Normalize', 'Animate.css', 'Git', 'Github', 'Heroku', 'PostgreSQL', 'Sqlite3', 'SCSS', 'Devise Gem', 'Figaro Gem', 'HTTParty Gem', 'Carrierwave Gem', 'MiniMagick Gem', 'Mechanize Gem', 'Geocoder Gem', 'Spotify API', 'Bandsintown API', 'Responsive Design']
            },
            
            {
                id: '7',
                urlTitle: 'Markitoff',
                title: 'Markitoff',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/markitoff.png',
                imageUrl2: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/markitoff2.png',
                imageUrl3: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/markitoff_3.png',
                mobileImage: '../assets/images/project_mobile_imgs/markitoff.png',
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
                id: '8',
                urlTitle: 'SimplyPutYourWay',
                title: 'Simply Put Your Way',
                imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/simply-put-your-way.png',
                imageUrl2: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/simply-put-your-way3.png',
                imageUrl3: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/simply-put-your-way5.png',
                mobileImage: '../assets/images/project_mobile_imgs/simply-put-your-way.png',
                projectUrl: 'http://jlquaccia.github.io/simply-put-your-way',
                summary: 'Simply Put Your Way is a business dedicated to home organization. For some extra practice I chose to code up all of the front-end for the site. I utilized HTML, SCSS, Bootstrap and Animate.css. The entire mockup is fully responsive as well. This project was the first that I worked on where I really got to know the fundamentals of Twitter’s Bootstrap and it’s inner workings.',
                technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Normalize', 'Animate.css', 'jQuery', 'Git', 'Github', 'Responsive Design']
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