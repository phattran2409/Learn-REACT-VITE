import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Fotter />
      </div>
      <div>
        <Person name="Andy" Age={62} major="singer/actor" />
      </div>
    </>
  );
}

function Header() {
  const style = { color: "red", fontSize: "50px", textTransform: "uppercase" };
  return (
    <div className="header">
      <h1 style={style}>Pizza Company</h1>
    </div>
  );
}
function Menu() {
  return (
    <div>
      <main className="menu">
        <h2> Menu Pizza</h2>
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizzas pizzaObj={pizza}  />
          ))}
        </ul>
      </main>
    </div>
  );
}
function Fotter() {
  const Hour = new Date().getHours();
  console.log(Hour);
  const Open = 8;
  const close = 22;
  const isOpen = Hour >= Open && Hour <= close;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen == false ? (
        <p>
          {" "}
          we're not working {close}:00 come visit when we working at {Open}:00
          AM{" "}
        </p>
      ) : <Order openHour={Open}  closeHour={close}/>
      }
    </footer>
  );
}

function Order({openHour , closeHour}) {
  return (
    <div className="order">
      <p>
        {" "}
        welcome to my shop , thanks you visit at{" "}
        {new Date().toLocaleTimeString()}
      </p>
      <p> time we Open {openHour}:00 AM And Close {closeHour}:00 PM </p>
      <button className="btn"> orders </button>
    </div>
  );
}

function Pizzas({ pizzaObj }) {
  console.log(pizzaObj.name);
  const soldout = pizzaObj.soldOut;
  return (
    <>
      {/*
        pizzaData.map((item) => (

            <div className="pizza">
                
                   <img src={item.photoName} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.ingredients}</p>
                
            </div>
            */}
     
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : null}`}>
          <img src={pizzaObj.photoName} alt={pizzaObj.name} />
          <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span> {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
          </div>
        </li>
     
    </>
  );
}

function Person(props) {
  return (
    <div>
      <ul>
        <li>Name : {props.name}</li>
        <li>Age : {props.age}</li>
        <li>Major :{props.major}</li>
      </ul>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
