
$(function() {
  "use strict";

  var model = {
    init: function() {
      if (!localStorage.notes) {
        localStorage.resume = JSON.stringify({'bio': bio, 'contact': contact, 'work': work, 'projects': projects, 'education': education});
      }
    },
    get: function(obj) {
      return JSON.parse(localStorage.resume)[obj];
    }
  };

  var octopus = {
    init: function() {
      model.init();

      titleView.init();
      skillsView.init();
      contactView.init();

      workView.init();
      projectsView.init();
      educationView.init();
    },
    getBio: function() {
      return model.get('bio');
    },
    getContact: function() {
      return model.get('contact');
    },
    getWork: function() {
      return model.get('work');
    },
    getProjects: function() {
      return model.get('projects');
    },
    getEducation: function() {
      return model.get('education');
    }
  };

  // Credit goes to: http://jsfiddle.net/tJk34/
  function checkIfEmailInString(text) { 
    var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    return re.test(text);
  }

  var titleView = {
    init: function() {
      this.titleNameElem = $('#title h1');
      this.titleRoleElem  = $('#title span');
      this.infoElem = $('#info');
      this.imgElem = document.createElement('img');
      this.welcomeElem = $('#info span');

      titleView.render();
    },
    render: function() {
      this.titleNameElem.text(octopus.getBio().name);
      this.titleRoleElem.text(octopus.getBio().role);

      this.imgElem.src = octopus.getBio().bioPic;
      this.imgElem.className = "biopic";
      this.infoElem.prepend(this.imgElem);

      this.welcomeElem.text(octopus.getBio().welcomeMsg);
      this.infoElem.append(this.welcomeElem);
    }
  };

  var skillsView = {
    init: function() {
      this.skillsElem = $('#skills');
      skillsView.render();
    },
    render: function() {
      var skills = octopus.getBio().skills;

      for (var i = 0; i < skills.length; i++) {
        var elem = document.createElement('li');
        elem.textContent =  skills[i];
        elem.className = 'flex-item light-gray-text';
        this.skillsElem.append(elem);
      }
    }
  };

  var contactView = {
    init: function() {
      this.footerContactElem = $('#footerContacts');
      this.zocialClasses = {"phone": "zocial-call", "email": "zocial-email", "twitter": "zocial-twitter", "github": "zocial-github", "location": "" };

      contactView.render();
    },
    render: function() {
      var contact = octopus.getContact();

      for (var p in this.zocialClasses) {

        var zocial = this.zocialClasses[p],
            id = p,
            text = contact[p].name || contact[p],
            target = "";

        if (contact[p].url) {
          target = 'href="' + contact[p].url + '" target="_blank"';
        } else if (checkIfEmailInString(contact[p])) {
          target = 'href="mailto:' + contact['email'] + '" target="_self"';
        }
 
        var elem = '<li class="flex-item contact" id="'
                   + id + '"><a ' + target + '><span class="'
                   + zocial + ' soft-blue-text"></span><span class="gray-text">'
                   + text + '</span></a></li>';

        this.footerContactElem.append(elem);
      }
    }
  };

  var workView = {
    init: function() {
      this.workElem = $('#workExperience');

      workView.render();
    },
    render: function() {
      var jobs = octopus.getWork().jobs;
      
      for (var job in jobs) {
        var elem = '<div class="work-entry">'
                   + '<a href="' + jobs[job].url + '" target="_blank">'
                   + jobs[job].employer + '- ' + jobs[job].title + '</a>'
                   + '<div class="date-text">' + jobs[job].dates + '</div>'
                   + '<div class="location-text">' + jobs[job].location + '</div>'
                   + '<p><br>' + jobs[job].description + '</p></div>';

        this.workElem.append(elem);
      }
    }
  };

  var projectsView = {
    init: function() {
      this.projectsElem = $('#projects');

      projectsView.render();
    },
    render: function() {
      var projects = octopus.getProjects().projects;

      for (var project in projects) {
        var imgElems = "";

        for (var img in projects[project].images) {
          imgElems += '<img src="' + projects[project].images[img] + '" width="200">';
        }

        var elem = '<div class="project-entry">'
                 + '<a href="' + projects[project].url + '" target="_blank">'
                 + projects[project].title + '</a>' + '<div class="date-text">'
                 + projects[project].dates + '</div><p><br>'
                 + projects[project].description + '</p>'
                 + imgElems + '</div>';

        this.projectsElem.append(elem);
      }
    }
  };

  var educationView = {
    init: function() {
      this.educationElem = $('#education');

      educationView.render();
    },
    render: function() {
      var schools = octopus.getEducation().schools;

      for (var school in schools) {
        var elem = '<div class="education-entry">'
                   + '<a href="' + schools[school].url + '" target="_blank">'
                   + schools[school].name + ' -- ' + schools[school].degree
                   + '</a><div class="date-text">' + schools[school].dates + '</div>'
                   + '<div class="location-text">' + schools[school].location + '</div>'
                   + '<em><br>Major: ' + schools[school].major + '</em></div>';

        this.educationElem.append(elem);
      }
    
      this.educationElem.append('<h3>Online Classes</h3>');

      var onlineClasses = octopus.getEducation().onlineClasses;

      for (var c in onlineClasses) {
        var elem = '<div class="education-entry">'
                   + '<a href="' + onlineClasses[c].url + '" target="_blank">' + onlineClasses[c].title
                   + ' - ' + onlineClasses[c].school + '</a>'
                   + '<div class="date-text">' + onlineClasses[c].dates + '</div>'
                   + '<p><br>' + onlineClasses[c].description + '</p></div>';
        this.educationElem.append(elem);
      }
    }
  };

  octopus.init();
  $("#mapDiv").append(googleMap);
});