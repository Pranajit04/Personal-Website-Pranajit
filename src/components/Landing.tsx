import { PropsWithChildren, useEffect, useState } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const fullText =
    "Pranajit Banerjee — beginner ML engineer and Android developer, building impactful solutions.";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="terminal-hero">
          {/* Terminal Window Header */}
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-title">zsh — pranajit@portfolio:~</div>
          </div>

          {/* Terminal Body */}
          <div className="terminal-body">
            <div className="terminal-prompt-line">
              <span className="prompt-symbol">$</span>{" "}
              <span className="typewriter-text">{typedText}</span>
              <span className="terminal-cursor">█</span>
            </div>

            <div className="terminal-status-line">
              <span className="status-badge">SHIPPED</span>
              <span className="status-info">
                3 shipped projects <span className="separator">·</span> SIH Internal Qualifier <span className="separator">·</span> Top 10 Hack Zenith
              </span>
            </div>
          </div>
        </div>

        {/* Sub-text under terminal */}
        <div className="terminal-subtext">
          <p>
            B.Tech CS &amp; Design student at Dr. B.C. Roy Engineering College. Former GDG on Campus Associate Manager Lead.
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Landing;
