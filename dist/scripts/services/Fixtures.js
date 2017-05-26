(function() {
  function Fixtures() {
    var Fixtures = {};
    var projects = [
      {
          id: '1',
          urlTitle: 'simply-put-your-way',
          title: 'Simply Put Your Way',
          imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/simply_put_your_way_1.png',
          imageUrl2: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/simply-put-your-way3.png',
          imageUrl3: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/simply-put-your-way5.png',
          mobileImage: '../assets/images/project_mobile_imgs/simply_put_your_way_1_shrunk.png',
          projectUrl: 'http://jlquaccia.github.io/simply-put-your-way',
          summary: 'Simply Put Your Way is a business dedicated to home organization. For some extra practice I chose to code up all of the front-end for the site. I utilized HTML, SCSS, Bootstrap and Animate.css. The entire mockup is fully responsive as well. This project was the first that I worked on where I really got to know the fundamentals of Twitter’s Bootstrap and it’s inner workings.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Normalize', 'Animate.css', 'jQuery', 'Git', 'Github', 'Responsive Design']
      },
      {
          id: '2',
          urlTitle: 'cedar-park',
          title: 'Cedar Park',
          imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/cedar_park_1.png',
          imageUrl2: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/cedar_park_2.png',
          imageUrl3: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/cedar_park_3.png',
          mobileImage: '../assets/images/project_mobile_imgs/cedar_park_1_shrunk.png',
          projectUrl: 'http://jlquaccia.github.io/simply-put-your-way',
          summary: 'Simply Put Your Way is a business dedicated to home organization. For some extra practice I chose to code up all of the front-end for the site. I utilized HTML, SCSS, Bootstrap and Animate.css. The entire mockup is fully responsive as well. This project was the first that I worked on where I really got to know the fundamentals of Twitter’s Bootstrap and it’s inner workings.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Normalize', 'Animate.css', 'jQuery', 'Git', 'Github', 'Responsive Design']
      },
      {
          id: '3',
          urlTitle: 'angela-sha',
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
          id: '4',
          urlTitle: 'spotlight',
          title: 'Spotlight',
          imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/spotlight_1.png',
          imageUrl2: 'https://s3-us-west-1.amazonaws.com/jason-quaccia-spotlight/spotlight-one.png',
          imageUrl3: 'https://s3-us-west-1.amazonaws.com/jason-quaccia-spotlight/spotlight-two.png',
          mobileImage: '../assets/images/project_mobile_imgs/spotlight_1_shrunk.png',
          projectUrl: 'http://www.sblob.com/spotlight/999',
          summary: 'Spotlight is a sub section of SBLOB where artists of various backgrounds and professions are showcased.',
          explanation: 'Spotlight provides a central location for an artist to showcase all of there work, tell their story and link to all of their social media accounts',
          problem: 'Artists of all kinds (music, photography, animation, etc.) don\'t have a central online presence to house all of their work and media associated with them.  There are also not many platforms online that allow a user extensive profile customization.',
          solution: 'Spotlight is a project that allows artists to showcase all of their work and information in one place and also link to any external sites that house any additional online presence.  Spotlight profiles are also very customizable.  Allowing each artist a significant amount of creative freedom to display their profile in a manner that maintains the integrity of their personality much more efficiently.',
          results: 'Currently Spotlight is still very much in an infant stage, but artists who have already been reached out to to join the site have received it quite well.  They have enjoyed the freedom of expression and convenience of keeping all of their content in one place.',
          conclusion: 'Spotlight is currently being passed around and tested by new artists who are unfamiliar with the site to gain feedback and outside perception.  This is the first draft of the project and the first live presence of SBLOB in general to be put out into the wild wild internet.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Angular', 'jQuery', 'Git', 'Github', 'Responsive Design', 'Node.js', 'Express.js', 'MySql']
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