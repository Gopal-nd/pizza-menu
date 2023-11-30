import "./index.css";
import { pizzaData } from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
const Header = () => {
  return (
    
      <header className="header">
        <h1 >Fast Pizza co.</h1>
      </header>
  );
};
const Menu = () => {
  const pizzas = pizzaData;
  const numData = pizzas.length;

  return (
    <div>
      <main className="menu">
        <h2>OUR Menu</h2>

        {
          numData >0? 
          (
            <>
            <p> Quality is our Priority</p>
            <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
          </>
           
        ):(<p>We are Working on our menu pls come back later</p>)
        }

       
        {/* <Pizza
    name='Pizza Spinaci'
    ingredients='Tomato, mozarella, spinach, and ricotta cheese'
    photoName="pizzas/spinaci.jpg"
    price = {10}
  /> */}
      </main>
    </div>
  );
};
const Footer = () => {
  const hour = new Date().getHours();
  const open = 12;
  const close = 22;
  const isopen = hour >= open && hour <= close;
  return (
    <>
      <footer className="footer">
        {isopen ? ( <Order open={open} close={close}/>
          
        ):(<p>We are happy to welcome you between {open}:00 and {close}:00  </p>)}
      </footer>
    </>
  );
};
const Order = ({open,close})=>{
  return (<div className="order">
  <p>we're open from {open}:00 to {close}:00. come vist and order online</p>
  <button className="btn">Order</button>
</div>)
}
const Pizza = ({pizzaObj}) => {

  // if(pizzaObj.soldOut)return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut?"sold-out":""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT": pizzaObj.price}</span>
      </div>
    </li>
  );
};

export default App;
