// import Add from "./components/Add";
// import Footer from "./components/Footer";
// import Greet from "./components/Greet";
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
// import Greeting from "./components/Greeting";
// import JSXRules from "./components/JSXRules";
// import ProductInfo from "./components/ProductInfo";
import Person from "./components/Person";
import Product from "./components/Product";
// import ProductList from "./components/ProductList";
// import UserList from "./components/UserList";
// import WelcomeMessage from "./components/WelcomeMessage";

const App = () => {
  return (
    <section>
      <Person name="Fauki" age={28} />
      <Product name="Laptop" price={1999} />
    </section>
  );
};

export default App;
