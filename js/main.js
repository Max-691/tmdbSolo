import '../css/style.css'

const section = document.getElementById('catalog');


const data = [
  {
    banner: "../img/film1.jpg",
    title: "Film1",
    date: "02 Jan 2022",
    note: 70
  },
  {
    banner: "img/film2.jpg",
    title: "Film2",
    date: "02 Jan 2022",
    note: 10
  },
  {
    banner: "img/film3.jpg",
    title: "Film3",
    date: "02 Jan 2022",
    note: 45
  },
  {
    banner: "img/film4.jpg",
    title: "Film4",
    date: "02 Jan 2022",
    note: 30
  },
  {
    banner: "img/film5.jpg",
    title: "Film5",
    date: "02 Jan 2022",
    note: 85
  },
  {
    banner: "img/film6.jpg",
    title: "Film6",
    date: "02 Jan 2022",
    note: 90
  },
  {
    banner: "img/film7.jpg",
    title: "Film7",
    date: "02 Jan 2022",
    note: 55
  },
  {
    banner: "img/film8.jpg",
    title: "Film8",
    date: "02 Jan 2022",
    note: 60
  }
]

for (let i = 0; i < data.length; i++) {
  section.innerHTML += ` <article class="movie">
  <a href="#"><img src="${data[i].banner}" alt="film"></a>
  <p class="note">${data[i].note} %</p>
  <h2>${data[i].title}</h2>
  <p>${data[i].date}</p>
</article>` 
  
}

const notes = document.querySelectorAll('.note');

for (let i = 0; i < data[i].note; i++) {
  if (data[i].note <= 25) {
    notes[i].classList.add('red');
  }
 else if(data[i].note <= 50){
    notes[i].classList.add('orange');
  }
  else if(data[i].note <= 75){
    notes[i].classList.add('green');
  }
  else{
    notes[i].classList.add('blue');
  }
}

