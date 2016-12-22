angular.module('app', []);

angular
	.module('app')
	.controller('MainController', [MainController]);

function MainController () {
	var self = this;

	//for orderBy
	self.sortType = 'title';
	self.sortType = 'rating';
	self.sortType = 'storyline';

	self.sortReverse = false; 
	self.searchItem = '';

	self.currentPage = 0;
	self.itemsPerPage = 10;
	
	self.collection = [
		{
			title: 'The Shawshank Redemption ',
			rating: '9,3',
			genre: 'Crime | drama',
			releaseDate: new Date(),
			storyline: 'Chronicles the experiences of a formerly successful banker as a prisoner in the\
			gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit.\
			The film portrays the man/s unique way of dealing with his new, torturous life; along\
			the way he befriends a number of fellow prisoners, most notably a wise long-term inmate\
			named Red.'
		},
		{
			title: 'The Godfather',
			rating: '9,2',
			genre: 'Crime | drama',
			releaseDate: new Date(),
			storyline: 'When the aging head of a famous crime family decides to transfer his position\
			to one of his subalterns, a series of unfortunate events start happening to the family,\
			and a war begins between all the well-known families leading to insolence, deportation,\
			murder and revenge, and ends with the favorable successor being finally chosen.'
		},
		{
			title: 'The Godfather: Part II',
			rating: '9,0',
			genre: 'Crime | Drama',
			releaseDate: new Date(),
			storyline: 'The continuing saga of the Corleone crime family tells the story of a young \
			Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s\
			as he attempts to expand the family business into Las Vegas, Hollywood and Cuba.'
		},
		{
			title: 'The Dark Knight',
			rating: '9,0',
			genre: 'Action | Crime | Drama | Thriller', 
			releaseDate: new Date(),
			storyline: 'Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon,\
			and new district attorney Harvey Dent successfully begin to round up the criminals that plague\
			Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears\
			in Gotham, creating a new wave of chaos. Batman/s struggle against the Joker becomes deeply\
			personal, forcing him to "confront everything he believes" and improve his technology to stop him.\
			A love triangle develops between Bruce Wayne, Dent and Rachel Dawes'
		},
		{
			title: '12 Angry Men',
			rating: '8,9',
			genre: 'Crime | drama',
			releaseDate: new Date(),
			storyline: 'The defense and the prosecution have rested and the jury is filing into the jury\
			room to decide if a young man is guilty or innocent of murdering his father. What begins as\
			an open-and-shut case of murder soon becomes a detective story that presents a succession\
			of clues creating doubt, and a mini-drama of each of the jurors/ prejudices and preconceptions\
			about the trial, the accused, and each other. Based on the play, all of the action takes place\
			on the stage of the jury room.'
		},
		{
			title: 'Schindler`s List',
			rating: '8,9',
			genre: 'Biography | Drama | History',
			releaseDate: new Date(),
			storyline: 'Oskar Schindler is a vainglorious and greedy German businessman who becomes\
			an unlikely humanitarian amid the barbaric German Nazi reign when he feels compelled\
			to turn his factory into a refuge for Jews. Based on the true story of Oskar Schindler\
			who managed to save about 1100 Jews from being gassed at the Auschwitz concentration camp,\
			it is a testament to the good in all of us.'
		},
		{
			title: 'Pulp Fiction',
			rating: '8,9',
			genre: 'Crime | Drama',
			releaseDate: new Date(),
			storyline: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit\
			men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace\
			(Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days\
			later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging\
			boxer who is paid by Wallace to lose his next fight. The lives of these seemingly unrelated\
			people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.'
		},
		{
			title: 'The Lord of the Rings: The Return of the King',
			rating: '8,9',
			genre: ' Adventure | Drama | Fantasy',
			releaseDate: new Date(),
			storyline: 'The final confrontation between the forces of good and evil fighting for control\
			of the future of Middle-earth. Hobbits Frodo and Sam reach Mordor in their quest to destroy\
			the "one ring", while Aragorn leads the forces of good against Sauron`s evil army at the\
			stone city of Minas Tirith.'
		},
		{
			title: 'Il buono, il brutto, il cattivo',
			rating: '8,9',
			genre: ' Adventure | Drama | Fantasy',
			releaseDate: new Date(),
			storyline: 'Blondie (The Good) is a professional gunslinger who is out trying to earn a few dollars.\
			Angel Eyes (The Bad) is a hit man who always commits to a task and sees it through, as long\
			as he is paid to do so. And Tuco (The Ugly) is a wanted outlaw trying to take care of his own hide.\
			Tuco and Blondie share a partnership together making money off Tuco`s bounty, but when Blondie\
			unties the partnership, Tuco tries to hunt down Blondie... '
		},	
		{
			title: 'Fight Club',
			rating: '8,8',
			genre: ' Drama',
			releaseDate: new Date(),
			storyline: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male\
			aggression into a shocking new form of therapy. Their concept catches on, with underground\
			"fight clubs" forming in every town, until an eccentric gets in the way and ignites\
			an out-of-control spiral toward oblivion.'
		},
		{
			title: 'The Lord of the Rings: The Fellowship of the Ring',
			rating: '8,8',
			genre: ' Adventure | Drama | Fantasy',
			releaseDate: new Date(),
			storyline: 'An ancient Ring thought lost for centuries has been found, and through a strange\
			twist in fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring\
			is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks\
			of Doom in order to destroy it! However he does not go alone. He is joined by Gandalf,\
			Legolas the elf, Gimli the Dwarf, Aragorn, Boromir and his three Hobbit friends Merry,\
			Pippin and Samwise. Through mountains, snow, darkness, forests, rivers and plains,\
			facing evil and danger at every corner the Fellowship of the Ring must go.\
			Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign!'
		},
		{
			title: 'Star Wars: Episode V - The Empire Strikes Back',
			rating: '8,7',
			genre: ' Action | Adventure | Fantasy | Sci-Fi',
			releaseDate: new Date(),
			storyline: 'After the Rebel base on the icy planet Hoth is taken over by the Empire, Han,\
			Leia, Chewbacca, and C-3PO flee across the galaxy from the Empire. Luke travels to the\
			forgotten planet of Dagobah to receive training from the Jedi master Yoda, while Vader\
			endlessly pursues him.'
		},
		{
			title: 'Forrest Gump',
			rating: '8,7',
			genre: 'Comedy | Drama',
			releaseDate: new Date(),
			storyline: 'Forrest Gump is a simple man with a low I.Q. but good intentions. He is running\
			through childhood with his best and only friend Jenny. His `mama` teaches him the ways of\
			life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam,\
			finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing\
			fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper\
			stickers and songs, donates to people and meets the president several times. However,\
			this is all irrelevant to Forrest who can only think of his childhood sweetheart\
			Jenny Curran, who has messed up her life. Although in the end all he wants to prove\
			is that anyone can love anyone.'
		},
		{
			title: 'Inception ',
			rating: '8,7',
			genre: ' Action | Adventure | Sci-Fi | Thriller',
			releaseDate: new Date(),
			storyline: 'Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction,\
			stealing valuable secrets from deep within the subconscious during the dream state, when\
			the mind is at its most vulnerable. Cobb`s rare ability has made him a coveted player in this\
			treacherous new world of corporate espionage, but it has also made him an international\
			fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at\
			redemption. One last job could give him his life back but only if he can accomplish the\
			impossible - inception. Instead of the perfect heist, Cobb and his team of specialists\
			have to pull off the reverse: their task is not to steal an idea but to plant one.\
			If they succeed, it could be the perfect crime. But no amount of careful planning or\
			expertise can prepare the team for the dangerous enemy that seems to predict their\
			every move. An enemy that only Cobb could have seen coming. '
		},
		{
			title: 'The Lord of the Rings: The Two Towers ',
			rating: '8,7',
			genre: 'Adventure | Drama | Fantasy',
			releaseDate: new Date(),
			storyline: 'While Frodo and Sam, now accompanied by a new guide, continue their hopeless journey\
			towards the land of shadow to destroy the One Ring, each member of the broken fellowship plays\
			their part in the battle against the evil wizard Saruman and his armies of Isengard.'
		},
		{
			title: 'One Flew Over the Cuckoo`s Nest',
			rating: '8,7',
			genre: ' Drama',
			releaseDate: new Date(),
			storyline: 'McMurphy has a criminal past and has once again gotten himself into trouble and\
			is sentenced by the court. To escape labor duties in prison, McMurphy pleads insanity and is\
			sent to a ward for the mentally unstable. Once here, McMurphy both endures and stands witness\
			to the abuse and degradation of the oppressive Nurse Ratched, who gains superiority and power\
			through the flaws of the other inmates. McMurphy and the other inmates band together to make\
			a rebellious stance against the atrocious Nurse.'
		},
		{
			title: 'Goodfellas ',
			rating: '8,7',
			genre: ' Biography | Crime | Drama',
			releaseDate: new Date(),
			storyline: 'Henry Hill might be a small time gangster, who may have taken part in a robbery\
			with Jimmy Conway and Tommy De Vito, two other gangsters who might have set their sights\
			a bit higher. His two partners could kill off everyone else involved in the robbery,\
			and slowly start to think about climbing up through the hierarchy of the Mob. Henry,\
			however, might be badly affected by his partners` success, but will he consider stooping\
			low enough to bring about the downfall of Jimmy and Tommy?'
		},		
		{
			title: 'The Matrix ',
			rating: '8,7',
			genre: ' Action | Sci-Fi',
			releaseDate: new Date(),
			storyline: 'Thomas A. Anderson is a man living two lives. By day he is an average computer\
			programmer and by night a hacker known as Neo. Neo has always questioned his reality,\
			but the truth is far beyond his imagination. Neo finds himself targeted by the police when\
			he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government.\
			Morpheus awakens Neo to the real world, a ravaged wasteland where most of humanity have been\
			captured by a race of machines that live off of the humans` body heat and electrochemical energy\
			and who imprison their minds within an artificial reality known as the Matrix. As a rebel\
			against the machines, Neo must return to the Matrix and confront the agents: super-powerful\
			computer programs devoted to snuffing out Neo and the entire human rebellion.'
		},
		{
			title: 'Shichinin no samurai',
			rating: '8,7',
			genre: 'Action | Adventure | Drama',
			releaseDate: new Date(),
			storyline: 'A veteran samurai, who has fallen on hard times, answers a village`s request for\
			protection from bandits. He gathers 6 other samurai to help him, and they teach the townspeople\
			how to defend themselves, and they supply the samurai with three small meals a day. The film\
			culminates in a giant battle when 40 bandits attack the village.'
		},
		{
			title: 'Star Wars',
			rating: '8,7',
			genre: 'Action | Adventure | Fantasy | Sci-Fi',
			releaseDate: new Date(),
			storyline: 'A young boy from Tatooine sets out on an adventure with an old Jedi named Obi-Wan\
			Kenobi as his mentor to save Princess Leia from the ruthless Darth Vader and Destroy the Death\
			Star built by the Empire which has the power to destroy the entire galaxy.'
		},
		{
			title: 'Cidade de Deus',
			rating: '8,7',
			genre: 'Crime | Drama',
			releaseDate: new Date(),
			storyline: 'Brazil, 1960s, City of God. The Tender Trio robs motels and gas trucks.\
			Younger kids watch and learn well...too well. 1970s: Li`l Zé has prospered very well and owns\
			the city. He causes violence and fear as he wipes out rival gangs without mercy. His best friend\
			Bené is the only one to keep him on the good side of sanity. Rocket has watched these two\
			gain power for years, and he wants no part of it. Yet he keeps getting swept up in the madness.\
			All he wants to do is take pictures. 1980s: Things are out of control between the last two\
			remaining gangs...will it ever end? Welcome to the City of God.'
		},
		{
			title: 'Se7en ',
			rating: '8,6',
			genre: 'Crime | Drama | Mystery | Thriller',
			releaseDate: new Date(),
			storyline: 'A film about two homicide detectives`(Morgan Freeman and (Brad Pitt desperate hunt\
			for a serial killer who justifies his crimes as absolution for the world`s ignorance of the\
			Seven Deadly Sins. The movie takes us from the tortured remains of one victim to the next as\
			the sociopathic "John Doe" (Kevin Spacey) sermonizes to Detectives Somerset and Mills -- one sin\
			at a time. The sin of Gluttony comes first and the murderer`s terrible capacity is graphically\
			demonstrated in the dark and subdued tones characteristic of film noir. The seasoned and cultured\
			but jaded Somerset researches the Seven Deadly Sins in an effort to understand the killer`s modus\
			operandi while the bright but green and impulsive Detective Mills (Pitt) scoffs at his efforts\
			to get inside the mind of a killer...'
		},
		{
			title: 'The Silence of the Lambs ',
			rating: '8,6',
			genre: ' Crime | Drama | Thriller',
			releaseDate: new Date(),
			storyline: 'BI trainee Clarice Starling works hard to advance her career, including trying to\
			hide or put behind her West Virginia roots, of which if some knew would automatically classify\
			her as being backward or white trash. After graduation, she aspires to work in the agency`s \
			Behavioral Science Unit under the leadership of Jack Crawford. While she is still a trainee,\
			Crawford does ask her to question Dr. Hannibal Lecter, a psychiatrist imprisoned thus far\
			for eight years in maximum security isolation for being a serial killer, he who cannibalized\
			his victims. Clarice is able to figure out the assignment is to pick Lecter`s brains to help\
			them solve another serial murder case, that of someone coined by the media as Buffalo Bill\
			who has so far killed five victims, all located in the eastern US, all young women who are\
			slightly overweight especially around the hips, all who were drowned in natural bodies of water,\
			and all who were stripped of large swaths of skin. She also figures that Crawford...'
		},
		{
			title: 'It`s a Wonderful Life',
			rating: '8,6',
			genre: '  Drama | Family | Fantasy',
			releaseDate: new Date(),
			storyline: 'George Bailey has spent his entire life giving of himself to the people of Bedford Falls.\
			He has always longed to travel but never had the opportunity in order to prevent rich skinflint\
			Mr. Potter from taking over the entire town. All that prevents him from doing so is George`s\
			modest building and loan company, which was founded by his generous father. But on Christmas Eve,\
			George`s Uncle Billy loses the business`s $8,000 while intending to deposit it in the bank.\
			Potter finds the misplaced money and hides it from Billy. When the bank examiner discovers the\
			shortage later that night, George realizes that he will be held responsible and sent to jail and the\
			company will collapse, finally allowing Potter to take over the town. Thinking of his wife, their\
			young children, and others he loves will be better off with him dead, he contemplates suicide.\
			But the prayers of his loved ones result in a gentle angel named Clarence coming to earth to help\
			George, with the promise of earning his ...'
		},
		{
			title: 'The Usual Suspects',
			rating: '8,6',
			genre: 'Crime | Drama | Mystery | Thriller',
			releaseDate: new Date(),
			storyline: 'Following a truck hijack in New York, five conmen are arrested and brought together\
			for questioning. As none of them are guilty, they plan a revenge operation against the police.\
			The operation goes well, but then the influence of a legendary mastermind criminal called Keyser\
			Söze is felt. It becomes clear that each one of them has wronged Söze at some point and must pay\
			back now. The payback job leaves 27 men dead in a boat explosion, but the real question arises now:\
			Who actually is Keyser Söze? Written by Soumitra'
		},
		{
			title: 'La vita è bella',
			rating: '8,6',
			genre: 'Comedy | Drama | War',
			releaseDate: new Date(),
			storyline: 'In 1930s Italy, a carefree Jewish book keeper named Guido starts a fairy tale life\
			by courting and marrying a lovely woman from a nearby city. Guido and his wife have a son and\
			live happily together until the occupation of Italy by German forces. In an attempt to hold\
			his family together and help his son survive the horrors of a Jewish Concentration Camp,\
			Guido imagines that the Holocaust is a game and that the grand prize for winning is a tank.'
		},
		{
			title: 'Léon ',
			rating: '8,5',
			genre: ' Crime | Drama | Thriller',
			releaseDate: new Date(),
			storyline: 'After her father, mother, older sister and little brother are killed by her father`s\
			employers, the 12-year-old daughter of an abject drug dealer is forced to take refuge in the\
			apartment of a professional hitman who at her request teaches her the methods of his job so she\
			can take her revenge on the corrupt DEA agent who ruined her life by killing her beloved brother. '
		},
		{
			title: 'Sen to Chihiro no kamikakushi ',
			rating: '8,5',
			genre: ' Animation | Adventure | Family | Fantasy',
			releaseDate: new Date(),
			storyline: 'Chihiro and her parents are moving to a small Japanese town in the countryside,\
			much to Chihiro`s dismay. On the way to their new home, Chihiro`s father makes a wrong turn\
			and drives down a lonely one-lane road which dead-ends in front of a tunnel. Her parents decide\
			to stop the car and explore the area. They go through the tunnel and find an abandoned amusement\
			park on the other side, with its own little town. When her parents see a restaurant with\
			great-smelling food but no staff, they decide to eat and pay later. However, Chihiro refuses\
			to eat and decides to explore the theme park a bit more. She meets a boy named Haku who tells\
			her that Chihiro and her parents are in danger, and they must leave immediately. She runs to\
			the restaurant and finds that her parents have turned into pigs. In addition, the theme park\
			turns out to be a town inhabited by demons, spirits, and evil gods. At the center of the town\
			is a bathhouse where these creatures go to relax. The owner of the bathhouse... '
		}
	];

	self.mainPage = function () {
		return self.currentPage == 0;
	};

	self.lastPage = function () {
		var lastPageNr = Math.ceil(self.collection.length / self.itemsPerPage - 1);
		return self.currentPage == lastPageNr;
	};

	self.nrOfPages = function () {
		return Math.ceil(self.collection.length / self.itemsPerPage);
	};

	self.startingItem = function () {
		return self.currentPage * self.itemsPerPage;
	};

	self.pageBack = function () {
		self.currentPage = self.currentPage - 1;
	};

	self.pageForward = function () {
		self.currentPage = self.currentPage + 1;
	};
}

	// search by rating > 8,9
angular
	.module('app')
	.filter('RatingFilter', ['$sce', RatingFilter]);

function RatingFilter ($sce) {
	return function (value) {
		if(value > '8,9') {
			return $sce.trustAsHtml('<strong><i>' + value + '</strong></i>');
		} else {
			return $sce.trustAsHtml(value);
		}
	};
}

angular
	.module('app')
	.filter('StartFrom', [StartFrom]);

function StartFrom () {
	return function (input, start) {
		return input.slice(start);
	};
}

angular
	.module('app')
	.filter('FindTxt', ['$sce', FindTxt]);

function FindTxt($sce) {
	return function(text, phrase) {
		if (phrase) {
			text = text.replace(new RegExp('('+phrase+')', 'gi'),
		'<span class="highlighted">$1</span>');
		}
		return $sce.trustAsHtml(text);
	};
}


