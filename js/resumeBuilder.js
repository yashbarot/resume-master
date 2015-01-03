
/*var awesomeThought = "I am Yash and I am awesome";
var funThoughts = awesomeThought.replace('awesome','FUN');
console.log(awesomeThought);
console.log(funThoughts);
$('#main').append(funThoughts);*/
var name = "Yash Barot";
var formattedName = HTMLheaderName.replace('%data%',name);
$('#header').append(formattedName);

var bio = {
	"name" : "Yash Barot",
	"role" : "Web Dev",
	"contacts" : {
		"mobile" : "+91 90332 91981",
		"email" : "yash@webelight.co.in",
		"github" : "@yashbarot",
		"twitter" : "barot_yash",
		"location" : "Ahmedabad"
	},
	"welcomeMessage" : "lorem aba ababaa ba a ba aa ab aa aba.....",
	"skills" : ["wakeup","work","sleep","Thats all"],
	"bioPic" : "images/fry.jpg"
}
var education = {
	"schools" : [
	   {
	   	"name" : "School-1 name goes here",
		"city" : "Ahmedabad",
		"degree" : "Bachelor",
		"majors" : "A",
		"dates" : 2013,
		"url" : "http://abc.com"
	   },
	   {
	   	"name" : "School-2 name goes here",
		"city" : "Ahmedabad",
		"degree" : "Master",
		"majors" : "A+",
		"dates" : 2014,
		"url" : "http://abc.com"
	   }
	],
	"onlineCourses" : [
		{
			"title" : "Js Basics",
			"school" : "Udacity",
			"dates" : 2014,
			"url" : "http://abc.com"
		}
	]
}
var work = {
	"jobs" : [
		{
			"employer" : "T T Geo",
			"title" : "Tea Man",
			"dates" : 2013,
			"description" : "vdfdsfvds gfdsfds sffsdf ddsdsff dsdsds dssdfdsf."
		},
		{
			"employer" : "T T Neo",
			"title" : "Maggi Man",
			"dates" : 2013,
			"description" : "vdfdsfvds gfdsfds sffsdf ddsdsff dsdsds dssdfdsf."
		}
	]
}
var projects = {
	"projects" : [
		{
			"title" : "Project - 1",
			"dates" : 2013,
			"description" : "vdfdsfvds gfdsfds sffsdf ddsdsff dsdsds dssdfdsf.vdfdsfvds gfdsfds sffsdf ddsdsff dsdsds dssdfdsf.",
			"images" : [
				"images/fry.jpg","images/197x148.gif"
			]
		},
		{
			"title" : "Project - 2",
			"dates" : 2014,
			"description" : "vdfdsfvds gfdsfds sffsdf ddsdsff dsdsds dssdfdsf.vdfdsfvds gfdsfds sffsdf ddsdsff dsdsds dssdfdsf.",
			"images" : [
				"images/fry.jpg","images/197x148.gif"
			]
		}
	]
}

if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedskills = HTMLskills.replace('%data%',bio.skills[0]);
	$("#skills").append(formattedskills);

	var formattedskills = HTMLskills.replace('%data%',bio.skills[1]);
	$("#skills").append(formattedskills);

	var formattedskills = HTMLskills.replace('%data%',bio.skills[2]);
	$("#skills").append(formattedskills);

	var formattedskills = HTMLskills.replace('%data%',bio.skills[3]);
	$("#skills").append(formattedskills);

}
function displayWork() {
	
	for(job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace('%data%',work.jobs[job].employer);

		var formattedTittle = HTMLworkTitle.replace('%data%',work.jobs[job].title);

		var formattedEmployerTitle = formattedEmployer + formattedTittle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedEmployerDates = HTMLworkDates.replace('%data%',work.jobs[job].dates);

		$(".work-entry:last").append(formattedEmployerDates);

		var formattedEmployerDescription = HTMLworkDescription.replace('%data%',work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerDescription);
	}
}	

displayWork();

projects.display = function() {

	for(project in projects.projects) {

		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace('%data%',projects.projects[project].title);

		$('.project-entry:last').append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace('%data%',projects.projects[project].dates);

		$('.project-entry:last').append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace('%data%',projects.projects[project].description);

		$('.project-entry:last').append(formattedProjectDescription);

		if(projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				
				var formattedProjectImages = HTMLprojectImage.replace('%data%',projects.projects[project].images[image]);

				$('.project-entry:last').append(formattedProjectImages);
			}
		}

	}
}

projects.display();