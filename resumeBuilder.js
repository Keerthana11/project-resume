/*
This is empty on purpose! Your code to build the resume will go here.
 */
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
        "Co-ordinating events", "Singing", "Dancing"
    ],
    "bioPic": "images/pro2.jpg",
};

function displaybio() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    //$("#header").prepend(formattedName);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    //$("#header").append(formattedRole);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    //$("#header").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    //$("#header").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    //$("#header").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    //$("#header").append(formattedLocation);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    //$("#header").append(formattedWelcome);
    //$("#header").append(formattedPic);
    //var formattedSkills = HTMLskills.replace("%data%", bio.skills);
    //$("#header").append(formattedSkills);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace('%data%', skill);
            $('#skills').append(formattedSkill);
        });
    };

    $("#header").prepend(formattedName, formattedRole);
    $("#header").append(formattedWelcome);

    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

    $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);


    $("#header").append(formattedBioPic);
    //$("#skills").append(formattedSkill);
};

displaybio();



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

function displayeducation() {
    //var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools.name);
    //if (education.schools.length > 0) {
    /*$("#education").append(HTMLschoolStart);
    education.schools.forEach(function(school){
        $("#education").append(HTMLschoolStart);
    });};
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools.name);
        //$(".education-entry:last").append(formattedschoolName);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools.location);
        //$(".education-entry:last").append(formattedSchoolLocation);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools.degree);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools.majors);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools.dates);
        //var formattedSchoolUrl = HTMLschoolDegree.replace("%data%", education.schools.degree);
		$(".education-entry").append( formattedschoolName + formattedschoolDegree, formattedschoolLocation);
  		$(".education-entry").append( formattedschoolMajor, formattedschoolDates);
	*/
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        //$(".education-entry").append(formattedschoolName);
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
    }

    for (var i = 0; i < education.onlineCourses.length; i++) {
        $(".education-entry").append(HTMLonlineClasses);
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        //$(".education-entry").append(formattedonlineTitle);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".education-entry").append(formattedonlineTitle + formattedonlineSchool);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry").append(formattedonlineDates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry").append(formattedonlineURL);
    }

};

displayeducation();


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
        "description": "Creating a personal portfolio describing your featured works",
        "images": ["images/portfolio.jpg"]
    }]
};

function displayprojects() {
    if (projects.projects.length > 0) {

        for (var i = 0; i < projects.projects.length; i++) {

            $("#projects").append(HTMLprojectStart);
            var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);

            $(".project-entry").append(formattedprojectTitle);
            $(".project-entry").append(formattedprojectDates);
            $(".project-entry").append(formattedprojectDescription);
            $(".project-entry").append(formattedImage);
        }
    }
};

displayprojects();

$("#mapDiv").append(googleMap);