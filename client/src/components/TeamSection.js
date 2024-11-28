import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
  const team = [
    {
      name: "Dr Gowrishankar",
      role: "Faculty Advisor, Dean Academics",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1024&auto=format&fit=crop"
    },
    {
      name: "Dr Seemanthini K Gowda",
      role: "Faculty Sponsor, Associate Professor, Dept of Machine Learning",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1024&auto=format&fit=crop"
    }
  ];

  return (
    <section className="team-section">
      <div className="container">
        <div className="header">
          <h2 className="title">Meet Our Team</h2>
          <div className="divider"></div>
        </div>
        
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-image"
                />
                <div className="gradient-overlay"></div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;