class Profile {
	constructor(image, name, surname, age, inRelation) {
			this.image = image;
			this.name = name;
			this.surname = surname;
			this.age = age;
   			this.inRelation = inRelation;  
   	}
 //////////////////method for output data////////////////////////
  	render() {
  		let msg = `
  		<div class="col-lg-3 col-md-6" col-sm-12>
  			<div class="thumbnail" id="thumbnail">
  				<img src=" ${this.image} ">
  				<div class="caption">
  					<h3> ${this.name} </h3>
  					<p><strong>
  						<span>Surname:  ${this.surname} </span><br>
  						<span>Age:  ${this.age} </span><br>	
  						<span>In Relationship:  ${this.InRelation} </span><br>
  						<span> ${this.constructor.name} </span>
  					</p></strong>
  				</div>
  			</div>
  		</div>`;
  	return msg;
  	}
};    
//-------------------------------------------------------------------------------//

class Woman extends Profile {
	constructor(image, name, surname, age, inRelation) {
		super(image, name, surname, age, inRelation);
	}
	render() {
		let msg = `
  		<div class="col-lg-3 col-md-6" col-sm-12>
  			<div class="thumbnail" id="thumbnail">
  				<img src=" ${this.image} ">
  				<div class="caption">
  					<h3> ${this.name} </h3>
  					<p><strong>
  						<span>Surname:  ${this.surname} </span><br>
  						<span>Age:  ${this.age} </span><br>	
  						<span>In Relationship:  ${this.InRelation} </span><br>
  						<span> ${this.constructor.name} </span>
  					</p></strong>
  				</div>
  			</div>
  		</div>`;
  	return msg;
	}
};
//-------------------------------------------------------------------------------//

class Man extends Profile {
	constructor(image, name, surname, age, inRelation) {
		super(image, name, surname, age, inRelation);
	}
	render() {
		let msg = `
  		<div class="col-lg-3 col-md-6" col-sm-12>
  			<div class="thumbnail" id="thumbnail">
  				<img src=" ${this.image} ">
  				<div class="caption">
  					<h3> ${this.name} </h3>
  					<p><strong>
  						<span>Surname:  ${this.surname} </span><br>
  						<span>Age:  ${this.age} </span><br>	
  						<span>In Relationship:  ${this.InRelation} </span><br>
  						<span> ${this.constructor.name} </span>
  					</p></strong>
  				</div>
  			</div>
  		</div>`;
  	return msg;
	}
};
//--------------------------------------------------------------------------------//



//////////////////ProfileData (Objects are stored in an Array)/////////////////////
var people = [

new Woman("img/woman1.jpg", "Pippilotta", "Langstrumpf", "23", true),
new Man("img/man6.jpg", "Kenal", "Körriwurst", "27", false),
new Man("img/man4.jpg", "Rudi", "Ratlos", "27", false),
new Woman("img/woman3.jpg", "Paula", "Puntigam", "30", true),
new Woman("img/woman4.jpg", "Arabella", "Angular", "25", false),
new Woman("img/woman6.jpg", "Hilde", "Halloween", "18", false),
new Woman("img/woman8.jpg", "Agathe", "Adelmeyer", "88", true),
new Woman("img/woman9.jpg", "Sabine", "Sonderbar", "34", false),
new Man("img/man8.jpg", "Anton", "Amokläufer", "56", false),
new Man("img/man1.jpg", "Tucker", "Tuck", "54", true),
new Man("img/man2.jpg", "Michael", "Möchtegern", "28", true),
new Woman("img/woman10.jpg", "Georgette", "Glass", "27", false),
new Woman("img/woman2.jpg", "Susi", "Sorglos", "32", false),
new Man("img/man5.jpg", "Xavier", "Zwergnase", "98", true),
new Woman("img/woman7.jpg", "Betty", "Bluehair", "29", true),
new Man("img/man7.jpg", "James", "Blond", "65", true),
new Man("img/man9.jpg", "Manuel", "Matrose", "44", true),
new Woman("img/woman5.jpg", "Brenda", "Bollywood", "35", true),
new Man("img/man10.jpg", "Billy", "Blindface", "22", false),
new Man("img/man3.jpg", "Willy", "Nikolaus", "99", false),
];


/////////////////Output////////////////////////////
function showAllProfiles() {
	let allProfiles = document.getElementById("profile_container");
	for (let i = 0; i < people.length; i++) {
		allProfiles.innerHTML += people[i].render();
	}
};



function showOnlyWoman() {
  let allProfiles = document.getElementById("profile_container");
  for (let i = 0; i < people.length; i++) {

    if (people[i].constructor.name == "Woman") {
    allProfiles.innerHTML += people[i].render();
    }
  }
};

function showOnlyMan() {
  let allProfiles = document.getElementById("profile_container");
  for (let i = 0; i < people.length; i++) {

    if (people[i].constructor.name == "Man") {
    allProfiles.innerHTML += people[i].render();
    }
  }
};






/*
//Getting the elements Id's from HTML
var allPeople = document.getElementById("profile_container");
*/

/*
//Loop for people
for (var i=0; i<people.length; i++) {
	allPeople.innerHTML += '<div class="col-lg-3 col-md-6" col-sm-12>' +
						  	'<div class="thumbnail" id="thumbnail">' +
						  		'<img src="' + people[i].image + '"' +
						  		'<div class="caption">' +
						  			'<h3 class="title">' + people[i].name + '</h3>' +
						  				'<p><strong>' +
						  					'<span class="surname">' + "Surname: " + people[i].surname + '</span><br>' +
						  					'<span class="age">' + "Age: " + people[i].age + '</span><br>' +
						  					'<span class="gender">' + "Gender: " + people[i].gender + '</span><br>' +
						  					'<span class="inRelationship">' + "Relationship: " + people[i].inRelation + '</span><br>' +
						  				'</strong></p>' +
						  				'<input class="btn btn-danger btn-sm" type="submit" value="Like" onclick="likeCounter()">' +
						  				'<span class="glyphicon glyphicon-heart" aria-hidden="true"></span>'
						  			'</div>' +
						  		'</div>' +
						  	'</div>';
};

*/