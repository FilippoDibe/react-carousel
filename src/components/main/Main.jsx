import "./Main.css";
import Carousel from '../carousel/Carousel.jsx'
import slides from '../../data/slides.js'

const Main = () => {

    return (
        <main className="background">
            <div className="container">
            <Carousel slides={slides} />
              
            </div>
        </main>
    );
};

export default Main;
