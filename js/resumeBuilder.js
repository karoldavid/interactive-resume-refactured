var work = {
  "jobs" : [
    {
      "employer" : "agileTournee",
      "title" : "Event Manager",
      "location" : "Berlin Germany",
      "dates": "2011-2015",
      "description" : "Event Management"
    },
    {
      "employer" : "Google (Manpower)",
      "title" : "Legal Removals Specialist",
      "location" : "Dublin Ireland",
      "dates": "2014",
      "description" : "The Right to be forgotten project"
    },
    {
      "employer" : "Constanza Macras | DorkyPark GmbH",
      "title" : "Production Manager",
      "location" : "Berlin Germany",
      "dates": "2010-2011",
      "description" : "Tour Performance Management"
    }
  ]
};

var projects = {
   "projects": [
     {
       "title" : "Responsive Website",
       "dates" : "2015",
       "description" : "http://www.susanne-fuelscher.de/" ,
       "images" : ["images/placeholder.jpg","images/placeholder.jpg","images/placeholder.jpg"]
   },
   {
      "title" : "PR Event",
      "dates" : "2009",
      "description" : "International Consumer Electronics (IFA)" ,
      "images" : ["images/placeholder.jpg","images/placeholder.jpg","images/placeholder.jpg"]
   }
 ]
};

var bio = {
  "name" : "Karol Zyskowski",
  "role": "Web Developer",
  "contacts" : {
    "mobile" : "+49 179 780 966 4",
    "email" : "k.zysk@zoho.com",
    "github" : "@karoldavid",
    "twitter" : "@karoldawid",
    "location" : "Berlin, Germany"
  },
  "welcomeMsg": "Hi there!",
  "bioPic" : "images/karol.png",
  "skills": ["Mobile Development","Responsive Websites","JS","PHP", "Flex-Box", "Wordpress"]
};

var education = {
  "schools" : [
  {
    "name" : "University Bremen",
    "location" : "Bremen, Germany",
    "degree" : "Master in Political Science",
    "major" : ["Political Science", "French Studies"],
    "year" : "2001-2007",
    "url" : "http://www.uni-bremen.de/"
  },
  {
    "name" : "Institut d'Etudes Politiques de Lille",
    "city" : "Lille, France",
    "degree" : "Certificat d'Etudes Politiques",
    "major" : ["Political Science", "French Studies"],
    "year" : "2004-2005",
    "url" : "http://www.sciencespo-lille.eu/"
  }
],
  "online-courses" : [
    {
      "title" : "DataWrangling with MongoDB",
      "school" : "Udacity",
      "dates" : "2014",
      "url" : "https://www.udacity.com/course/ud032"
    },
    {
      "title" : "Scientific Programming with Python",
      "school" : "MIT",
      "dates" : "2013",
      "url" : "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-0#.VPSQ6DVVK1E"
    }
]
};

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedGithub= HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").append(formattedWelcomeMsg);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

if ( bio.skills.length > 0 )
{
  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkill);
    }
}

function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    $(".work-entry:last").append(formattedEmployer + formattedTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
    }
}

function inName(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var names = oldName.split(" ");

    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    names[1] = names[1].toUpperCase();
    finalName = names.join(" ");
    // Don't delete this line!
    return finalName;
};

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedProjectDates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDescription);
    for (image in projects.projects[project].images) {
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedImage);
    }
  }
};

//$("#main").append(internationalizeButton);
displayWork();
projects.display();
//$("#mapDiv").append(googleMap);
