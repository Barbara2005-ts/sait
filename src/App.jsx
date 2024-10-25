import './App.css';
import logo from '../src/img/Logo.svg'
import search from '../src/img/search.svg'
import cart from '../src/img/cart.svg'
import Aerrow from '../src/img/Aerrow.svg'
import Image from '../src/img/Image.svg'
import Image1 from '../src/img/Image.svg'

function App() {
  return(
    <>
      <div className="main_block">
        <div className='header'>
          <img src={logo} alt="logo"></img>
          <p>Organic</p>
          <ul className='tab'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Pages</a></li>
            <li><a href='#'>Shop</a></li>
            <li><a href='#'>Projects</a></li>
            <li><a href='#'>News</a></li>
          </ul>
        
          <div className='block_input'>
            <input type='text'/>
            <img src={search} alt='search'/>
          </div>
          
          <div className='cart'>
            <img src={cart} alt='cart'/>
            <p>Cart{0}</p>
          </div>
          
        </div>
        <div className='banner'>
          <div className='text'>
            <p className='natural-food'>100% Natural Food</p>
            <h1>Choose the best</h1>
            <h1>healthier way</h1>
            <h1>of life</h1>
            <button class="button">Explore Now <img src={Aerrow}/><i class="fas fa-arrow-right"></i></button>
          </div>
        </div>
        <div className='OfferBanner'>
          <div className='item'>
            <h3>Natural!!</h3>
            <p>Get Garden Fresh Fruits</p>
            <img src={Image}/>
          </div> 
          <div className='item'>
            <h3>Offer!!</h3>
            <p>Get 10% off on Vegetables</p>
            <img src={Image1}/>
          </div>
        </div>








      </div>
    </>
  );
}

export default App;



