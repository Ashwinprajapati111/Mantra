import React,{useState,useEffect} from "react";
import "./styles/header-9.css";
import "./styles/style.css";
import "./styles/reset.min.css";
import MenuIcon from '@mui/icons-material/Menu';
// import "./styles/style.scss"

const Header = () => {
    const [show,setshow]=useState({
        position: "relative",
        backgroundColor : "#afd1dd",
        display:"none"
    })
    const toggle =()=>{
        setshow({
            position: "relative",
            backgroundColor : "#afd1dd",
            display:"block"
        })
    }
    // const mystyle = {
    //     position: "relative",
    //     backgroundColor : "#afd1dd",
    //     display:"block"
    // }
  
  return (
    <div>
      <header className="site-header">
        <div className="wrapper site-header__wrapper">
          <div className="site-header__start">
            <a href="#" className="brand">
              Brand
            </a>
          </div>
          <div className="site-header__end">
            <nav className="nav">
              <button
                className="nav__toggle"
                aria-expanded="false"
                type="button"
                onClick={toggle}
              >
                <MenuIcon/>
              </button>
              <ul className="nav__wrapper">
                <li className="nav__item">
                  <a href="#">Home</a>
                </li>
                <li className="nav__item">
                  <a href="#">About</a>
                </li>
                <li className="nav__item">
                  <a href="#">Services</a>
                </li>
                <li className="nav__item">
                  <a href="#">Hire us</a>
                </li>
                <li className="nav__item">
                  <a href="#">Contact</a>
                </li>
                <li className="nav__item">
                  <a className="button" href="#">
                    Sign in
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <header style={show}>
        <div className="wrapper site-header__wrapper">
          <div className="site-header__middle nav_mobile">
            <nav className="nav ">
              <ul className="nav__wrapper_mobile">
                <li className="nav__item_mobile">
                  <a href="#">Home</a>
                </li>
                <li className="nav__item_mobile">
                  <a href="#">About</a>
                </li>
                <li className="nav__item_mobile">
                  <a href="#">Services</a>
                </li>
                <li className="nav__item_mobile">
                  <a href="#">Hire us</a>
                </li>
                <li className="nav__item_mobile">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

    </div>
  );
};

export default Header;
