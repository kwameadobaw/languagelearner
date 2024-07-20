import React, { useContext } from 'react';
import Slider from 'react-slick';
import { ThemeContext } from '../ThemeContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Home.css';
import Img1 from '../assets/img1.jpg'; // Adjust the path as needed
import Img2 from '../assets/sharaan-muruvan-r6beCefFwD8-unsplash.jpg';
import Img3 from '../assets/dino-reichmuth-A5rCN8626Ck-unsplash.jpg';

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

                <div className="contact-us">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>Email: contact@ourwebsite.com</li>
                        <li>Phone: +123 456 7890</li>
                        <li>Address: 123 Main Street, City, Country</li>
                    </ul>
                </div>

                <div className="map-container">
                    <iframe
                        title="Our Location"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2589.0446824239693!2d-0.17164293646344578!3d5.677216244802052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgh!4v1721495208000!5m2!1sen!2sgh"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </section>

        </div>
    );
}

export default Home;
