(function() {
  function Fixtures() {
    var Fixtures = {};
    var projects = [
      {
          id: '1',
          urlTitle: 'simply-put-your-way',
          title: 'Simply Put Your Way',
          imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/simply_put_your_way_1.png',
          imageUrl2: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/simply_put_your_way_5.png',
          imageUrl3: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/simply_put_your_way_3.png',
          mobileImage: '../assets/images/project_mobile_imgs/simply_put_your_way_1_shrunk.png',
          projectUrl: 'http://www.simplyputyourway.net',
          summary: 'Simply Put Your Way is a business dedicated to home organization and was also in need of a website revamp from a Wix page to something they could truly call their own.',
          problem: 'Since the company\'s previous website had been built with Wix and the client held a desire to add a fully functional blog to their site, I decided to integrate as much customization functionality as possible into the new site, something the client had gotten used to witin the Wix framework.',
          solution: 'After redesigning and constructing the core of Simply Put Your Ways\'s new website from scratch, I decided to build a blog for the client in a way that would allow them to control and use it independently without requiring any further assistance from myself once it was complete.  To achieve this I utilized MongoDB, Express, Angular and Node to build out the basic functionality of a blog and created the necessary crud resources to create, read, update and delete a blog post.  Once in place I set up user authentication to access a secret admin section of the site to only allow the client access to these crud privileges.  Lastly, in order to preserve the desired styles and formatting relative to each post the client created or updated I discovered and integreted a great plugin into the mix to help achieve what needed to be done.  Enter Text Angular.  A text editor plugin which enables a user to easily style text in a number of ways (basically the same level of editing freedom you can obtain from typing an email in Gmail).  Of course some customization for the editor was necessary to tweak things the way my client wanted but didn\'t prove to be too challenging.  Once the editor was in place I simply used Angular to render the output of the text from the editor as HTML and properly displayed each post correctly on the show pages.',
          conclusion: 'The client was ecstatic with the final product of their newly revamped website and could not wait to show off their new site and immediately jump into creating blog posts.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Angular', 'Animate.css', 'Pinterest API', 'Gmail API', 'jQuery', 'MongoDB', 'Express', 'Node', 'Git', 'Github', 'Responsive Design', 'Cross-Browser Compatitble']
      },
      {
          id: '2',
          urlTitle: 'cedar-park',
          title: 'Cedar Park',
          imageUrl: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/cedar_park_1.png',
          imageUrl2: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/cedar_park_2.png',
          imageUrl3: 'https://s3-us-west-1.amazonaws.com/jq2016-revamp/Project+Images/cedar_park_4_shrunk.png',
          mobileImage: '../assets/images/project_mobile_imgs/cedar_park_1_shrunk.png',
          projectUrl: 'http://cedarparkband.com',
          summary: 'Cedar Park is a San Francisco based four-piece alternative punk band, who has created a unique sound blending garage punk and pop punk.',
          problem: 'With only a social media presence already established on the internet, Cedar Park needed a website that they could call their own.',
          solution: 'Designing everything from scratch, I used Angular to build a single page website that housed a short biography, recent photos from the bands Instagram account, upcoming tour dates and contact links to their other social media accounts and email.',
          conclusion: 'The clients were quite pleased with the results of the final product and aim to have me build them a music player for them in the future after they record their first EP.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Instagram API', 'Angular', 'jQuery', 'Git', 'Github', 'Responsive Design', 'Cross-Browser Compatitble']
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