// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.
var bio = {
    "name": "Keerthana",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "1234567890",
        "email": "keerthi.vakiyil3@gmail.com",
        "github": "Udacity-Keerthana",
        "location": "Palakkad"
    },
    "welcomeMessage": "Hi! Welcome to my Resume!",
    "skills": [
        "C++", "SQL", "HTML", "Co-ordinating events", "Dancing"
    ],
    "biopic": "images/pro2.jpg",
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    var formattedBioPic = HTMLbiopic.replace("%data%", bio.biopic);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace('%data%', skill);
            $('#skills').append(formattedSkill);
        });
    }

    $("#header").prepend(formattedName, formattedRole);
    $("#header").append(formattedWelcome);

    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

    $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);


    $("#header").append(formattedBioPic);

};

bio.display();



var education = {
    "schools": [{
        "name": "Nehru College",
        "location": "Thrissur",
        "degree": "Bachelors Degree",
        "majors": ["Information Technology"],
        "dates": "2016",
        "url": "www.ncerc.ac.in"
    }],
    "onlineCourses": [{
        "title": "Front End Web Developer Nano Degree",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com/"

    }]

};

education.display = function() {

    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry").append(formattedschoolName + formattedschoolDegree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry").append(formattedschoolDates);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry").append(formattedschoolMajor);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry").append(formattedschoolLocation);
        var formattedschoolURL = HTMLschoolURL.replace("%data%", education.schools[i].url);
        $(".education-entry").append(formattedschoolURL);
        //var formattedschoolURL = HTMLschoolURL.replace("#", education.schools[i].url);
        //$(".education-entry").append(formattedschoolURL);
    }

    for (i = 0; i < education.onlineCourses.length; i++) {
        $(".education-entry").append(HTMLonlineClasses);
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".education-entry").append(formattedonlineTitle + formattedonlineSchool);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry").append(formattedonlineDates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry").append(formattedonlineURL);
    }

};

education.display();


var work = {
    "jobs": [{
        "employer": "Infosys",
        "title": "Systems Engineer",
        "location": "Mysore",
        "dates": "in progress",
        "description": "One who is responsible for planning and engineer an organization's system infrastructure, including the implementation and design of hardware and software. One who monitors the performance of systems."
    }]
};

work.display = function() {
    if (work.jobs.length > 0) {

        for (var i = 0; i < work.jobs.length; i++) {

            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            //var formattedEmployerUrl = HTMLworkEmployer.replace("#", 'http://www.infosys.com');

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry").append(formattedEmployerWorkTitle);
            $(".work-entry").append(formattedWorkLocation);
            $(".work-entry").append(formattedDates);
            $(".work-entry").append(formattedWorkDescription);
        }
    }
};

work.display();

var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "2016",
        "description": "Developed a personal portfolio using HTML, CSS and bootstrap framework",
        "images": ["images/portfolio.jpg"]
    }]
};

projects.display = function() {
    if (projects.projects.length > 0) {

        for (var i = 0; i < projects.projects.length; i++) {

            $("#projects").append(HTMLprojectStart);
            var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);


            $(".project-entry").append(formattedprojectTitle);
            $(".project-entry").append(formattedprojectDates);
            $(".project-entry").append(formattedprojectDescription);

        }

        for (i = 0; i < projects.projects.length; i++) {

            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
            $(".project-entry").append(formattedImage);
        }
    }
};

projects.display();

$("#mapDiv").append(googleMap);