import './App.css';
import Header from './componant/Header';
import Login from './componant/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
			<Router>
				<Navbar/>
				<Routes>
					<Route path="/" element="Home" />
					<Route path="/services" element="Services" />
					<Route path="/about" element="About" />
					<Route path="/contact" element="Contact" />
					<Route path="/login" element={<Login/>} />
				</Routes>
			</Router>
    </div>
  );
}

export default App;
