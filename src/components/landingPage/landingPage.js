import React from "react";
import Header from "./header/index";
import Main from "./main/index";
import Footer from "./footer/index";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
