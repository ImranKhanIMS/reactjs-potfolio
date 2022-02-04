import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Zoom } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Helmet>
          ‍<title>Experience | TheRealMVP</title>‍
          <meta
            name="description"
            content="Kumail has worked with many evolving startups as a Full Stack Developer, Designer and a Software Architect. Kumail have also worked with some well established companies as Software Quality Assurance Trainee."
          />
          <meta name="twitter:site" content="@iamkumaail" />{" "}
          <meta name="twitter:creator" content="@iamkumaail" />{" "}
          <meta name="twitter:title" content="Experience | TheRealMVP" />{" "}
          <meta
            property="twitter:url"
            content="https://muhammadkumail.com/experience"
          />
          <meta
            name="twitter:description"
            content="Kumail has worked with many evolving startups as a Full Stack Developer, Designer and a Software Architect. Kumail have also worked with some well established companies as Software Quality Assurance Trainee..."
          />{" "}
          <meta property="og:title" content="Experience | TheRealMVP" />{" "}
          <meta
            property="og:description"
            content="Kumail has worked with many evolving startups as a Full Stack Developer, Designer and a Software Architect. Kumail have also worked with some well established companies as Software Quality Assurance Trainee..."
          />
          <meta
            property="og:url"
            content="https://muhammadkumail.com/experience"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
        </Helmet>
        <Header theme={theme} />
        <div className="basic-experience">
          <Zoom duration={1000}>
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Zoom>
        </div>
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
