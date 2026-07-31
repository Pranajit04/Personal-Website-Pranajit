import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(useGSAP);

interface Project {
  version: string;
  status: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    version: "v1.0.0",
    status: "shipped",
    title: "ElixNode — AI Digital Twin for Predictive Maintenance",
    description:
      "An AI-powered digital twin dashboard that monitors SCADA sensor data in real time, detects equipment anomalies, and uses Google Gemini AI to generate maintenance insights. Sends automated email alerts to plant operators before potential equipment failures, with an interactive dashboard for sensor data, AI insights, and alert history.",
    tags: [
      "Python",
      "Google Gemini API",
      "SCADA",
      "Dashboard",
      "Email Automation",
    ],
    link: "https://github.com/Pranajit04",
  },
  {
    version: "v1.0.0",
    status: "shipped",
    title: "Real-Time Chat App — Android",
    description:
      "A real-time Android chat application with anonymous Firebase Authentication, letting users create, join, and manage chat groups. Real-time messaging is powered by Firebase Realtime Database, with a clean, user-friendly interface built for seamless communication.",
    tags: [
      "Android Studio",
      "Java",
      "Firebase Authentication",
      "Firebase Realtime Database",
    ],
    link: "https://github.com/Pranajit04",
  },
  {
    version: "v1.0.0",
    status: "shipped",
    title: "Quiz App — Retrofit & PHP",
    description:
      "An Android quiz application with a PHP backend and MySQL database, using Retrofit for efficient API communication. Supports multiple quiz categories with dynamically fetched questions, automatic score calculation, and result display.",
    tags: ["Java", "Retrofit", "PHP", "MySQL", "XAMPP"],
    link: "https://github.com/Pranajit04",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box || box.length === 0) return;
      const workContainer = document.querySelector(".work-container");
      if (!workContainer) return;
      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    if (translateX > 0 && window.innerWidth > 1024) {
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: `+=${translateX}`,
          scrub: true,
          pin: true,
          id: "work",
        },
      });

      timeline.to(".work-flex", {
        x: -translateX,
        ease: "none",
      });

      return () => {
        timeline.kill();
        ScrollTrigger.getById("work")?.kill();
      };
    }
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Work <span>/ Releases</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box release-card" key={index}>
              <div className="release-card-header">
                <span className="release-version">{project.version}</span>
                <span className="release-badge">{project.status}</span>
              </div>
              <div className="work-info">
                <h3 className="release-title">{project.title}</h3>
                <p className="release-description">{project.description}</p>
                <div className="release-tags">
                  {project.tags.map((tag, tIndex) => (
                    <span className="tag-pill" key={tIndex}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="release-link"
                data-cursor="disable"
              >
                <span>View Release</span>
                <MdArrowOutward />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
