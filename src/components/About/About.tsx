import { Container } from "./styles";
// import SaurabhSanap from "../../assets/SaurabhSanap.png";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
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
        
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <p> <b>Hello, I'm Saurabh!</b> I'm a software developer with a knack for building web solutions that matter, using a diverse toolkit that spans the MERN stack (MongoDB, Express.js, React.js, Node.js) and extends into emerging tech like Bun, generative AI, and low-code/no-code platforms. </p>

<h3>Areas of Expertise</h3>
<p>
<ul>
    <li><strong>Full Stack Development:</strong> Transforms ideas into fully operational and user-friendly applications. Expertise spans from high-level system design to intricate system engineering.</li>
    <li><strong>System Designing and Problem Solving:</strong> Specializes in crafting scalable architecture and solving complex problems efficiently, enhancing both system functionality and performance.</li>
    <li><strong>New Technologies:</strong> Engages with cutting-edge technologies, integrating tools like <strong>Bun</strong>, <strong>AppWrite</strong>, and <strong>Supabase</strong>, alongside <strong>Firebase</strong> and <strong>generative AI</strong>, to lead in tech innovation.</li>
    <li><strong>API Development:</strong> Develops reliable and fast <strong>RESTful APIs</strong> and <strong>GraphQL services</strong>, adhering to the latest security practices such as <strong>OAuth</strong> and <strong>JWT</strong>. Prioritizes optimization and thorough testing to ensure scalability and ease of maintenance.</li>
    <li><strong>Cloud Proficiency:</strong> Proficient with <strong>AWS</strong> infrastructure tools like <strong>Lambdas</strong>, <strong>RDS</strong>, and <strong>DynamoDB</strong>; builds robust and scalable applications.</li>
    <li><strong>Innovation and Automation:</strong> Leverages the latest in AI and automation technologies to accelerate development processes and introduce next-generation solutions.</li>
</ul>
</p>

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
