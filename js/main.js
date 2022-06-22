import '../css/style.css'

const section = document.getElementById('catalog');

const filtersUl = document.getElementById('filtersUl');
const filtersLi = document.querySelectorAll('.filter')
console.log(filtersLi)

//Notes color
const addClass = (note) => {
  if (note <= 25) {
    return 'red';
  }
 else if(note <= 50){
    return 'orange';
  }
  else if(note <= 75){
    return 'green';
  }
  else{
    return 'blue';
  }
}

const genre = ["drama", "action", "racing", "fiction", "comedy", "horror", "love", "biography", "adventure", "documentary"];

const data = [

  {
    banner: "../img/film1.jpg",
    title: "Film1",
    date: "02 Jan 2022",
    note: 70,
    genre: [genre[0], genre[1]]
  },
  {
    banner: "img/film2.jpg",
    title: "Film2",
    date: "02 Jan 2022",
    note: 10,
    genre: [genre[2], genre[3]]
  },
  {
    banner: "img/film3.jpg",
    title: "Film3",
    date: "02 Jan 2022",
    note: 45,
    genre: [genre[4], genre[6]]
  },
  {
    banner: "img/film4.jpg",
    title: "Film4",
    date: "02 Jan 2022",
    note: 30,
    genre: [genre[3], genre[5]]
  },
  {
    banner: "img/film5.jpg",
    title: "Film5",
    date: "02 Jan 2022",
    note: 85,
    genre: [genre[7]]
  },
  {
    banner: "img/film6.jpg",
    title: "Film6",
    date: "02 Jan 2022",
    note: 90,
    genre: [genre[8], genre[9]]
  },
  {
    banner: "img/film7.jpg",
    title: "Film7",
    date: "02 Jan 2022",
    note: 55,
    genre: [genre[1], genre[2], genre[5]]
  },
  {
    banner: "img/film8.jpg",
    title: "Film8",
    date: "02 Jan 2022",
    note: 60,
    genre: [genre[7], genre[9], genre[10]]
  }
]


for (let i = 0; i < data.length; i++) {
  section.innerHTML += ` 

  <article class="movie">
  <div class="img-container">
  <a href="#"><img src="${data[i].banner}" alt="film"></a>
  <p class="note ${addClass(data[i].note)}">${data[i].note} %</p>
  </div>
  <h2>${data[i].title}</h2>
  <p>${data[i].date}</p>
</article>` 

}

