import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from "../components/Layout"
import * as styles from '../styles/post-detail.module.css'

export default function PostDetail({data}) {
  
  const {html} = data.markdownRemark

  return (
    <Layout>
        <div className={styles.details}>
            <div className={styles.featured}>
                <GatsbyImage image={data.markdownRemark.frontmatter.featuredImg.childImageSharp.gatsbyImageData}/>
            </div>
            <h2>{data.markdownRemark.frontmatter.title}</h2>
            <div className={styles.html} dangerouslySetInnerHTML={{__html: html }}/>
        </div>
        <div><h3>关注Aptos Global公众号，了解更多Aptos 讯息！
            </h3>
            <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} className={styles.wechatlinks}/>
        </div>
    </Layout>
  )
}

export const query = graphql`
    query Postpages($remark: String) {
        markdownRemark(frontmatter: {remark: {eq: $remark}}) {
        html
        frontmatter {
            title
            featuredImg {
            childImageSharp {
                gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
            }
            }
        }
        }
        file(relativePath: {eq: "Wechat_QR.png"}) {
            childImageSharp {
              gatsbyImageData(sizes: "35%")
            }
        }
    }
  `