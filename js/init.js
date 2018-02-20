var portfolioPieces = [{
        name: "EventStay",
        description: "Frontend application allowing users to find hotels near concert events by making AJAX calls to Hotwire and Seatgeek APIs.",
        URL: "https://kiddmit3.github.io/EventStay/",
        image: "./assets/img/portfolio/eventstay.png",
        technologies: ["html5", "css", "jquery", "materialize"]
    },
    {
        name: "PLW Tutoring",
        description: "Built for Premier Education, this is a customized React application that organizes schedules for tutors and students.",
        URL: "https://plw-tutor-service.herokuapp.com/",
        image: "./assets/img/portfolio/PLW.png",
        technologies: ["html5", "css", "node", "javascript", "expressjs", "mysql", "materialize", "reactjs"]
    },
    {
        name: "TapTapBeat",
        description: "Front end application using Paper.js and Howler.js libraries. Press any of the 27 letter keys to generate a shape and a sound.",
        URL: "https://kiddmit3.github.io/TapTapBeat/",
        image: "./assets/img/portfolio/taptap.jpg",
        technologies: ["html5", "css", "javascript"],
        other: ["howler.js", "paper.js"]
    },
    {
        name: "FriendFinder",
        description: "Answer some simple questions and make a friend with someone our the database.",
        URL: "https://davidsfriendfinder.herokuapp.com/",
        image: "./assets/img/portfolio/friendfinder.png",
        technologies: ["html5", "css", "jquery", "bootstrap"]
    },
    {
        name: "RGB ColorGame",
        description: "Choose the correct colored square in an RBG scheme. Play either in easy, medium, or hard mode. Using vanilla javascript.",
        URL: "https://kiddmit3.github.io/RBGColorGame/",
        image: "",
        technologies: ["html5", "css", "javascript"]
    },
    {
        name: "ToDoList",
        description: "Simple, stylized to-do list using jQuery",
        URL: "https://kiddmit3.github.io/ToDoList/",
        image: "./assets/img/portfolio/todo.jpg",
        technologies: ["html5", "css", "jquery", "bootstrap"]
    },
    {
        name: "Plastic Boulders",
        description: "A full stack application that allows rock climbing gym-goers to document and share their climbs, past and present. Create an account, upload images, and contribute to the database of climbing routes.",
        URL: "https://github.com/kiddmit3/plasticBoulders",
        image: "./assets/img/portfolio/plasticb.jpg",
        technologies: ["html5", "css", "node", "javascript", "expressjs", "mongodb", "bootstrap"]
    },
    {
        name: "Newspaper Scrapper Note Taker",
        description: "",
        URL: "",
        image: "",
        technologies: ""
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
    $('.scrollspy').scrollSpy({ scrollOffset: 55 });
    $('.collapsible').collapsible();
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    portMain(0);
});



// $('.carousel').carousel({fullWidth: false},{dist: -20});
//  autoplay();

//  function autoplay(){
//  $('.carousel').carousel('next');
//  setTimeout(autoplay,6000);
// }