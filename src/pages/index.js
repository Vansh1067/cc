import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from '../components/Navbar'
import '../style/global.css'

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection"
import SS from '../components/StorySection'
import WillBeOnlineIn from "../components/WillBeOnlineIn"
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

const IndexPage = () => (
  <>
    <Navbar />
    <HeroSection />
    <SS />
    <WillBeOnlineIn />
    <Subscribe />
    <Footer />
  </>
)

export default IndexPage





  // <Layout>
  //   <Seo title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <StaticImage
  //     src="../images/gatsby-astronaut.png"
  //     width={300}
  //     quality={95}
  //     formats={["AUTO", "WEBP", "AVIF"]}
  //     alt="A Gatsby astronaut"
  //     style={{ marginBottom: `1.45rem` }}
  //   />
  //   <p>
  //     <Link to="/page-2/">Go to page 2</Link> <br />
  //     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  //   </p>
  // </Layout>