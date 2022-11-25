import "./App.css";
import { Route, Routes} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';


export function App() {
   return  <div>

   <Routes>
   <Route path="/" element={<MainLayout />} >
   <Route index element= {<Home />} />
   <Route path="/about" element={<About />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="*" element={<p>Invalid URL</p>} />
   </Route>
   </Routes>  

   </div> 
}
export default App;