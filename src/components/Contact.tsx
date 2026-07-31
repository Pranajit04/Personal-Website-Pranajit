import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-terminal">
          <div className="contact-terminal-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="contact-terminal-title">contact.sh</span>
          </div>

          <div className="contact-terminal-body">
            <div className="contact-cmd">
              <span className="prompt">$</span> contact --pranajit
            </div>

            <div className="contact-outputs">
              <div className="contact-output-line">
                <span className="output-prefix">&gt; email:</span>
                <a
                  href="mailto:prana2004jit@gmail.com"
                  data-cursor="disable"
                  className="contact-link"
                >
                  prana2004jit@gmail.com <MdArrowOutward />
                </a>
              </div>

              <div className="contact-output-line">
                <span className="output-prefix">&gt; github:</span>
                <a
                  href="https://github.com/Pranajit04"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                  className="contact-link"
                >
                  github.com/Pranajit04 <MdArrowOutward />
                </a>
              </div>

              <div className="contact-output-line">
                <span className="output-prefix">&gt; linkedin:</span>
                <a
                  href="https://www.linkedin.com/in/pranajit-banerjee-7b169126b"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                  className="contact-link"
                >
                  linkedin.com/in/pranajit-banerjee-7b169126b <MdArrowOutward />
                </a>
              </div>

              <div className="contact-output-line">
                <span className="output-prefix">&gt; leetcode:</span>
                <a
                  href="https://leetcode.com/u/Pranajit_Banerjee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                  className="contact-link"
                >
                  leetcode.com/u/Pranajit_Banerjee <MdArrowOutward />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <h2>
            Designed &amp; Developed by <span>Pranajit Banerjee</span>
          </h2>
          <h5>
            <MdCopyright /> 2026 Pranajit Banerjee
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
