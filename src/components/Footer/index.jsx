import "./FooterStyles.css";
import React from "react";
import { FaHome as HomeIcon } from "react-icons/fa";
import { FaPhone as PhoneIcon } from "react-icons/fa";
import { FaMailBulk as EmailIcon } from "react-icons/fa";
import { FaGithub as GithubIcon } from "react-icons/fa";
import { FaLinkedin as LinkedinIcon } from "react-icons/fa";
import { SiDiscord, SiTelegram } from "react-icons/si";

const Footer = () => {
  const urlFacebook = import.meta.env.VITE_FACEBOOK;
  const urlDiscord = import.meta.env.VITE_DISCORD;
  const urlTelegram = import.meta.env.VITE_TELEGRAM;
  const urlLinkedin = import.meta.env.VITE_LINKEDIN;
  const urlGithub = import.meta.env.VITE_GITHUB;

  return (
    <div className="footer__container">
      <div className="footer__content">
        <div className="left">
          <div className="location">
            <HomeIcon
              size={30}
              style={{ color: "#fff", marginRight: "1.5rem" }}
            />
            <div>
              <p> {import.meta.env.VITE_ADDRESS}</p>
              <p> {import.meta.env.VITE_COUNTRY}</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <PhoneIcon
                size={30}
                style={{ color: "#fff", marginRight: "1.5rem" }}
              />
              <span> {import.meta.env.VITE_PHONE}</span>
            </h4>
          </div>
          <div className="email">
            <h4>
              <EmailIcon
                size={30}
                style={{ color: "#fff", marginRight: "1.5rem" }}
              />
              <span>{import.meta.env.VITE_EMAIL}</span>
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            I am a student seeking a Software Intern position, eager to gain
            practical experience, enhance my skills, and explore diverse
            opportunities in software development.
          </p>
          <div className="social">
           {/*  <a target="_blank" href={urlFacebook} rel="noopener noreferrer">
              <FacebookIcon
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a> */}
            <a target="_blank" href={urlDiscord} rel="noopener noreferrer">
              <SiDiscord
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a target="_blank" href={urlTelegram} rel="noopener noreferrer">
              <SiTelegram
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a target="_blank" href={urlGithub} rel="noopener noreferrer">
              <GithubIcon
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a target="_blank" href={urlLinkedin} rel="noopener noreferrer">
              <LinkedinIcon
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
