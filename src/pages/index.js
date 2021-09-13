import * as React from "react"
import Navbar from '../components/Navbar'
import '../style/global.css'

import HeroSection from "../components/HeroSection"
import SS from '../components/StorySection'

import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

const IndexPage = () => (
  <>
   
    <Navbar />
    <HeroSection />
    <SS  />
   
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