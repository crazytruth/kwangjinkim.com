import React from "react"
import Layout from "../components/App/layout"
import SEO from "../components/App/seo"
import Navbar from "../components/DemoThree/Navbar"
import MainBanner from "../components/DemoThree/MainBanner"
import About from "../components/DemoThree/About"
import OpenSourceProjects from "../components/DemoThree/OpenSourceProjects"
import Experience from "../components/DemoThree/Experience"
import Skills from "../components/DemoThree/Skills"
import ContactForm from "../components/DemoThree/ContactForm"
import Footer from "../components/DemoThree/Footer"

const IndexPage = () => (
    <Layout>
        <SEO title="Kwang Jin Kim - " />
        <div className="body-bg-five">
                <Navbar />
                <MainBanner />
                <About />
                <Experience />
                <OpenSourceProjects />
                <Skills />
                <ContactForm />
                {/*<Footer />*/}
        </div>
    </Layout>
)

export default IndexPage
