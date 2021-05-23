import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar/navbar'
import Carousal from './Carousel/Carousal'
import ProductsDisplay from './Components/productsDisplay'
import Cart from './Components/Cart'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Carousal />
      <Route exact path="/" component={ProductsDisplay} />
      <Route exact path="/cart" component={Cart} />
      </BrowserRouter>
    </div>
  );
}

export default App;
