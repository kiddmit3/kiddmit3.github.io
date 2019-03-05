var portfolioPieces = [
    {
        name: "Infinite Promotions",
        description: "(Partner) Social Media automation and marketing tool for real estate professionals. Manages facebook pages, instagram, twitter, linkedin, and pintrest. Paid accounts recieve full access to the client portal and post automation.",
        URL: "https://infinitepromoters.com",
        image: "./assets/img/portfolio/infinite.jpg",
        technologies: ["html5", "css", "javascript", "jquery", "bootstrap", "node", "expressjs", "mongodb"]
    },
    {
        name: "EventStay",
        description: "(Project) Frontend application allowing users to find hotels near concert events by making AJAX calls to Hotwire and Seatgeek APIs.",
        URL: "https://kiddmit3.github.io/EventStay/",
        image: "./assets/img/portfolio/eventstay.png",
        technologies: ["html5", "css", "jquery", "materialize"]
    },
    {
        name: "Premier Education Tutoring",
        description: "(Client) Built for Premier Education, this is a customized React application that books session for tutors and students.",
        URL: "https://paarcadia.com/",
        image: "./assets/img/portfolio/PLW.png",
        technologies: ["html5", "css", "node", "javascript", "expressjs", "mysql", "materialize", "reactjs"]
    },
    {
        name: "TapTapBeat",
        description: "(Project) Front end application using Paper.js and Howler.js libraries. Press any of the 27 letter keys to generate a shape and a sound.",
        URL: "https://kiddmit3.github.io/TapTapBeat/",
        image: "./assets/img/portfolio/taptap.jpg",
        technologies: ["html5", "css", "javascript"],
        other: ["howler.js", "paper.js"]
    },
    {
        name: "RGB ColorGame",
        description: "(Project) Choose the correct colored square in an RBG scheme. Play either in easy, medium, or hard mode. Using vanilla javascript.",
        URL: "https://kiddmit3.github.io/RBGColorGame/",
        image: "",
        technologies: ["html5", "css", "javascript"]
    },
    {
        name: "ToDoList",
        description: "(Project) Simple, stylized to-do list using jQuery",
        URL: "https://kiddmit3.github.io/ToDoList/",
        image: "./assets/img/portfolio/todo.jpg",
        technologies: ["html5", "css", "jquery", "bootstrap"]
    },
    {
        name: "βoulders™",
        description: "(Founder) A full stack application that allows rock climbing gym-goers to document and share their climbs, past and present. Create an account, upload images/videos, and contribute to the database of climbing routes. But most of all, view the solutions to the routes you are struggling with at the gym! Log in with username: 'demo' and password: 'password' to see all the features including QR codes, membership checkin, and personal statistics.",        
        URL: "https://betabouldersapp.com",
        image: "./assets/img/portfolio/plasticb.jpg",
        technologies: ["html5", "css", "node", "javascript", "expressjs", "mongodb", "bootstrap"]
    },
    {
        name: "PollstaRT",
        description: "(Project) Full Stack application that allows real time voting and updating using web sockets for connection and canvas.js for display.",
        URL: "https://pollstart.herokuapp.com/",
        image: "./assets/img/portfolio/pollstart.png",
        technologies: ["html5", "css", "node", "javascript", "expressjs", "mongodb", "materialize"]
    },
    {
        name: "Giftastic",
        description: "(Project) A dynamic web page that populates with gifs of your choice using Giphy API.",
        URL: "https://kiddmit3.github.io/GifTastic",
        image: "./assets/img/portfolio/giftastic.png",
        technologies: ["html5", "css", "bootstrap", "javascript"]
    },
    {
        name: "DJ WUWU",
        description: "(Client) React single page application with mobile responsiveness to elagantly promote a LA based DJ",
        URL: "https://djwuwu.com",
        image: "./assets/img/portfolio/djwuwu.png",
        technologies: ["html5", "css", "node", "javascript", "expressjs", "bootstrap", "reactjs", "mongodb"]
    }
];

function portMain(index) {
    $("#port-img").attr("src", portfolioPieces[index].image);
    $("#port-title").text(portfolioPieces[index].name);
    $("#port-link").attr("href", portfolioPieces[index].URL).text(portfolioPieces[index].URL);
    $("#port-description").text(portfolioPieces[index].description);
    $("#port-badges").html("");

    portfolioPieces[index].technologies.forEach(function(item) {
        var badge = $("<img>").attr("class", "badge").attr("src", "./assets/img/" + item + ".png");
        $("#port-badges").append(badge)
    });
}

$(".port-card").click(function() {
    var picked = $(this).attr('data-name');
    var indexOfPicked = portfolioPieces.map(function(e) { return e.name; }).indexOf(picked);
    portMain(indexOfPicked);
});

$(document).ready(function() {
    $('.scrollspy').scrollSpy({ scrollOffset: 115 });
    $('.collapsible').collapsible();
    $('.sidenav').sideNav();
    $('.parallax').parallax();
    portMain(0);
});
       


// $('.carousel').carousel({fullWidth: false},{dist: -20});
//  autoplay();

//  function autoplay(){
//  $('.carousel').carousel('next');
//  setTimeout(autoplay,6000);
// }