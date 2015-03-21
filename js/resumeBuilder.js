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
  "welcomeMsg": "Once the genie is out of the bottle...",
  "bioPic" : "images/karol.png",
  "skills": ["Responsive Websites","Mobile Development", "Wordpress", "Python","JavaScript","PHP"]
};

var work = {
  "jobs" : [
    {
      "employer" : "agileTournée",
      "title" : "Event Manager",
      "location" : "Berlin, Germany",
      "dates": "2011-2015",
      "description" : "Event Management",
      "url" : "http://www.agiletournee.com/"
    },
    {
      "employer" : "Google (Manpower)",
      "title" : "Legal Removals Specialist",
      "location" : "Dublin, Ireland",
      "dates": "2014",
      "description" : "The Right to be forgotten project"
    },
    {
      "employer" : "Constanza Macras | DorkyPark GmbH",
      "title" : "Production Manager",
      "location" : "Berlin, Germany",
      "dates": "2010-2011",
      "description" : "Tour Performance Management"
    },
    {
      "employer" : "AHK Polska - Wiadomosci Gospodarcze",
      "title" : "Freelance Writer",
      "location" : "Warsaw, Poland",
      "dates": "2008-2009",
      "description" : "Conducted Interviews, wrote articles, planned four magazines"
    },
    {
      "employer" : "Doc en Stock",
      "title" : "Journaliste stagiare",
      "location" : "Paris, France",
      "dates" : "2005",
      "description" : "Casted and invited guests for TV debates, researched and wrote treatments for documentary films" ,
      "images" : ["images/placeholder.jpg","images/placeholder.jpg","images/placeholder.jpg"]
    },
  ]
};

var projects = {
   "projects": [
     {
       "title" : "Responsive Website for an author and TV script writer",
       "dates" : "2015",
       "description" : "http://www.susanne-fuelscher.de/" ,
       "images" : ["images/susanne-fuelscher_small.jpg"]
   },
   {
      "title" : "PR Event for IFA (International Consumer Electronics)",
      "dates" : "2009",
      "description" : "Organized and coordinated event, planned and wrote parcours, invited media" ,
      "images" : ["images/placeholder.jpg","images/placeholder.jpg","images/placeholder.jpg"]
   },
   {
      "title" : "Nouvelle PAC de L'UE",
      "dates" : "2004",
      "description" : "Bourse de la Fondation Robert Bosch pour un stage au sein de la CFPJ de Paris",
      "images" : ["images/placeholder.jpg","images/placeholder.jpg","images/placeholder.jpg"]
   },
   {
      "title" : "Concours de L'Express",
      "dates" : "2004-2005",
      "description" : "3ieme place" ,
      "images" : ["images/placeholder.jpg","images/placeholder.jpg","images/placeholder.jpg"]
   }
 ]
};

var education = {
  "schools" : [
  {
    "name" : "University Bremen",
    "location" : "Bremen Germany",
    "degree" : "Master in Political Science",
    "major" : ["Political Science"],
    "dates" : "2001-2007",
    "url" : "http://www.uni-bremen.de/"
  },
  {
    "name" : "Institut d'Etudes Politiques de Lille",
    "location" : "Lille France",
    "degree" : "Certificat d'Etudes Politiques",
    "major" : ["Political Science", "French Studies"],
    "dates" : "2004-2005",
    "url" : "http://www.sciencespo-lille.eu/"
  }
],
  "onlineClasses" : [
    {
      "title" : "Nano Degree Front End Web Developer",
      "school" : "Udacity",
      "dates" : "2015",
      "url" : "https://www.udacity.com/course/ud032"
    },
    {
      "title" : "DataWrangling with MongoDB",
      "school" : "Udacity",
      "dates" : "2014",
      "url" : "https://www.udacity.com/course/ud032"
    },
    {
      "title" : "Sales Force App Development",
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

work.display = function() {
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

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedSchoolMajor);
  }
  if (education.onlineClasses) {
    $("#education").append(HTMLonlineClasses);
    for (onlineClass in education.onlineClasses) {
      $("#education").append(HTMLschoolStart);
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineClass].title);
      //if (typeof(education.onlineClasses[onlineClass].url) !== 'undefined') {
      //$(formattedOnlineTitle).replace('#', education.onlineClasses[onlineClass].url);
      //href.attr('href', education.onlineClasses[onlineClass].url);
      //}
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineClass].school);
      $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[onlineClass].dates);
      $(".education-entry:last").append(formattedOnlineDates);
      var formattedOnlineURL= HTMLonlineURL.replace("%data%", education.onlineClasses[onlineClass].url);
      $(".education-entry:last").append(formattedOnlineURL);
    }
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

//$("#main").append(internationalizeButton);

work.display();

projects.display();

education.display();

$("#mapDiv").append(googleMap);

//add target="_blank" to every href
// $(function() {
//
//   $('a').attr('href', 'http://www.susanne-fuelscher.de/');
//
// });
// $("a[href='#']").each(function()
//    {
//       this.href = this.href.attr("#",
//          "http://www.agiletournee.com");
//    });


//remove all empty href attributes
$("a[href='#']").each(function()
   {
      this.removeAttribute("href");

   });

$(".contact").hover(function()
   {
       $(this).css('background', 'red');
       $(this).css('cursor', 'pointer');
   },
   function()
   {
       $(this).css('background', '#4A525A')
  });
