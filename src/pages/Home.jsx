import AboutHome from "../components/Homepage/AboutHome/AboutHome";
import FeaturedCategory from "../components/Homepage/FeatueedCategoryHome/FeaturedCategory";
import NewArrivalsHome from "../components/Homepage/NewArrivalsHome/NewArrivalsHome";
import NewsEventsHome from "../components/Homepage/NewsEventsHome/NewsEventsHome";
import Slider from "../components/Homepage/SilderHome/SliderImages";
import '../assets/css/global.css';
import '../assets/css/style.css';



const Home = () => {

  

  return (
    <main>
     

          
    <div className="container-fluid">
      <div className="container">
      <Slider />
     
      <AboutHome />
      <FeaturedCategory />
      <NewArrivalsHome />
      <NewsEventsHome />
      </div>
    </div>
     
    
      
    </main>
  );

}

export default Home;
