const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  return graphql(`
    {
        allWordpressPage {
            totalCount
            edges {
                node {
                    id
                    slug
                    title
                    content
                    excerpt
                    date
                    modified
                    acf {
                        intro_copy
                        main_copy
                        page_header_copy
                    }
                }
            }
        }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allWordpressPage.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`src/templates/${String(node.slug)}.js`),
        context: {} // additional data can be passed via context
      })
    })
  })

  .then(() => {
    graphql(`
    {
      allWordpressWpTeam {
        totalCount
        edges {
            node {
                id
                slug
                
            }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allWordpressWpTeam.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`src/templates/team-member.js`),
        context: {
          slug: node.slug
        } // additional data can be passed via context
      })
    })
  })
})
}




    // const categoryTemplate = path.resolve(`src/templates/categories.js`);
    // const tagsTemplate = path.resolve(`src/templates/tags.js`);
    // const authorTemplate = path.resolve(`src/templates/author.js`);
    // const posts = result.data.allMarkdownRemark.edges;
    // const blogposts = posts.filter(post => post.node.frontmatter.contentType === 'blog');

    // Create Paginated Tag and Category Pages 

    // const tagSet = new Set();
    // const tagMap = new Map();
    // const categorySet = new Set();
    // const authorSet = new Set();

    // result.data.allMarkdownRemark.edges.forEach(edge => {
    //   if (edge.node.frontmatter.tags) {
    //     edge.node.frontmatter.tags.forEach(tag => {
    //       tagSet.add(tag);

    //       const array = tagMap.has(tag) ? tagMap.get(tag) : [];
    //       array.push(edge);
    //       tagMap.set(tag, array);
    //     });
    //   }

    //   if (edge.node.frontmatter.author) {
    //     authorSet.add(edge.node.frontmatter.author);
    //   }

    //   if (edge.node.frontmatter.category) {
    //     categorySet.add(edge.node.frontmatter.category);
    //   }

    // });

    // const tagList = Array.from(tagSet);
    // tagList.forEach(tag => {
    //   createPaginationPages({
    //     createPage: createPage,
    //     edges: tagMap.get(tag),
    //     component: tagsTemplate,
    //     pathFormatter: prefixPathFormatter(`/tags/${(tag).replace(',', '').replace('+', '').replace(/\s+/g, '-').toLowerCase()}`),
    //     limit: 10,
    //     context: {
    //       tag
    //     }
    //   });
    // });
    
    // const categoryList = Array.from(categorySet);
    // categoryList.forEach(category => {
    //   const categoryEdges = posts.filter(({ node }) => { return node.frontmatter.category===category });
    //   createPaginationPages({
    //     createPage,
    //     edges: categoryEdges,
    //     component: categoryTemplate,
    //     pathFormatter: prefixPathFormatter(`/categories/${(category).replace(/\s+/g, '-').toLowerCase()}`),
    //     limit: 10,
    //     context: {
    //       category
    //     }
    //   });
    // });

    // const authorList = Array.from(authorSet);
    // authorList.forEach(author => {
    //   const authorEdges = posts.filter(({ node }) => { return node.frontmatter.author===author });
    //   createPaginationPages({
    //     createPage,
    //     edges: authorEdges,
    //     component: authorTemplate,
    //     pathFormatter: prefixPathFormatter(`/tags/${(author).replace(/\s+/g, '-').toLowerCase()}`),
    //     limit: 10,
    //     context: {
    //       author
    //     }
    //   });
    // });
