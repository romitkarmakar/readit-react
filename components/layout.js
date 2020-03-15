import React from "react";
import Head from "next/head";
import NavBar from "./navbar";
import Loader from "./loader";
import Footer from "./footer"

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <div>
            <link
              href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900"
              rel="stylesheet"
            />
            <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css" />
            <link rel="stylesheet" href="css/animate.css" />
            <link rel="stylesheet" href="css/owl.carousel.min.css" />
            <link rel="stylesheet" href="css/owl.theme.default.min.css" />
            <link rel="stylesheet" href="css/magnific-popup.css" />
            <link rel="stylesheet" href="css/aos.css" />
            <link rel="stylesheet" href="css/ionicons.min.css" />
            <link rel="stylesheet" href="css/flaticon.css" />
            <link rel="stylesheet" href="css/icomoon.css" />
            <link rel="stylesheet" href="css/style.css" />
          </div>
        </Head>
        <Loader />
        <NavBar />
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
