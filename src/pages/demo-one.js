import React from "react"
import Layout from "../components/App/layout"
import SEO from "../components/App/seo"
import Navbar from "../components/Index/Navbar"
import bannerImg from '../components/App/assets/images/banner/banner-main1.jpg'
import MainBanner from "../components/Index/MainBanner"
import About from "../components/Index/About"
import WhatIDo from "../components/Index/WhatIDo"
import MyExperience from "../components/Index/MyExperience"
import Portfolio from "../components/Index/Portfolio"
import AwardsWon from "../components/Index/AwardsWon"
import BlogPost from "../components/Index/BlogPost"
import Testimonials from "../components/Index/Testimonials"
import ContactForm from "../components/Index/ContactForm"
import Footer from "../components/Index/Footer"

const IndexPage = () => (
  <Layout>
    <Navbar />
    <SEO title="Home" />
    <div className="main-area">
      <div className="main-left-img">
        <img src={bannerImg} alt="banner" />
      </div>

      <div className="main-content">
        <MainBanner />
        <About />
        <WhatIDo />
        <MyExperience />
        <Portfolio />
        <AwardsWon />
        <BlogPost />
        <Testimonials />
        <ContactForm />
        <Footer />
      </div>
    </div>
  </Layout>
)

export default IndexPage
