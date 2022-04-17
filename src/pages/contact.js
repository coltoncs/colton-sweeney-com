import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/AdobeStock_331653936.jpeg')`, marginBottom: 0}}>
          <h1 className="post-title">Get in Touch🚀</h1>
          <p>Let me help you kick start your next project &rarr;</p>
        </div>
        <div>
          <form className="form-container" data-netlify="true" data-netlify-honeypot="bot-field" method="POST" name="Contact">
            <input type="hidden" name="form-name" value="Contact" />
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="w3lName"/>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="w3lSender"/>
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" id="w3lSubject"/>
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="w3lMessage"></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input type="submit" className="button -primary" style={{marginRight: 0}} />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`