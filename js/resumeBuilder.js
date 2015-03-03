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
   "project": [
     {
       "title" : "Responsive Website",
       "dates" : "2015",
       "description" : "http://www.susanne-fuelscher.de/" ,
       "images" : ["images/one.png","images/two.png","images/three.png"]
   },
   {
      "title" : "Responsive Website",
      "dates" : "2015",
      "description" : "http://www.susanne-fuelscher.de/" ,
      "images" : ["images/one.png","images/two.png","images/three.png"]
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
  "WelcomeMsg": "Hi there!",
  "bioPic" : "images/karol.png",
  "skills": ["awesomeness","programming","teaching","JS"]
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

};

// for (jobs in work) {
//
// };
