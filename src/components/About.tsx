import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section section-container" id="about">
      <div className="readme-container">
        <div className="readme-header">
          <span className="readme-filename">README.md</span>
          <span className="readme-branch">main</span>
        </div>
        <div className="readme-content">
          <h1 className="readme-title"># Pranajit Banerjee</h1>

          <div className="readme-block">
            <h2 className="readme-heading">## Currently</h2>
            <p className="readme-text">
              B.Tech in Computer Science and Design at Dr. B.C. Roy Engineering College (2023–2027). Beginner Machine Learning Engineer with a strong interest in Data Science and Android Development. Former Associate Manager Lead at GDG on Campus BCREC (Aug '24 – Mar '25).
            </p>
          </div>

          <div className="readme-block">
            <h2 className="readme-heading">## Stack</h2>
            <div className="stack-pills">
              {[
                "Java",
                "Python",
                "C",
                "C++",
                "Android Development",
                "Machine Learning",
                "MySQL",
                "Unity (VR & Game Dev)",
                "Data Structures & Algorithms",
              ].map((tech, idx) => (
                <span className="stack-pill" key={idx}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="readme-block">
            <h2 className="readme-heading">## Philosophy</h2>
            <blockquote className="readme-quote">
              "Ship the ugly version first. A published app with rough edges teaches more than a polished idea that never left the editor."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
