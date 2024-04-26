import { Container } from "./styles";
// import SaurabhSanap from "../../assets/SaurabhSanap.png";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import AWS from "../../assets/AWS.svg";
import Graphql from "../../assets/graphql.svg";
import Postgresql from "../../assets/postgresql.svg";
import MongoDB from "../../assets/mongodb.svg";
import Nextjs from "../../assets/nextjs.svg";
import Firebase from "../../assets/firebase.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Saurabh, I'm a software developer with a knack for building web solutions that matter, using a diverse toolkit that spans the MERN stack (MongoDB, Express.js, React.js, Node.js) and extends into emerging tech like Bun, generative AI, and low-code/no-code platforms.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
         <b>What I Do Best: </b>
<b>MERN Mastery:</b> 
I bring applications from idea to launch, ensuring they're both powerful and user-friendly.also I have knowledge of High level and low level system designing.
            </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
         <b>On the Cutting Edge:</b> <br /> Eager to explore new tech, I've dived into Bun , AppWrite , Supabase, firebase and tools like generative AI to stay ahead.
            </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
         <b>API Expertise:</b> <br />  I create reliable and fast RESTful APIs and GraphQL services, utilizing the latest security practices like OAuth and JWT. My focus on performance optimization and automated testing ensures that I deliver powerful and easy-to-maintain APIs for any business need.
            </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
         <b>AWS Savvy:</b> <br />  Proficient with AWS tools like Lambdas, RDS, Dynamodb and more, I ensure apps are scalable and reliable.
            </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
         <b>Innovation Enthusiast:</b> <br />  I'm all about leveraging the latest in AI and automation to speed up development and introduce next-gen solutions.
            </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
        <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={AWS} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={Graphql} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={Nextjs} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={MongoDB} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={Postgresql} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={Firebase} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={wordpress} alt="Wordpress" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={shopify} alt="shopify" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      {/* <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={SaurabhSanap} alt="Saurabh Sanap" />
        </ScrollAnimation>
      </div> */}
    </Container>
  )
}
