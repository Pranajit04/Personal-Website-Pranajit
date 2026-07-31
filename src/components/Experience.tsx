import "./styles/Experience.css";

interface ExperienceItem {
  role: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Vocational Training — SAIL, Durgapur Steel Plant",
    period: "Dec 2026 – Jan 2027",
    description:
      "Completed vocational training on industrial operations, automation, and maintenance practices.",
  },
  {
    role: "Machine Learning Industrial-Oriented Training — SRSS Solutions",
    period: "Jul 2025 – Oct 2025",
    description:
      "Completed industrial training in Machine Learning, covering data preprocessing, model development, and evaluation using Python and Scikit-learn.",
  },
];

const Experience = () => {
  return (
    <div className="experience-section section-container" id="experience">
      <div className="experience-container">
        <h2>
          Experience <span>&amp; Training</span>
        </h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <div className="exp-card-header">
                <h3 className="exp-role">{exp.role}</h3>
                <span className="exp-period">{exp.period}</span>
              </div>
              <p className="exp-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
