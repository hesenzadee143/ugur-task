const data = [
    {
      name: "To Kill a Mockingbird",
      image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81gepf1eMqL._AC_UY218_.jpg",
      author: "George Orwell",
      price: 20,
      topic: ["racism", "justice"," humanity"]
    },
    {
      name: "One Hundred Years of Solitude",
      image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/91hJ+hgZm4L._AC_UY218_.jpg",
      author: "G. G. Marquez",
      price: 25,
      topic:["family", "history", "magical realism"]
    },
    {
      name: "The Great Gatsby",
      image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71ithu0AGdL._AC_UY218_.jpg",
      author: "F. Scott Fitzgerald",
      price: 30,
      topic:["wealth","love","American Dream"]
    },
    {
      name: "Pride and Prejudice",
      image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71kXhGQllUL._AC_UY218_.jpg",
      author: "Jane Austen",
      price: 25,
      topic:["marriage","social norms","class"]
    },
    {
      name: "The Diary of a Young Girl",
      image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61pekVSBRhL._AC_UY218_.jpg",
      author: "Anne Frank",
      price: 30,
      topic:["Holocaust", "coming of age","hope"]
    },
    {
      name: "Lord of the Flies",
      image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81lm+EzpWQL._AC_UY218_.jpg",
      author: "William Golding",
      price: 25,
      topic:["human nature","power", "morality"]
    },
    {
      name: "The Catcher in the Rye",
      image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/618XWn5fD5L._AC_UY218_.jpg",
      author: "J.D. Salinger",
      price: 30,
      topic:["adolescence","identity","loss"]
    },
    {
      name: "Animal Farm",
      image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/713R99B+5DL._AC_UY218_.jpg",
      author: "George Orwell",
      price: 30,
      topic:["politics", "corruption", "propaganda"]
    },
    {
      name: "Wuthering Heights",
      image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61xZNsoqIIL._AC_UY218_.jpg",
      author: "Emily Bronte",
      price: 25,
      topic:["love", "revenge", "social class"]
    },
    {
      name: "Moby-Dick",
      image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81RQEWVDo0L._AC_UY218_.jpg",
      author: "Herman Melville",
      price: 30,
      topic:["obsession", "revenge", "existentialism"]
    },
    {
      name: "The Metamorphosis",
      image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71Ma5LSyUiL._AC_UY218_.jpg",
      author: "Franz Kafka",
      price: 25,
      topic:["isolation", "identity", "transformation"]
    },
    {
      name: "The Hitchhiker's Guide to the Galaxy ",
      image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71Mr-7qKc4L._AC_UY218_.jpg",
      author: "Douglas Adams",
      price: 30,
      topic:["science fiction", "comedy", "satire"]
    },
    {
      name: "Brave New World",
      image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71HOtbT2w3L._AC_UY218_.jpg",
      author: "Aldous Huxley",
      price: 30,
      topic:["dystopia"," freedom","technology"]
    },
    {
      name: "The Grapes of Wrath",
      image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/7183w1S4UeL._AC_UY218_.jpg",
      author: "John Steinbeck",
      price: 30,
      topic:["poverty", "migration", "social justice"]
    },
    {
      name: "Heart of Darkness",
      image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/812gqA6zZKL._AC_UY218_.jpg",
      author: "Joseph Conrad",
      price: 30,
      topic:["imperialism", "race", "human nature"]
    },
    {
      name: "The Picture of Dorian Gray",
      image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/812ANlm8iZL._AC_UY218_.jpg",
      author: "Oscar Wilde",
      price: 30,
      topic:["beauty", "morality", "corruption"]
    },
    {
      name: "The War of the Worlds",
      image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81oPpqxn6+S._AC_UY218_.jpg",
      author: "H.G. Wells",
      price: 30,
      topic:["alien invasion","imperialism", "survival"]
    },
    {
      name: "The Adventures of Huckleberry Finn",
      image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71cUyYihbKL._AC_UY218_.jpg",
      author: "Mark Twain",
      price: 30,
      topic:["race","freedom"," friendship"]
    },
    {
      name: "The Brothers Karamazov",
      image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61U4Zb-vJlL._AC_UY218_.jpg",
      author: "Fyodor Dostoevsky",
      price: 30,
      topic:["family","spirituality","morality"]
    }
  ];
let Books=[]
let Topics=[]

// bu for topic arrayini doldurur
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].topic.length; j++) {
    
    let find=data[i].topic[j]
    
    if (!Topics.includes(find)) {
      Topics.push(find)
    }
  }
}

// bu for books arrayini doldurur
for (let x = 0; x < data.length; x++) {

  const book = data[x];

  book.id=randomNumber()

  Books.push(book)
}

let Box=[]
function randomNumber() {
  return Math.random()*Math.random()*Math.random()*Math.random()
}

// let localdanGelenBoxBooks=localStorage.getItem("BoxBooks")

// if (localdanGelenBoxBooks==null) {
//   localStorage.setItem("BoxBooks",JSON.stringify([]))
// }else{
//   Box=JSON.parse(localdanGelenBoxBooks)
// }

export {data,Box,Books,Topics}