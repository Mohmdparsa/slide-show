import cafe from "../assets/images/cafe.jpg";
import coffee1 from "../assets/images/coffee1.jpg";
import coffee2 from "../assets/images/coffee2.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const ImageCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src={cafe} alt="cafe"/>
        <p className="legend">Image 1</p>
      </div>
      <div>
        <img src={coffee1} alt="coffee"/>
        <p className="legend">Image 2</p>
      </div>
      <div>
        <img src={coffee2} alt="coffee2"/>
        <p className="legend">Image 3</p>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;