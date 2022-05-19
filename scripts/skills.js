const EXPERTISE = document.getElementById('expertise');
const REACTIVITE = document.getElementById('reactivite');
const QUALITE = document.getElementById('qualite');

const COMPETENCE = document.getElementById('competence');
const STOCKAGE = document.getElementById('stockage');
const FABRICATION = document.getElementById('fabrication');
const LOGISTIQUE = document.getElementById('logistique');
const CULTURE = document.getElementById('culture');
const SOLUTIONS = document.getElementById('solutions');

let opacity_active = '1';
let opacity_inactive = '0.3';
// let transition = 'all 0.5s'; -> dans map.js

let Reset_expertise = true;
let Reset_reactivite = true;
let Reset_qualite = true;

function start_skills() {
	EXPERTISE.style.transition = transition;
	REACTIVITE.style.transition = transition;
	QUALITE.style.transition = transition;
	COMPETENCE.style.transition = transition;
	STOCKAGE.style.transition = transition;
	FABRICATION.style.transition = transition;
	LOGISTIQUE.style.transition = transition;
	CULTURE.style.transition = transition;
	SOLUTIONS.style.transition = transition;
	over_expertise();
}

start_skills();

function Reset_all_skills() {
	EXPERTISE.style.opacity = opacity_active;	
	REACTIVITE.style.opacity = opacity_active;
	QUALITE.style.opacity = opacity_active;
	COMPETENCE.style.opacity = opacity_active;
	STOCKAGE.style.opacity = opacity_active;
	FABRICATION.style.opacity = opacity_active;
	LOGISTIQUE.style.opacity = opacity_active;
	CULTURE.style.opacity = opacity_active;
	SOLUTIONS.style.opacity = opacity_active;
};

function over_expertise() {
	if (Reset_expertise == true) {
		Reset_all_skills();
		REACTIVITE.style.opacity = opacity_inactive;
		QUALITE.style.opacity = opacity_inactive;
		STOCKAGE.style.opacity = opacity_inactive;
		FABRICATION.style.opacity = opacity_inactive;
		LOGISTIQUE.style.opacity = opacity_inactive;
	}
};

function over_reactivite() {
	if (Reset_reactivite == true) {
		Reset_all_skills();
		EXPERTISE.style.opacity = opacity_inactive;
		QUALITE.style.opacity = opacity_inactive;
		COMPETENCE.style.opacity = opacity_inactive;
		SOLUTIONS.style.opacity = opacity_inactive;
	}
};

function over_qualite() {
	if (Reset_qualite == true) {
		Reset_all_skills();
		REACTIVITE.style.opacity = opacity_inactive;
		EXPERTISE.style.opacity = opacity_inactive;
		STOCKAGE.style.opacity = opacity_inactive;
		SOLUTIONS.style.opacity = opacity_inactive;
		LOGISTIQUE.style.opacity = opacity_inactive;
	}
};

function contentTabs() {
	const initialTab = 0;

	let i;
	const containerActive = document.getElementsByClassName('tabs-wrapper');
	const tabButton = document.querySelectorAll('.tab-item');
	const tabContent = document.querySelectorAll('.item-content');

	if (containerActive.length >= 1) {
		runTabs();
	}

	function runTabs() {
			clearActive();
			tabContent[initialTab].classList.add('active');

		function clearActive() {
			for (i = 0; i < tabContent.length; i++) {
				tabContent[i].classList.remove('active');
			}
		}

		for (let tabIndex = 0; tabIndex < tabButton.length; tabIndex++) {
			tabButton[tabIndex].addEventListener('mouseover', function() {
				clearActive();
				tabContent[tabIndex].classList.toggle('active');
			});
		}
	}
}

contentTabs();