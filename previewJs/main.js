const data = [
    {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "novels",
            "literature",
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: "El señor de los anillos",
            chinese: "魔戒",
            french: "Le Seigneur des anneaux",
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: [
            "science fiction",
            "humor",
            "speculative fiction",
            "short stories",
            "fantasy",
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: false,
        pages: 658,
        translations: {
            spanish: "",
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: "Harry Potter y la piedra filosofal",
            korean: "해리 포터와 마법사의 돌",
            bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
            portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: "왕좌의 게임",
            polish: "Gra o tron",
            portuguese: "A Guerra dos Tronos",
            spanish: "Juego de tronos",
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];

function getBook() {
    return data;
}

function getBooks(id) {
    return data.find((d) => d.id == id)
}

const dataBook = getBooks(2)
 

console.log(dataBook.author);
console.log(dataBook.title);



// cach lay cac thuoc tinh cua doi tuong thanh mot bien

const { title, author, genres } = dataBook

console.log(title, author, genres);


// const primaryGenres = genres[0]
// const secondGenres=  genres[1]


// cach hai la cach destruc 
//  thi neu khai bao bien nhu the nay thi no tu hieu rang la primary la vi tri  so 1 va
//  second la vi tri  2 
const [primaryGenres , secondGenres] = genres

console.log(primaryGenres ,secondGenres);

const  arr = [4,5,1,7,3,2]
// const sorted =   arr.sort((a , b) =>  a - b); 
// with a - b this is a acs
// with b - a this is a des 
// sorted;
// arr 

// if use slice() this is a function create a new array for a new variable 

const acsSorted = arr.slice().sort((a,b) => a - b)
acsSorted;
arr 

const descSorted = arr.slice().sort((a,b) =>  b - a )
descSorted;


const  book  = getBook();

const acsBookPage = book.slice().sort((a , b) => a.pages - b.pages)
acsBookPage

const newBook = {
    id: 6,
    title: "mua he ruc lua",
    author: "Do Nhat Nam",
} 


const bookAfterAdd =  [...book , newBook]
bookAfterAdd

const bookAfterDel = bookAfterAdd.filter((book) =>  book.id !== 1) 

bookAfterDel; 

const bookAfterUpdate =  bookAfterDel.map((book) =>  book.id === 2 ? {...book , page : 1234} : book)

bookAfterUpdate


const timeCurrent = new Date().toLocaleTimeString();

const timeNumber = timeCurrent.split(" ")
timeNumber
if (timeNumber[0]  >= '10:00:00' &&  timeNumber[1] === "PM") {
     
}else{
     
}

