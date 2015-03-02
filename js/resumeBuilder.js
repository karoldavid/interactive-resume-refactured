var name = "Karol Zyskowski";
var role = "Web Developer";
var skills = ["awesomeness","programming","teaching","JS"];
var mobile = "+49 179 780 966 4";
var email = "k.zysk@zoho.com";
var github = "@karoldavid";
var twitter = "@karoldawid";
var city = "Berlin";
var WelcomeMsg = "Hi there!";
var bioPic = "images/karol.png";

var bio = {
  "name" : name,
  "role": role,
  "contacts" : {
    "mobile" : mobile,
    "email" : email,
    "github" : github,
    "twitter" : twitter,
    "location" : city
  },
  "WelcomeMsg": WelcomeMsg,
  "bioPic" : bioPic,
  "skills": skills
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.WelcomeMsg);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

//var formattedContact = HTMLcontactGeneric.replace("%data%", formattedMobile);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);


//$("#header").prepend(formattedContact);

$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedBioPic);

$("#topContacts").prepend(formattedLocation);
$("#topContacts").prepend(formattedTwitter);
$("#topContacts").prepend(formattedGithub);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedMobile);

$("#header").append(HTMLskillsStart);
//$("#header").append(formattedSkills);

for (var i = 0; i < bio.skills.length; i++) {
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
  $("#header").append(formattedSkills);
}

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// var work = {};
// work.position = "Event Manager";
// work.employer = "agileTournee";
// work.years = 3;
// work.city = "Berlin";
//
//
// $("#workExperience").prepend(HTMLworkStart);
// $("#workExperience").append(work["position"]);
//
// $("#projects").prepend(HTMLprojectStart);
//
// var education = {};
// education["name"] = "Oberstufe Alwin-Lonke-Straße";
// education["years"] = "1992-1995";
// education["city"] = "Bremen";
//
// $("#education").prepend(HTMLschoolStart);
// $("#education").append(education.name);
