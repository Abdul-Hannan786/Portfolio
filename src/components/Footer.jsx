import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";
import "../index.css";

const Footer = () => {
  const socialMediaIcons = [
    {
      name: "github",
      icon: <FaGithub className="icon-svg" />,
      tooltip: "GitHub",
      url: "https://github.com/Konain-Raza/"
    },
    {
      name: "linkedin",
      icon: <FaLinkedin className="icon-svg" />,
      tooltip: "LinkedIn",
      url: "https://www.linkedin.com/in/konain-raza-/"
    },
    {
      name: "gmail",
      icon: <FaEnvelope className="icon-svg" />,
      tooltip: "Gmail",
      url: "mailto:konainraza105@gmail.com"
    },
    {
      name: "facebook",
      icon: <FaFacebook className="icon-svg" />,
      tooltip: "Facebook",
      url: "https://www.facebook.com/share/qzZYjZDBRKyQBdyt/?mibextid=qi2Omg"
    },
    {
      name: "instagram",
      icon: <FaInstagram className="icon-svg" />,
      tooltip: "Instagram",
      url: "https://www.instagram.com/konainraza_01/"
    }
  ];

  return (
    <footer className="footer flex justify-between p-4 z-[100] relative w-full">
      <div className="footer-left">
        <p className="font-gilroy text-xl font-bold text-center sm:text-md dark:text-white text-gray-800">
          Made with <span className="emoji">❤️</span> by{' '}
          <a href="https://www.linkedin.com/in/konain-raza-" target="_blank" rel="noopener noreferrer">
            Konain Raza
          </a>
        </p>
      </div>
      <div className="footer-right">
        <ul className="social-icons">
          {socialMediaIcons.map((icon) => (
            <li key={icon.name} className={`icon ${icon.name} bg-slate-900`}>
              <a
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.tooltip}
              >
                {icon.icon}
                <span className="tooltip dark:text-white text-gray-800">{icon.tooltip}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
