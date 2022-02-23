import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import "./Styles/main2content.css";
import Aos from "aos";

const Main2Content = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <section className="all-container-main2">
      <div data-aos="fade-left" className="container" >
        <div className="container-images">
          <img
            src="images/1521899920344442a9726cab56c63229dc65248b3ed7e6 (1).jpg"
            alt="profile2"
          />
        </div>
        <p className="username">MASOUD SAFARI</p>
        <p className="works">Frontend Developer</p>
        <p className="description">
          Hi there! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          corrupti natus cumque eligendi. Incidunt!
        </p>
        <div className="container-contact-me">
          <button>
            <i className="fab fa-github"></i>
          </button>
          <button>
            <i className="fab fa-twitter"></i>
          </button>
          <button>
            <i className="fab fa-linkedin-in"></i>
          </button>
        </div>
      </div>
      <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
        className="container"
        
      >
        <div className="container-images">
          <img src="images/IMG_20170506_015950.jpg" alt="profile2" />
        </div>
        <p className="username">BEHZAD JABERI</p>
        <p className="works">POET</p>
        <p className="description">
          Hi there! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          corrupti natus cumque eligendi. Incidunt!
        </p>
        <div className="container-contact-me">
          <button>
            <i className="fab fa-github"></i>
          </button>
          <button>
            <i className="fab fa-twitter"></i>
          </button>
          <button>
            <i className="fab fa-linkedin-in"></i>
          </button>
        </div>
      </div>
      <div data-aos="fade-right" className="container" >
        <div className="container-images">
          <img src="images/20190413_173820.jpg" alt="old car" />
        </div>
        <p className="username">MY OLD CAR</p>
        <p className="works">OLD CAR</p>
        <p className="description">
          Hi there! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          corrupti natus cumque eligendi. Incidunt!
        </p>
        <div className="container-contact-me">
          <button>
            <i className="fab fa-github"></i>
          </button>
          <button>
            <i className="fab fa-twitter"></i>
          </button>
          <button>
            <i className="fab fa-linkedin-in"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main2Content;
