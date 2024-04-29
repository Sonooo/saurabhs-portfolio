import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/itguy.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< Updated upstream
import Typewriter from "typewriter-effect";
=======
<<<<<<< HEAD
import { Typewriter } from 'react-simple-typewriter'
>>>>>>> Stashed changes
=======
import Typewriter from "typewriter-effect";
>>>>>>> parent of 8bc10ff (small changes and feature of typewriting effect)

=======
>>>>>>> parent of 11e073e (Added Typewriting effect)
=======
>>>>>>> parent of 11e073e (Added Typewriting effect)
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
<<<<<<< HEAD
<<<<<<< HEAD
          <h1>
          <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Saurabh Sanap")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Saurabh Sanap")
                        .start();
                }}
            />

          </h1>
=======
          <h1>Saurabh Sanap</h1>
>>>>>>> parent of 11e073e (Added Typewriting effect)
=======
          <h1>Saurabh Sanap</h1>
>>>>>>> parent of 11e073e (Added Typewriting effect)
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Full Stack Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume"> 2.4 Years of Experience</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
      <div className="social-media"><a
        href="https://www.linkedin.com/in/saurabh-sanap-159871179/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://github.com/Sonooo/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B919579411158&text=Hello+Saurabh"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://t.me/mostlyinsaneinsaan"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a></div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}