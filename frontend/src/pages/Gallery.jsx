import React, { useEffect } from 'react';
import gal1 from '../assets/Images/gal1.jpg';
import gal2 from '../assets/Images/gal2.jpg';
import gal3 from '../assets/Images/gal3.jpg';
import gal4 from '../assets/Images/gal4.jpg';
import gal5 from '../assets/Images/gal5.jpg';
import gal6 from '../assets/Images/gal6.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 100,
            easing: "ease-in-sine",
            offset: 200,
        });
    }, []);
    
    return (
        <>
            <section className="w-full flex flex-col md:px-20 px-10 py-20 justify-center items-center gap-16 bg-gray-900">
                <h1 className="text-6xl text-white font-bold text-center">Experience the Best Haircut & Shaving Services</h1>
            </section>

            <div className="w-full flex flex-col justify-center items-center bg-gray-900 pb-20">
                <div className="lg:w-[80%] w-full grid md:grid-cols-3 grid-cols-1 justify-center justify-items-center items-center gap-10 px-10">
                    <img data-aos="zoom-out" data-aos-delay="200" src={gal1} alt="Gallery 1" className="rounded-xl w-[400px] h-[350px] object-cover" />
                    <img data-aos="zoom-out" data-aos-delay="200" src={gal2} alt="Gallery 2" className="rounded-xl w-[400px] h-[350px] object-cover" />
                    <img data-aos="zoom-out" data-aos-delay="200" src={gal3} alt="Gallery 3" className="rounded-xl w-[400px] h-[350px] object-cover" />
                    <img data-aos="zoom-out" data-aos-delay="200" src={gal4} alt="Gallery 4" className="rounded-xl w-[400px] h-[350px] object-cover" />
                    <img data-aos="zoom-out" data-aos-delay="200" src={gal5} alt="Gallery 5" className="rounded-xl w-[400px] h-[350px] object-cover" />
                    <img data-aos="zoom-out" data-aos-delay="200" src={gal6} alt="Gallery 6" className="rounded-xl w-[400px] h-[350px] object-cover" />
                </div>
            </div>
        </>
    );
}

export default Gallery;