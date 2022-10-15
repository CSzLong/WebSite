const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            remark
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/posts/'+ node.frontmatter.remark,
      component: path.resolve('./src/template/post-detail.js'),
      context: { remark: node.frontmatter.remark }
    })
  })

}