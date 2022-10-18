import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Navbar from "./component/layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from './component/pages/PageNotFound';
import Adduser from './component/layout/users/Adduser';
import EditUser from './component/layout/users/EditUser';
import DeleteUser from './component/layout/users/DeleteUser';
import User from './component/layout/users/User';

function App() {
  return (  
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}> </Route>
          <Route exact path="/about" element={<About />}> </Route>
          <Route exact path="/contact" element={<Contact />}> </Route>
          <Route exact path="/user/add" element={<Adduser/>}> </Route>
          <Route exact path="/user/edit/:id" element={<EditUser/>}> </Route>
          <Route exact path="/user/delete/:id" element={<DeleteUser/>}> </Route>
          <Route exact path="/user/:id" element={<User/>} ></Route>
          <Route exact path="*" element={<PageNotFound />}> </Route>
        </Routes>
      </div>
    </Router>
    
    // <Route path="/" element={<Home />}></Route>
  );
}

export default App;
