'use strict';

//Sustituir nombre y profesión
const job = document.querySelector('#job');
const name = document.querySelector('#fullName');
const cardJob = document.querySelector('.card__data-job');
const cardName = document.querySelector('.card__data-name');

const dataJason = {
  "name": "",
  "job": "",
  "photo": "",
  "palette": "",
  "typography": "",
  "email": "",
  "phone": "",
  "linkedin": "",
  "github": "",
  "skills": ["", "", ""]
};


console.log(dataJason);

function fillName(event) {
  const nameField = event.currentTarget;
  cardName.innerHTML = nameField.value;
  dataJason.name = nameField.value;
}

name.addEventListener('keyup', fillName);

function fillJob(event) {
  const jobField = event.currentTarget;
  cardJob.innerHTML = jobField.value;
  dataJason.job = jobField.value;

}

job.addEventListener('keyup', fillJob);



//Paleta de colores
const colors = document.querySelectorAll('.radio__button--color');

//Objeto HTML que cambia de color
const cardData = document.querySelector('.card__data');

//Listas de objetos HTML que cambian de color
const contactIcons = document.querySelectorAll('.contact-icons');
const skillsTags = document.querySelectorAll('.card__skills-item');
function applyPalette(e) {
  const p = parseInt(e.currentTarget.value);
  console.log('>', p);

  if (p === 1) {
    /* En el caso del cardData, lo estamos manejando como un objeto HTML.
    Igual que en el ejemplo CodePen de Carlos */

    //Objeto cardData
    cardData.classList.add('card-data__color1');
    cardData.classList.remove('card-data__color2', 'card-data__color3');

    /* Pero en el caso de los iconos y los skills, estos tienen que ser manejados como
    listas de objetos HTML. Por eso usamos "querySelectorAll" en lugar de "querySelector" y
    hacemos un "for" para aplicar los cambios a todos sus elementos */

    //Lista de Iconos
    for (const icon of contactIcons) {
      icon.classList.add('contact-icons__color1');
      icon.classList.remove('contact-icons__color2', 'contact-icons__color3');
    }

    //Lista de Tags
    for (const tag of skillsTags) {
      tag.classList.add('card__skills-item__color1');
      tag.classList.remove('card__skills-item__color2', 'card__skills-item__color3');
    }
  } else if (p === 2) {
    cardData.classList.add('card-data__color2');
    cardData.classList.remove('card-data__color1', 'card-data__color3');
    for (const icon of contactIcons) {
      icon.classList.add('contact-icons__color2');
      icon.classList.remove('contact-icons__color1', 'contact-icons__color3');
    }
    for (const tag of skillsTags) {
      tag.classList.add('card__skills-item__color2');
      tag.classList.remove('card__skills-item__color1', 'card__skills-item__color3');
    }
  } else {
    cardData.classList.add('card-data__color3');
    cardData.classList.remove('card-data__color1', 'card-data__color2');
    for (const icon of contactIcons) {
      icon.classList.add('contact-icons__color3');
      icon.classList.remove('contact-icons__color1', 'contact-icons__color2');
    }
    for (const tag of skillsTags) {
      tag.classList.add('card__skills-item__color3');
      tag.classList.remove('card__skills-item__color1', 'card__skills-item__color2');
    }
  }
}
// En este caso, no se porque... no me funciona con 'click' y si con 'change'
for (const c of colors) {
  c.addEventListener('change', applyPalette);
}

//CAMBIAR TIPOGRAFIA

const inputRadio = document.querySelectorAll('.typo__radio');
function applyTypo(e) {
  const q = parseInt(e.currentTarget.value);

  if (q === 1) {
    // typo por defecto
    cardName.classList.remove('typo-2', 'typo-3');
    cardJob.classList.remove('typo-2', 'typo-3');
  } else if (q === 2) {
    // typo 2
    cardName.classList.add('typo-2');
    cardName.classList.remove('typo-3');
    cardJob.classList.add('typo-2');
    cardJob.classList.remove('typo-3');
  } else {
    // typo 3
    cardName.classList.add('typo-3');
    cardName.classList.remove('typo-2');
    cardJob.classList.add('typo-3');
    cardJob.classList.remove('typo-2');
  }
}

for (const t of inputRadio) {
  t.addEventListener('click', applyTypo);
}



