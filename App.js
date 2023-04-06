// mobile menu
const navItems = document.querySelector('.nav-menu');
const openMenu = document.querySelector('.menu-bar');
const closeMenu = document.querySelector('.closing-btn');
const form = document.querySelector('form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');
const errorMsg = document.getElementById('error-msg');
// show menu
function show() {
  navItems.style.display = 'flex';
  navItems.style.right = '0';
}

function close() {
  navItems.style.right = '100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

document.querySelectorAll('.item');
navItems.addEventListener('click', () => {
  navItems.style.right = '100%';
});

const product = [{
  name: 'Tonic',
  paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
  Image: './img/project-img/d-project-1.png',
  languages: ['html', 'css', 'javaScript'],
},
{
  name: 'Multi-Post Stories',
  paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
  Image: './img/project-img/d-project-2.png',
  languages: ['html', 'css', 'javaScript'],
},
{
  name: 'Tonic',
  paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
  Image: './img/project-img/d-project-3.png',
  languages: ['html', 'css', 'javaScript'],
},
{
  name: 'Multi-Post Stories',
  paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
  Image: './img/project-img/d-project-4.png',
  languages: ['html', 'css', 'javaScript'],
},
];

const box = document.querySelector('.cards');

product.forEach((item) => {
  let lang = '';
  item.languages.forEach((languages) => {
    lang = `${lang}<li class="lang-list">${languages}</li>`;
  });

  const div = document.createElement('div');
  div.classList.add('cardmode');
  div.innerHTML += `<div class="container" id="" >
    <img src=${item.Image} alt="">
    <div>
      <h2 class="card-heading">${item.name}</h2>
      <ul class="prof">
        <li class="item">CANOPY </li>
        <li class="item-prof">&#9679; Back End Dev  &#9679;  </li>
        <li class="item-prof">2015</li>
      </ul>
      <p class="dec-p">${item.paragraph}</p>
      <ul class="lang-tag">${lang}</ul>
      <button class="see-btn">see project</button>
    </div>  
  </div>`;

  box.appendChild(div);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const namePattern = /[A-Z]/;
  if (namePattern.test(nameField.value)) {
    errorMsg.textContent = 'Name must not contain uppercase letters.';
    return;
  }

  const emailValue = emailField.value.toLowerCase();
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!emailPattern.test(emailValue.value)) {
    errorMsg.textContent = 'Please enter a valid email address without uppercase letters.';
    return;
  }

  if (messageField.value.trim() === '') {
    errorMsg.textContent = 'Please enter a message.';
    return;
  }

  form.submit();
});
