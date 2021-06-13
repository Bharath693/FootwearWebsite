import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar"
import ProductsDisplay from "./Components/productsDisplay";
import Cart from './Components/Cart'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={ProductsDisplay} />
        <Route exact path="/cart" component={Cart} />
      </BrowserRouter>
    </div>
  );
}

export default App;
