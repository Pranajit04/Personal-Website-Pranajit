import "./styles/Achievements.css";

const achievementsList = [
  "SIH '25 Internal Hackathon Qualifier",
  "Top 10, Hack Zenith Hackathon",
  "Hacktoberfest '23 Participant",
  "GDG Cloud Study Jams '24 & '25 Participant",
  "Associate Manager Lead, GDG on Campus BCREC (Aug '24 – Mar '25)",
];

const Achievements = () => {
  return (
    <div className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <h2>
          Achievements <span>&amp; Honors</span>
        </h2>
        <div className="achievements-grid">
          {achievementsList.map((item, index) => (
            <div className="achievement-badge-card" key={index}>
              <span className="badge-icon">★</span>
              <span className="badge-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
