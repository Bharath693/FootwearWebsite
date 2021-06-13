import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar/navbar'
import Carousal from './Carousel/Carousal'
import ProductsDisplay from './Components/productsDisplay'
import Products from './Global/Products'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Carousal />
      <Route exact path="/" component={Products} />
      </BrowserRouter>
    </div>
  );
}

export default App;
