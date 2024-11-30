import React, { useEffect, useState } from 'react';
import './Events.css';

const Events = () => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.event-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          card.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const additionalEvents = [
    { title: 'Bids & Bytes', imgSrc: './images/bids-and-bytes.jpg' },
    { title: 'Orientation', imgSrc: './images/orientation.jpg' },
    { title: 'Byte Battle', imgSrc: './images/byte-battle.jpg' },
    { title: 'Ctrl + Alt + Create', imgSrc: './images/ctrl-alt.jpg' },
    { title: 'Jumble Jam 2.0', imgSrc: './images/jumble-jam-2.0.jpg' },
    { title: 'Art of Encryption', imgSrc: './images/art-of-enc.jpg' },
    { title: 'IPR & Patents in Technology', imgSrc: './images/ipr.jpg' },
    { title: 'Innovision', imgSrc: './images/innovision.jpg' },
    { title: 'Blockchain', imgSrc: './images/blockchain.jpg' },
    { title: 'Web Wars', imgSrc: './images/web-wars.jpg' },
  ];

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <section className="events-section">
      <div className="event-card logo-card">
        <img src="./images/logo.png" alt="ACM Logo" className="acm-logo" />
        <h3>Our <span>Events</span></h3>
      </div>

      <div className="event-card orange-card hover-slide">
        <img src="./images/duos-dash-2.0.jpg" alt="Byte Battle" className="event-image" />
        <div className="hover-text">Duo's Dash 2.0</div>
      </div>
      
      {/* Other fixed event cards */}
      <div className="event-card grey-card hover-slide">
        <img src="./images/ggambit.jpg" alt="Innovision" className="event-image" />
        <div className="hover-text">Grandmaster's Gambit 2.0</div>
      </div>
      <div className="event-card red-card hover-slide">
        <img src="./images/cipher-quest.jpg" alt="Cipher Quest" className="event-image" />
        <div className="hover-text">Cipher Quest</div>
      </div>

      <div className="event-card image-card" onClick={toggleShowMore}>
        <p>{showMore ? 'Show less' : 'Show more events'}</p>
      </div>

      {/* Additional events appear here on "Show More" */}
      {showMore && additionalEvents.map((event, index) => (
        <div className="event-card hover-slide" key={index}>
          <img src={event.imgSrc} alt={event.title} className="event-image" />
          <div className="hover-text">{event.title}</div>
        </div>
      ))}
    </section>
  );
};

export default Events;
