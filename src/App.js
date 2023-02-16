import {useState} from 'react'
import './App.css';

function App() {

  const [menu_class, setMenuClass] = useState('menu toggle')
  const [showcase_class, setShowcaseClass] = useState('showcase')
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const toggleMenu = () => {
    if (!isMenuClicked) {
      setMenuClass('menu toggle active')
      setShowcaseClass('showcase active')
      setIsMenuClicked(true)      
    }
    else {
      setMenuClass('menu toggle')
      setShowcaseClass('showcase')
      setIsMenuClicked(false)
    }
  }

  return (
    <div className="app">
    <div className={showcase_class}>
    <div className="header">
      <h2 className="logo">AlphaPlannr</h2>
      <div className={menu_class} onClick={toggleMenu}></div>
    </div>

    <video src="https://res.cloudinary.com/drimdvpsc/video/upload/v1676561439/financialplanning1_zgikpm.mp4" autoPlay muted loop speed={0.25}></video>
    <div className="overlay"></div>
    <div className="text">
    <h2>Take control of your finances </h2> 
          <p>Coming soon. In the meantime, check out the blog</p>
      <button href="#">Blog</button>
    </div>
    
    
    {/* <ul class="social">
      <li><a href="#"><img src="https://i.ibb.co/x7P24fL/facebook.png"></a></li>
      <li><a href="#"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png"></a></li>
      <li><a href="#"><img src="https://i.ibb.co/ySwtH4B/instagram.png"></a></li>
    </ul> */}
  
  </div>
  <div className="menu">
    <ul>
      <li><button className='button' href="#" target="_blank" rel="noopener noreferrer">Home</button></li>
      <li><button className='button' href="#" target="_blank" rel="noopener noreferrer">News</button></li>
      {/* <li><button className='button' href="#" target="_blank" rel="noopener noreferrer">Destination</button></li> */}
      <li><button className='button' href="#" target="_blank" rel="noopener noreferrer">Blog</button></li>
      <li><button className='button' href="#" target="_blank" rel="noopener noreferrer">Contact</button></li>
    </ul>
  </div>



    {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
     
    </div>

  );
}

export default App;
