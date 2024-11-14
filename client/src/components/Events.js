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
    { title: 'Event Title 1', imgSrc: './images/event1.jpg' },
    { title: 'Event Title 2', imgSrc: './images/event2.jpg' },
    { title: 'Event Title 3', imgSrc: './images/event3.jpg' },
    // Add more objects as needed
  ];

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <section className="events-section">
      <div className="event-card logo-card">
        <img src="./images/logo.png" alt="ACM Logo" className="acm-logo" />
        <h3>Our <span>Events</span></h3>
      </div>

      <div className="event-card orange-card hover-slide">
        <img src="./images/byte-battle.jpg" alt="Byte Battle" className="event-image" />
        <div className="hover-text">Byte Battle</div>
      </div>
      
      {/* Other fixed event cards */}
      <div className="event-card grey-card hover-slide">
        <img src="./images/innovision.jpg" alt="Innovision" className="event-image" />
        <div className="hover-text">Innovision</div>
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
