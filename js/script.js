class Profile {
	constructor(image, name, surname, age, gender, inRelation) {
			this.image = image;
			this.name = name;
			this.surname = surname;
			this.age = age;
			this.gender = gender;
   			this.inRelation = inRelation;  
   	}
};    



//ProfileData (Objects are stored in an Array)
var people = [

new Profile("img/woman1.jpg", "Pippilotta", "Langstrumpf", "23", "Woman", true),
new Profile("img/woman2.jpg", "Susi", "Sorglos", "32", "Woman", false),
new Profile("img/woman3.jpg", "Paula", "Puntigam", "30", "Not Specified", true),
new Profile("img/woman4.jpg", "Arabella", "Angular", "25", "Woman", false),
new Profile("img/woman5.jpg", "Brenda", "Bollywood", "35", "Woman", true),
new Profile("img/woman6.jpg", "Hilde", "Halloween", "18", "Woman", false),
new Profile("img/woman7.jpg", "Betty", "Bluehair", "29", "Woman", true),
new Profile("img/woman8.jpg", "Agathe", "Adelmeyer", "88", "Woman", true),
new Profile("img/woman9.jpg", "Sabine", "Sonderbar", "34", "Woman", false),
new Profile("img/woman10.jpg", "Georgette", "Glass", "27", "Woman", false),
new Profile("img/man1.jpg", "Tucker", "Tuck", "54", "Man", true),
new Profile("img/man2.jpg", "Michael", "Möchtegern", "28", "Man", true),
new Profile("img/man3.jpg", "willy", "weihnachtsmann", "99", "Not Specified", false),
new Profile("img/man4.jpg", "Rudi", "Ratlos", "27", "Man", false),
new Profile("img/man5.jpg", "Xavier", "Zwergnase", "98", "Man", true),
new Profile("img/man6.jpg", "Kenal", "Körriwurst", "27", "Man", false),
new Profile("img/man7.jpg", "James", "Blond", "65", "Man", true),
new Profile("img/man8.jpg", "Anton", "Amokläufer", "56", "Man", false),
new Profile("img/man9.jpg", "Manuel", "Matrose", "44", "Man", true),
new Profile("img/man10.jpg", "Billy", "Blindface", "22", "Man", false),




];




//Getting the elements Id's from HTML

var allPeople = document.getElementById("profile_container");
//var allMusic = document.getElementById("music");
//var allFilm = document.getElementById("film");



//Loop for people
for (var i=0; i<people.length; i++) {
	allPeople.innerHTML += '<div class="col-md-6">' +
						  	'<div class="thumbnail">' +
						  		'<img src="' + people[i].image + '"' +
						  		'<div class="caption">' +
						  			'<h4 class="title">' + people[i].name + '</h4>' +
						  				'<p>' +
						  					'<span class="surname">' + "Surname: " + people[i].surname + '</span><br>' +
						  					'<span class="age">' + "Age: : " + people[i].age + '</span><br>' +
						  					'<span class="gender">' + "Gender: " + people[i].gender + '</span><br>' +
						  					'<span class="inRelationship">' + "Relationship: " + people[i].inRelation + '</span><br>' +
						  				'</p>' +
						  			'</div>' +
						  		'</div>' +
						  	'</div>';
};

/*
//Loop for Music
for (var i=0; i<music.length; i++) {
	allMusic.innerHTML += '<div class="col-lg-2">' +
						  	'<div class="thumbnail">' +
						  		'<img src="' + music[i].image + '">' +
						  		'<div class="caption">' +
						  			'<h4 class="title">' + music[i].title + '</h4>' +
						  				'<p>' + 
						  					'<span class="author">' + "Author: " + music[i].author + '</span><br>' +
						  					'<span class="genre">' + "Genre: " + music[i].genre + '</span><br>' +
						  					'<span class="publisher">' + "Publisher: " + music[i].publisher + '</span><br>' +
						  					'<span class="rating">' + "Rating: " + music[i].rating + '</span><br>' +
						  				'</p>' +
						  			'</div>' +
						  		'</div>' +
						  	'</div>';
};

//Loop for Films
for (var i=0; i<film.length; i++) {
	allFilm.innerHTML += '<div class="col-lg-2">' +
						  	'<div class="thumbnail">' +
						  		'<img src="' + film[i].image + '">' +
						  		'<div class="caption">' +
						  			'<h4 class="title">' + film[i].title + '</h4>' +
						  				'<p>' + 
						  					'<span class="author">' + "Author: " + film[i].author + '</span><br>' +
						  					'<span class="genre">' + "Genre: " + film[i].genre + '</span><br>' +
						  					'<span class="publisher">' + "Publisher: " + film[i].publisher + '</span><br>' +
						  					'<span class="rating">' + "Rating: " + film[i].rating + '</span><br>' +
						  				'</p>' +
						  			'</div>' +
						  		'</div>' +
						  	'</div>';
};
*/