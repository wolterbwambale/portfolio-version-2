document.addEventListener('DOMContentLoaded', () => {
  const seeProject = document.querySelector('.see-btn');
  const book = document.querySelector('.pop');
  const section = document.createElement('div');
  section.className = 'pop';
  let content = '';

  const projects = [
    {
      heading: 'Tonic',
      descriptions: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting,
                remaining essent`,
      photo: './img/project-img/d-project-1.png',
      technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    },
    {
      heading: 'Multi-Post Stories',
      descriptions: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting,
                remaining essent`,
      photo: './img/project-img/d-project-2.png',
      technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    },
    {
      heading: 'Tonic',
      descriptions: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting,
                remaining essent`,
      photo: './img/project-img/d-project-3.png',
      technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    },
    {
      heading: 'Multi-Post Stories',
      descriptions: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting,
                remaining essent`,
      photo: './img/project-img/d-project-4.png',
      technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    },
  ];

  projects.forEach((item) => {
    content += `<div class="pop-window">
      <div class="close-btn"><i class="fa fa-times"></i></div>
        <h2 class="card-heading">${item.heading}</h2>
        <div class="profesions">
          <ul class="prof">
            <li class="item">CANOPY </li>
            <li class="item-prof">&#9679; Back End Dev  &#9679;  </li>
            <li class="item-prof">2015</li>
          </ul>
        </div>
        <img src=${item.photo} alt="first-project">
        <div class="data-pop">
          <p class="decription">${item.descriptions}</p>
          <div class="lon-p">
            <ul class="lang-tag">
            ${item.technologies.map((itemList) => `<li class="lang-list">${itemList}</li>`).join('')}
            </ul>
            <a href="#">
              <button class="see-btn">see live <img src="./img/social-media-icons/live.png" alt="live">
              </button>
            </a>
            <a href="#">
              <button class="see-btn">see source <img src="./img/social-media-icons/github.png" alt="see more">
              </button>
            </a>
          </div>
        </div> 
      </div>`;
  });

  section.innerHTML = content;

  seeProject.addEventListener('click', () => {
    book.appendChild(section);
    section.style.display = 'flex';
    //   document.body.style.overflow = 'hidden';

    book.addEventListener('click', (event) => {
      if (event.target === section || event.target.closest('.close-btn')) {
        book.removeChild(section);
      }
    });
  });
});
