import React from "react"
import Layout from "../components/App/layout"
import SEO from "../components/App/seo"
import Navbar from "../components/KwangJinKim/Navbar"
import MainBanner from "../components/KwangJinKim/MainBanner"
import About from "../components/KwangJinKim/About"
import OpenSourceProjects from "../components/KwangJinKim/OpenSourceProjects"
import Experience from "../components/KwangJinKim/Experience"
import Skills from "../components/KwangJinKim/Skills"
import ContactForm from "../components/KwangJinKim/ContactForm"

const IndexPage = () => (
    <Layout>
        <SEO title="Kwang Jin Kim" />
        <div className="body-bg-five">
                <Navbar />
                <MainBanner />
                <About />
                <Experience />
                <OpenSourceProjects />
                <Skills />
                <ContactForm />
        </div>
    </Layout>
)

export default IndexPage
