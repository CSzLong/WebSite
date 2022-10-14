import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Home({data}) {
  const technology_posts = data.technology.nodes
  const weekly_posts = data.weekly.nodes
  const information_posts = data.info.nodes
  const development_posts = data.development.nodes
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <img src="logo.png" alt="Logo"/>
        </div>
        <div>
          <h3>Welcome to Aptos Global</h3>
          <p>亚太地区首个专注于资讯教育、招聘孵化、开发者社区的Aptos生态服务机构</p>
          <Link className={styles.btn} to="/projects">My Project Portfolio</Link>
        </div>
      </section>
      <br/>
      <br/>

      <section>
        <h3 className={styles.header}>技术发展</h3>
        <hr/>
        <div className={styles.posts}>
          {
            technology_posts.map(post => (
              <Link to={post.frontmatter.slug} key={post.id}>
                <GatsbyImage image={post.frontmatter.featuredImg.childImageSharp.gatsbyImageData}/>
                <h3>{post.frontmatter.title}</h3>
              </Link> 
            ))
          }
        </div>
      </section>
      <section>
        <h3 className={styles.header}>生态周报</h3>
        <hr/>
        <div className={styles.posts}>
          {
            weekly_posts.map(post => (
              <Link to={post.frontmatter.slug} key={post.id}>
                <GatsbyImage image={post.frontmatter.featuredImg.childImageSharp.gatsbyImageData}/>
                <h3>{post.frontmatter.title}</h3>
              </Link> 
            ))
          }
        </div>
      </section>
      <section>
        <h3 className={styles.header}>Aptos 资讯</h3>
        <hr/>
        <div className={styles.posts}>
          {
            information_posts.map(post => (
              <Link to={post.frontmatter.slug} key={post.id}>
                <GatsbyImage image={post.frontmatter.featuredImg.childImageSharp.gatsbyImageData}/>
                <h3>{post.frontmatter.title}</h3>
              </Link> 
            ))
          }
        </div>
      </section>
      <section>
        <h3 className={styles.header}>生态发展</h3>
        <hr/>
        <div className={styles.posts}>
          {
            development_posts.map(post => (
              <Link to={post.frontmatter.slug} key={post.id}>
                <GatsbyImage image={post.frontmatter.featuredImg.childImageSharp.gatsbyImageData}/>
                <h3>{post.frontmatter.title}</h3>
              </Link> 
            ))
          }
        </div>
      </section>
    </Layout>
  )
}

//export the posts
export const query = graphql`
  query MyQuery {
    technology: allMarkdownRemark(
      limit: 3
      sort: {fields: frontmatter___date, order: DESC}
      filter: {frontmatter: {class: {eq: "technology"}}}
    ) {
      nodes {
        frontmatter {
          date
          featuredImg {
            childImageSharp {
              gatsbyImageData
            }
          }
          slug
          title
        }
      }
    }
    weekly: allMarkdownRemark(
      limit: 3
      sort: {fields: frontmatter___date, order: DESC}
      filter: {frontmatter: {class: {eq: "weekly"}}}
    ) {
      nodes {
        frontmatter {
          date
          featuredImg {
            childImageSharp {
              gatsbyImageData
            }
          }
          slug
          title
        }
      }
    }
    info: allMarkdownRemark(
      limit: 3
      sort: {fields: frontmatter___date, order: DESC}
      filter: {frontmatter: {class: {eq: "info"}}}
    ) {
      nodes {
        frontmatter {
          date
          featuredImg {
            childImageSharp {
              gatsbyImageData
            }
          }
          slug
          title
        }
      }
    }
    development: allMarkdownRemark(
      limit: 3
      sort: {fields: frontmatter___date, order: DESC}
      filter: {frontmatter: {class: {eq: "development"}}}
    ) {
      nodes {
        frontmatter {
          date
          featuredImg {
            childImageSharp {
              gatsbyImageData
            }
          }
          slug
          title
        }
      }
    }
  }
` 