// lista de objetos que aparecen y desaparecen cuadno los selecciono en fill.card
// const skillsTags = document.querySelectorAll('.card__skills-item'); que ya esta definido arriba para los tres.

const skillsCheckList = document.querySelectorAll('.skills__checkbox');

const skillCheck = (e) => {
  const b = e.currentTarget;
  const numberValue = parseInt(b.value);
  const isChecked = b.checked;

  if (isChecked && numberValue === 1) {
    skillsTags[0].classList.remove('hidden');
  } else if (isChecked && numberValue === 2) {
    skillsTags[1].classList.remove('hidden');
  } else if (isChecked && numberValue === 3) {
    skillsTags[2].classList.remove('hidden');
  } else if (!isChecked && numberValue === 1) {
    skillsTags[0].classList.add('hidden');
  } else if (!isChecked && numberValue === 2) {
    skillsTags[1].classList.add('hidden');
  } else {
    skillsTags[2].classList.add('hidden');
  }
};

// for (const check of skillsCheckList) {
//   check.addEventListener('click', skillCheck);
// }

// DATOS: MAIL, TELEFONO, LINKEDIN, GITHUB
// ya definido arriba const contactIcons = document.querySelectorAll('.contact-icons');

const email = document.getElementById('email');
function fillEmail(e) {
  const emailField = e.currentTarget;
  dataJason.email = emailField.value;
  if (email.value.length !== 0) {
    contactIcons[1].classList.remove('hidden');
    email.value = emailField.value;
  } else {
    contactIcons[1].classList.add('hidden');
    console.log('este campo esta vacio');
  }
}
email.addEventListener('input', fillEmail);


const phone = document.getElementById('phone__number');
function fillPhone(e) {
  const phoneField = e.currentTarget;
  dataJason.phone = phoneField.value;
  if (phone.value.length !== 0) {
    contactIcons[0].classList.remove('hidden');
    phone.value = phoneField.value;
  } else {
    contactIcons[0].classList.add('hidden');
    console.log('este campo esta vacio');
  }
}
phone.addEventListener('input', fillPhone);


const linkedin = document.getElementById('linkedin__net');
function fillLinkedin(e) {
  const linkedinField = e.currentTarget;
  dataJason.linkedin = linkedinField.value;
  if (linkedin.value.length !== 0) {
    contactIcons[2].classList.remove('hidden');
    linkedin.value = linkedinField.value;
  } else {
    contactIcons[2].classList.add('hidden');
    console.log('este campo esta vacio');
  }
}
linkedin.addEventListener('input', fillLinkedin);


const github = document.getElementById('gitHub__net');
function fillGithub(e) {
  const githubField = e.currentTarget;
  dataJason.github = githubField.value;
  if (github.value.length !== 0) {
    contactIcons[3].classList.remove('hidden');
    github.value = githubField.value;
  } else {
    contactIcons[3].classList.add('hidden');
    console.log('este campo esta vacio');
  }
}
github.addEventListener('input', fillGithub);


// Añadir imagen

const fr = new FileReader();
const uploadBtn = document.querySelector('.btn__add-img');
const fileField = document.querySelector('#btn__add-img');
const profileImage = document.querySelector('.card__img');
const divPreviewImage = document.querySelector('.square__img');

function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  divPreviewImage.style.backgroundImage = `url(${fr.result})`;
}

function fakeFileClick() {
  fileField.click();
}

fileField.addEventListener('change', getImage);
uploadBtn.addEventListener('click', fakeFileClick);


//Hacer la petición de las Skills
let apiSkills;
const skillsForm = document.querySelector('.form__skills-html');

function askForSkills() {
  fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
    .then(apiSkillsResponse => apiSkillsResponse.json())
    .then(apiSkillsData => {
      //Hay que declarar la variable como array (vacío) y no con comillas simples porque si no devuelve una cadena.
      let emptySkills = [];
      //Declaras una nueva variable para definir la longitud del array
      const skillsLength = apiSkillsData.skills.length;
      //Haces un bucle para recorrer la información recibida. Si en vez de skillsLength pones  apiSkillsData.skills.length no funciona, por eso hemos declarado previamente una variable
      for (let i = 0; i < skillsLength; i++){
        //Push sirve para meter dentro del array vació los elementos del array que hemos recibido
        emptySkills.push(apiSkillsData.skills[i]);
      }
      console.log(emptySkills);
    });
}

askForSkills();
