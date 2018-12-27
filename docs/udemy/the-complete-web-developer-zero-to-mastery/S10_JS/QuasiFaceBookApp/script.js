var database = [
	{
		username: "andrei",
		password: "supersecret"
	},
	{
		username: "sally",
		password: "123"
	},
	{
		username: "ingrid",
		password: "777"
	}
];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all the learning"
	},
	{
		username: "Sally",
		timeline: "JS's so cooool!!!"
	},
	{
		username: "Mitch",
		timeline: "JS's so niceeeeee !"
	}
];

function isUserValid (username, password) {
	for(var i=0; i < database.length; i++) {
		if (username === database[i].username && password === database[i].password) {
		return true;
	} 
  }
  return false;
}	


function signIn(username, password) {
  //console.log(isUserValid(username, password));
  if (isUserValid(username, password)) {
	console.log(newsfeed);
	} else {
		alert("Sorry, wrong username and password");
		}
}

var userNamePrompt = prompt("What\'s your name?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);