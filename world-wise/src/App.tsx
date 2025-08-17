import {BrowserRouter, Route, Routes} from "react-router-dom";
import Product from "./pages/Product.tsx";
import Pricing from "./pages/Pricing.tsx";
import Homepage from "./pages/Homepage.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import AppLayout from "./pages/AppLayout.tsx";
import Login from "./pages/Login.tsx";

const App = () => {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="product" element={<Product/>}/>
              <Route path="pricing" element={<Pricing/>}/>
              <Route path="Login" element={<Login/>}/>
              <Route path="app" element={<AppLayout/>}/>
              <Route path="*" element={<PageNotFound/>}/>
          </Routes>
      </BrowserRouter>
    );
};

export default App;