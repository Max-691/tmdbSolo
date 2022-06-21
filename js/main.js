import '../css/style.css'

const section = document.getElementById('catalog');


const data = [

  {
    banner: "img/film1.jpg",
    title: "Film1",
    date: "02 Jan 2022",
    note: 70%
  },
  {
    banner: "img/film1.jpg",
    title: "Film1",
    date: "02 Jan 2022",
    note: 70%
  },
  {
    banner: "img/film1.jpg",
    title: "Film1",
    date: "02 Jan 2022",
    note: 70%
  },
  {
    banner: "img/film1.jpg",
    title: "Film1",
    date: "02 Jan 2022",
    note: 70%
  },
  {
    banner: "img/film1.jpg",
    title: "Film1",
    date: "02 Jan 2022",
    note: 70%
  },
  {
    banner: "img/film1.jpg",
    title: "Film1",
    date: "02 Jan 2022",
    note: 70%
  },
  {
    banner: "img/film1.jpg",
    title: "Film1",
    date: "02 Jan 2022",
    note: 70%
  },
  {
    banner: "img/film1.jpg",
    title: "Film1",
    date: "02 Jan 2022",
    note: 70%
  }
]

for (let i = 0; i < data.length; i++) {
  section.innerHTML += ` <article class="movie">
  <a href="#"><img src="${data[i].img}" alt="film"></a>
  <p class="note">${data[i].note}</p>
  <h2>${data[i].title}</h2>
  <p>${data[i].date}</p>
</article>` 
  
}
