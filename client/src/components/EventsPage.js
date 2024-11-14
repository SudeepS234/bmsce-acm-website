// EventsPage.js
import React from 'react';
import './EventsPage.css'; // CSS for card styles and responsiveness

const cardData = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  title: `Event ${i + 1}`,
  description: `Description for Event ${i + 1}`,
  imageUrl: "https://i.imgur.com/QYWAcXk.jpeg",
}));

function EventsPage() {
  return (
    <div className="events-grid">
      {cardData.map(card => (
        <article key={card.id} className="card">
          <img className="card__background" src={card.imageUrl} alt={`Event ${card.id}`} />
          <div className="card__content">
            <div className="card__content--container">
              <h2 className="card__title">{card.title}</h2>
              <p className="card__description">{card.description}</p>
            </div>
            <button className="card__button">Read more</button>
          </div>
        </article>
      ))}
    </div>
  );
}

export default EventsPage;
