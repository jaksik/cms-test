import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const info = data.markdownRemark
  console.log("info: ", data.markdownRemark.frontmatter.tags);

  return (
    <Layout>    
        <div style={{maxWidth:`600px`, margin:`0 auto`}}>
        <h1 style={{margin:`50px 0 30px`}}>{info.frontmatter.title}</h1>
        <h5 style={{margin:`30px 0 70px`, fontWeight:`bold`}}>{info.frontmatter.description}</h5>
        <div dangerouslySetInnerHTML={{ __html: info.html }}/>
        </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title  
        description
        tags
      }
    }
  }
`