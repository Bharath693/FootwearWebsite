import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar/navbar'
import Carousal from './Carousel/Carousal'
import ProductsDisplay from './Components/productsDisplay'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Carousal />
      <Route exact path="/" component={ProductsDisplay} />
      </BrowserRouter>
    </div>
  );
}

export default App;
