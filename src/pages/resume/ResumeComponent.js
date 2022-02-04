import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./Resume.css";

class Resume extends Component {
  render() {
    return (
      <div className="div-resume">
        <Helmet>
          ‍<title>Resume | TheRealMVP</title>‍
          <meta name="description" content="Here's my Resume :D" />
          <meta name="twitter:site" content="@iamkumaail" />{" "}
          <meta name="twitter:creator" content="@iamkumaail" />{" "}
          <meta name="twitter:title" content="Resume | TheRealMVP" />{" "}
          <meta
            property="twitter:url"
            content="https://muhammadkumail.com/resume"
          />
          <meta name="twitter:description" content="Here's my Resume :D" />{" "}
          <meta property="og:title" content="Resume | TheRealMVP" />{" "}
          <meta property="og:description" content="Here's my Resume :D" />
          <meta property="og:url" content="https://muhammadkumail.com/resume" />
          <meta property="og:site_name" content="Resume | TheRealMVP" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
        </Helmet>
        <embed
          src={require(`../../assests/documents/kumail.pdf`)}
          type="application/pdf"
          className="embed-resume"
        />
      </div>
    );
  }
}

export default Resume;
