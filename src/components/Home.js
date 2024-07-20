import React, { useContext } from 'react';
import Slider from 'react-slick';
import { ThemeContext } from '../ThemeContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Home.css';
import Img1 from '../assets/img1.jpg'; // Adjust the path as needed
import Img2 from '../assets/NIE_8645.JPG';
import Img3 from '../assets/IMG_1170.JPG';


function Home() {
    const { theme } = useContext(ThemeContext);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className={`home-container ${theme}`}>
            <h2>Welcome to Our Website</h2>
            <Slider {...settings}>
                <div>
                    <img src={Img1} alt="Slide 1" />
                </div>
                <div>
                    <img src={Img2} alt="Slide 2" />
                </div>
                <div>
                    <img src={Img3} alt="Slide 3" />
                </div>
            </Slider>

             {/* About Us Section */}
             <section id="about-us" className="about-us">
                <div className="about-us-text">
                    <h3>About Us</h3>
                    <p>
                        We are a dedicated team committed to providing exceptional
                        services and products. Our mission is to deliver quality
                        and value to our customers through innovation and expertise.
                        With years of experience in the industry, we strive to exceed
                        expectations and build lasting relationships with our clients.
                    </p>
                    </div>

                    <div className='about-us-slider'>
                        <Slider {...settings}>
                            <div>
                                <img src={Img1} alt="Slide 1" />
                            </div>
                            <div>
                                <img src={Img2} alt="Slide 2" />
                            </div>
                        </Slider>
                    </div>
                </section>

                <section>
                    
                </section>

        </div>
    );
}

export default Home;