import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Styles/Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer" >
      <form   data-aos="fade-right">
        <input
          type="text"
          name="Name"
          className="Name"
          placeholder="Name"
        ></input>
        <input
          type="email"
          name="email"
          className="emil"
          placeholder="smaple@gmail.com"
        ></input>
        <input
          type="text"
          name="phone"
          className="phone"
          placeholder="09199498762"
        ></input>
        <textarea
          typeof="text"
          maxLength={500}
          defaultValue="Comment here"
        ></textarea>
        <button typeof="submit" onClick={(e) => e.preventDefault()}>
          Send
        </button>
      </form>
      <section className="contact_us" data-aos="fade-left">
        <a target={"_blank"} href="https://github.com/mstar11">
          <GitHubIcon className="icons" />
          <p>https://github.com/mstar11</p>
        </a>
        <a target={"_blank"} href="https://github.com/mstar11">
          <EmailIcon className="icons" />
          <p>star11a80m72@gmail.com</p>
        </a>
        <a target={"_blank"} href="https://github.com/mstar11">
          <TwitterIcon className="icons" />
          <p>star11a80m72@gmail.com</p>
        </a>
        <a target={"_blank"} href="https://github.com/mstar11">
          <TelegramIcon className="icons" />
          <p>star11a80m72@gmail.com</p>
        </a>
        <a target={"_blank"} href="https://github.com/mstar11">
          <LocalPhoneIcon className="icons" />
          <p>09199498762</p>
        </a>
      </section>
    </footer>
  );
};

export default Footer;
