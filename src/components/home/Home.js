import './Home.css';
import HomeImage from "./images/home_image.png"
function Home() {
  return (
    <div id="home" className="home">
        <div className='home-head-para'>
            <h1 className='home-heading'>Enjoy <span className='text-[#67568c]'>the home like food</span> at any time.</h1>
            <p className='home-para'>Helping you enjoy comfortable and healthy food anywhere and anytime on the go . . !</p>
            <a href="#menu" className='home-order-button'>Order Now</a>
        </div>
        <div>
            <img className='home-image' src={HomeImage} alt='food in plate'></img>
        </div>
    </div>
  );
}

export default Home;