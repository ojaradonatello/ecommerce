
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import logo from './Assets/logo.png';


import cart_icon from './Assets/cart_icon.png';

function App() {
  return (
    <div className='navbar'>
    <div className='nav-logo'>
      <img src={logo} alt='logo'/>
      <p> E-shop</p>
    </div>
    <ul className ='nav-menu'>
    <li>Shop</li>
  <li>Men</li>
  <li>women</li>
  <li>Kids</li>
      </ul>
  
  <div className='nav-login-cart'>
   <button>Login</button>
    <img src={cart_icon} alt=''/>
  </div>

    </div>
  );
}

export default App;
