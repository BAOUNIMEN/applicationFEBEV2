import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigneIn from "./Components/login/SigneIn";
import SigneUp from "./Components/login/SigneUp";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Accueil from "./Components/accueil/Accueil";
import Contact from "./Components/accueil/Contact";
import Brand from "./Components/accueil/Brand";
import Blog from "./Components/accueil/Blog";
import Addproduct from "./Components/products/Addproduct";
import Perfum from "./Components/accueil/Perfum";
function App() {
  return (
  <div className="App">
   
     <BrowserRouter>
       <Routes>
       <Route path="/" element={ <SigneUp />} />
       <Route path="/SigneIn" element={<SigneIn />} />
       <Route path="/accueil" element={<Accueil />}/>
       <Route path="/contact" element={<Contact />}/>
       <Route path="/brand" element={<Brand />}/>
       <Route path="/blog" element={<Blog />}/>
       <Route path="/perfum" element={<Perfum />}/>
       <Route path="/product/add_products" element={<Addproduct />}/>
       </Routes>
     </BrowserRouter>

     
  </div>
    
  );
}

export default App;
