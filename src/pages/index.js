import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Aptos World</h2>
          <h3>Welcome to Aptos World Community</h3>
          <p>亚太地区首个专注于资讯教育、招聘孵化、开发者社区的Aptos生态服务机构</p>
          <Link className={styles.btn} to="/projects">My Project Portfolio</Link>
        </div>
      </section>
    </Layout>
  )
}
