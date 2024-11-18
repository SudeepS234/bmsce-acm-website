import React, { useRef, useEffect } from 'react';
import Events from './Events';
import AboutACM from './AboutACM';
import './Homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from './Gallery';

const Homepage = ({ scrollToSection }) => {
  // Refs for each section
  const aboutACMRef = useRef(null);
  const eventsRef = useRef(null);
  const cardStyles = {
    MarginTop: '40vh',
    maxWidth: '540px'
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      },
      { threshold: 0.1 }
    );
    const sections = [aboutACMRef, eventsRef];
    sections.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const taglineText = "Transforming Passion into Progress.";

  return (
    <>
      <section className="homepage-section" id='homepage'>
        <div className="container d-flex">
          <div className="big-brand-image">
            <img src="./images/logo.png" alt="Brand Logo" className="brand-logo-large fade-in" />
          </div>
          <div className='typewriter'>
            <div>
              <p className="tagline">Transforming Passion into Progress.</p>
            </div>          
          </div>
        </div>
      </section>

      <section id="aboutACM" className='quick' ref={aboutACMRef}>
        <div className="quick-about-us">
          <h1>About Us</h1>
          <div className="about-content">
            <img src="./images/quick-about.jpg" alt="Quick About Us" className="about-us-image" />
            <p>The ACM Student Chapter is a student-run organization that provides opportunities for students to learn about computing and computer science, network with other students and professionals, and participate in events and activities that promote the advancement of computing. If you’re interested in learning more about computing or computer science, or if you’re looking for a way to get involved in the computing community, then the BMSCE ACM Student Chapter is the perfect place for you!</p>
          </div>
        </div>
      </section>

      <section id="events" ref={eventsRef}>
        <Events />
      </section>

      <div>
        <AboutACM />
      </div>

      <div className="card mb-3" style={cardStyles}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="./images/gowrishankar.png" className="img-fluid rounded-start" alt="Image" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Dr Gowrishankar</h5>
              <p className="card-text">Dean Academics, BMSCE.</p>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="./images/seemanthini.png" className="img-fluid rounded-start" alt="Image" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Dr Seemanthini K Gowda</h5>
              <p className="card-text">Associate Professor, Department of Machine Learning, BMSCE.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='responsive'>
        <p>
          <img className='team-image' src='./images/TEAM_2024.png' alt='TEAM Image' />
        </p>
      </div>
      <div>
        <Gallery />
      </div>

    </>
  );
};

export default Homepage;
