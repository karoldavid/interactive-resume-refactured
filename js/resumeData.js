"use strict";

var bio = {
  "name" : "Karol Zyskowski",
  "role": "Web Developer",
  "welcomeMsg": "Once the genie is out of the bottle...",
  "bioPic" : "images/karol.png",
  "skills": ["Responsive Websites","Mobile Development", "Wordpress", "Python","JavaScript","PHP"]
};

var contact = {
  "phone" : "+49 30 301 393 71",
  "email" : "k.zysk@zoho.com",
  "github" : {"name" : "@karoldavid", "url" : "https://github.com/karoldavid?tab=repositories"},
  "twitter" : {"name" : "@karoldawid", "url" : "https://twitter.com/karoldawid"},
  "blog" : {"name" : "", "url" : ""},
  "location" : "Berlin, Germany"
};

var work = {
  "jobs" : [
    {
      "employer" : "Freelance",
      "title" : "Web Developer",
      "location" : "Berlin, Germany",
      "dates": "2015",
      "description" : "Responsive Websites",
      "url" : "http://karoldavid.github.io/"
    },
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
      "description" : "The right to be forgotten project",
      "url" : "https://support.google.com/legal/answer/3110420?rd=1"
    },
    {
      "employer" : "Constanza Macras | DorkyPark GmbH",
      "title" : "Production Manager",
      "location" : "Berlin, Germany",
      "dates": "2010-2011",
      "description" : "Tour Performance Management: 9 month, 7 countries, 30 shows",
      "url" : "http://www.dorkypark.org/"
    },
    {
      "employer" : "Marcus Evans",
      "title" : "Marketing Research Executive",
      "location" : "Berlin, Germany",
      "dates": "2010",
      "description" : "Event Marketing Research",
      "url" : "http://www.marcusevans.com/"
    },
    {
      "employer" : "wbpr GmbH",
      "title" : "Junior PR Consultant",
      "location" : "Berlin, Germany",
      "dates": "2009",
      "description" : "PR & Event Management",
      "url" : "http://www.wbpr.de/"
    },
    {
      "employer" : "AHK Polska - Wiadomosci Gospodarcze",
      "title" : "Freelance Writer",
      "location" : "Warsaw, Poland",
      "dates": "2008-2009",
      "description" : "Conducted Interviews, wrote articles, planned four magazines",
      "url" : "http://ahk.pl/pl/media/"
    },
    {
      "employer" : "Die Deutsche Kammerphilharmonie Bremen",
      "title" : "Assistent Tourmanagement",
      "location" : "Bremen, Germany",
      "dates" : "2006-2008",
      "description" : "Organized and coordinated classical music concerts",
      "url" : "http://www.kammerphilharmonie.com/"
    },
    {
      "employer" : "Doc en Stock",
      "title" : "Journaliste Stagiare",
      "location" : "Paris, France",
      "dates" : "2005",
      "description" : "Casted and invited guests for TV debates, researched and wrote treatments for documentary films" ,
      "url" : "http://www.docenstock.com/"
    }
  ]
};

var projects = {
   "projects": [
     {
        "title" : "Work in Progress: Online Movie Poster Gallery",
        "dates" : "2015",
        "description" : "Polish Movie Poster Gallery Website with 120 photographs of original art works from 1955 to 1989",
        "url" : "http://karoldavid.github.io/movie-poster-blog/",
        "images" : ["images/dziecko_rosemary.svg", "images/zabity_na_smierc.svg", "images/w_mroku_nocy.svg"]
     },
     {
        "title" : "Draft: Responsive Website",
        "dates" : "2015",
        "description" : "Responsive Website for a Martial Arts School",
        "url" : "http://karoldavid.github.io/chinese-boxing-international/",
        "images" : ["images/cbii.svg"]
     },
     {
       "title" : "Responsive Website",
       "dates" : "2015",
       "description" : "Responsive Website for an author and TV script writer",
       "url" : "http://www.susanne-fuelscher.de/",
       "images" : ["images/susanne-fuelscher.jpg"]
   },
   {
      "title" : "PR Event for IFA (International Consumer Electronics)",
      "dates" : "2009",
      "description" : "Organized and coordinated event, planned and wrote parcours, invited media",
      "url" : "http://www.morgenpost.de/printarchiv/berlin/article1165716/Loecher-in-die-Technik-fragen.html",
   },
   {
      "title" : "Nouvelle PAC de L'UE",
      "dates" : "2004",
      "description" : "Bourse de la Fondation Robert Bosch pour un stage au sein de la CFPJ de Paris",
      "url" : "http://www.cfpj.com/",
   },
   {
      "title" : "Concours de L'Express",
      "dates" : "2004-2005",
      "description" : "3ieme place",
      "url" : "http://www.lexpress.fr/"
   }
  ]
};

var education = {
  "schools" : [
  {
    "name" : "University Bremen",
    "location" : "Bremen, Germany",
    "degree" : "Master in Political Science",
    "major" : ["Political Science"],
    "dates" : "2001-2007",
    "url" : "http://www.uni-bremen.de/"
  },
  {
    "name" : "Institut d'Etudes Politiques de Lille",
    "location" : "Lille, France",
    "degree" : "Certificat d'Etudes Politiques",
    "major" : ["Political Science", "French Studies"],
    "dates" : "2004-2005",
    "url" : "http://www.sciencespo-lille.eu/"
  },
  {
    "name" : "GEOS Auckland Language Center",
    "location" : "Auckland, New Zealand",
    "degree" : "Certificate of Achievement",
    "major" : ["English"],
    "dates" : "2005",
    "url" : "http://www.language-programs.net/languageschool/12/18/geos_auckland_language_centre_auckland.htm"
  }
],
  "onlineClasses" : [
    {
      "title" : "Nanodegree Front-End Web Development",
      "school" : "Udacity",
      "dates" : "2015",
      "description" : "New type of project-based credential. It is built with industry to master skills that employers truly seek in a Front-End Web Developer",
      "url" : "https://www.udacity.com/course/nd001"
    },
    {
      "title" : "DataWrangling with MongoDB",
      "school" : "Udacity",
      "dates" : "2014",
      "description" : "Gather & extract data from widely used data formats. Assess quality of data. Best practices for data cleaning. MongoDB",
      "url" : "https://www.udacity.com/course/ud032"
    },
    {
      "title" : "Sales Force App Development",
      "school" : "Udacity",
      "dates" : "2014",
      "description" : "Build powerful web & mobile apps & host them in the cloud",
      "url" : "https://www.udacity.com/course/ud162"
    },
    {
      "title" : "Introduction to Computer Science and Programming Using Python",
      "school" : "MIT",
      "dates" : "2013",
      "description" : "https://verify.edx.org/cert/10cbffa98e364fbb997fd633dc6c2301",
      "url" : "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-0#.VR2O9Mvh5z0"
    }
  ]
};
