import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // <-- Add this
import NavBar from './NavBar'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import FreqAskedQues from './FreqAskedQues'
import Team from './Team'
import Clients from './Clients'
import Contact from './Contact'
import Newsletter from './Newsletter'
import Footer from './Footer'


const Home = () => {
    const { hash } = useLocation(); // <-- Add this

    useEffect(() => { // <-- Add this entire useEffect block
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        <div className="container min-w-full min-h-lvh secondary-font">
            <NavBar />
            {/* <section className="w-full max-h-fit pt-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100"> */}
            <section className="w-full max-h-fit pt-16 lg:px-32 overflow-hidden bg-[#E2E2E2] border-b border-blue-100">
                <Hero />
            </section>

            <section id="about" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
                <About />
            </section>
            <section id="services" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
                <Services />
            </section>
            <section id="portfolio" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100 bg-[#E2E2E2]">
                <Portfolio />
            </section>
            <section id="team" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
                <Team />
            </section>
            {/* <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <FreqAskedQues />
      </section> */}

            {/* <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <Clients />
      </section> */}
            <section id="contact" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
                <Contact />
            </section>
            {/* <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <Newsletter />
      </section> */}
            <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
                <Footer />
            </section>
        </div>
    )
}

export default Home
