
// var contactList = {

// 	bill : {
// 		firstName: 'Bill',
// 		lastName: 'Clinton',
// 		phone: {
// 			cell: '12345',
// 			home: '45332',
// 			fax: '123222'
// 		} 
// 	},

// 	tom : {
// 		firstName: 'Tom',
// 		lastName: 'Hanks',
// 		phone: {
// 			cell: '12345',
// 			home: '45332',
// 			fax: '123222'
// 		} 
// 	},

// 	john : {
// 		firstName: 'John',
// 		lastName: 'Doe',
// 		phone: {
// 			cell: '12345',
// 			home: '45332',
// 			fax: '123222'
// 		} 
// 	},

// 	george : {
// 		firstName: 'George',
// 		lastName: 'Clooney',
// 		phone: {
// 			cell: '12345',
// 			home: '45332',
// 			fax: '123222'
// 		} 
// 	}


// }

// for (var contact in contactList) {
// 	var contactInfo = contactList[contact];

// 	//step 1 - make the contrainer (div)
// 	var container = document.createElement('div');

// 	var title = document.createElement('h3');
// 	title.innerHTML = 'My contacts cell  is ' + contactInfo.phone.cell;
// 	document.body.appendChild(title);

// 	var paragraph = document.createElement('p');
// 	paragraph.innerHTML = 'My Contact is named ' + contactInfo.firstName;
// 	document.body.appendChild(paragraph);
// }


var artistList = {

	beatsofreen : {
		name :'Beats O Freen',
		country : 'Netherlands',
		website : 'https://soundcloud.com/beatsofreen',
		genre : 'Hip Hop, Beats',
		releases : {
			first: 'Colored Dreams',
			second: 'Dimensions'
		}
	}, 

	cosanostra : {
		name : 'Cosa Nostra',
		country : 'Singapore',
		website : 'http://soundcloud.com/cosanostra',
		genre : 'House, Techno, Edits',
		releases : {
			first: 'Let It Go',
			second: 'Return To Sender'
		}
	},

	goyama : {
		name : 'Go Yama',
		country : 'United States',
		website : 'https://soundcloud.com/goyama',
		genre : 'Beats, Future Soul, Modern Funk',
		releases : {
			first: 'Your Fate Is',
			second: 'NIL'
		}

	}, 

	iff : {
		name : "I'm From Finland",
		country : 'France',
		website : 'https://soundcloud.com/im-from-finland',
		genre : 'Future Bass, Beats',
		releases : {
			first: 'The Bacon Escape',
			second: 'NIL'
		}
	},

	kerem : {
		name : "Kerem Akdag",
		country : 'Turkey',
		website : 'https://soundcloud.com/kerceya',
		genre : 'Future Bass, Hip Hop, House',
		releases : {
			first: 'NIL',
			second: 'NIL'
		}

	}, 

	lano : {
		name : "LA-NO",
		country : 'Netherlands',
		website : 'https://soundcloud.com/iamlano',
		genre : 'Future Bass, Beats, Hip Hop, House',
		releases : {
			first: 'NIL',
			second: 'NIL'
		}

	}, 

	maxxmortimer : {
		name : 'Maxx Mortimer',
		country : 'New Zealand',
		website : 'https://soundcloud.com/maxx-mortimer',
		genre : 'House, Techno, Uk Bass',
		releases : {
			first: 'Best Things',
			second: 'NIL'
		}

	},

	neguimbeats : {
		name : 'NeguimBeats',
		country : 'Brazil',
		website : 'https://soundcloud.com/neguim_beats',
		genre : 'Deep trap, Bass, Hip Hop',
		releases : {
			first: 'Sweet Life',
			second: '6 Days Of Love'
		}

	},

	troy : {
		name : 'Troy Samuela',
		country : 'New Zealand',
		website : 'http://soundcloud.com/troysamuela',
		genre : 'Future Bass, Deep Trap, Hip Hop, Beats',
		releases : {
			first: 'After Ours',
			second: 'NIL'
		}

	},

	wayvee : {
		name : 'Wayvee',
		country : 'New Zealand',
		website : 'http://soundcloud.com/wayvee',
		genre : 'Trap, Deep Bass',
		releases : {
			first: 'Diversions',
			second: 'NIL'
		}

	}
}

for (var artist in artistList) {
	var artistInfo = artistList[artist];

	//step 1 - make the contrainer (div)
	var container = document.createElement('div');

	var artistName = document.createElement('h3');
	artistName.setAttribute("class", "name");
	artistName.innerHTML = 'Artist Name : ' + artistInfo.name;
	document.body.appendChild(artistName);

	var artistCountry = document.createElement('p');
	artistCountry.setAttribute("class", "country");
	artistCountry.innerHTML = 'Country : ' + artistInfo.country;
	document.body.appendChild(artistCountry);

	var artistWebsite = document.createElement('p');
	artistWebsite.setAttribute("class", "website");
	artistWebsite.innerHTML = 'Website : '+ artistInfo.website;
	document.body.appendChild(artistWebsite);

	var artistGenre = document.createElement('p');
	artistGenre.setAttribute("class", "genre");
	artistGenre.innerHTML = 'Genre : ' + artistInfo.genre;
	document.body.appendChild(artistGenre);

	var artistRelease = document.createElement('p');
	artistRelease.setAttribute("class", "release");
	artistRelease.innerHTML = 'First Release : ' + artistInfo.releases.first;
	document.body.appendChild(artistRelease);

	var artistRelease2 = document.createElement('p');
	artistRelease2.setAttribute("class", "release2");
	artistRelease2.innerHTML = 'Second Release : ' + artistInfo.releases.second;
	document.body.appendChild(artistRelease2);


}

