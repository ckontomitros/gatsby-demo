import * as React from "react";
import { HeadFC, PageProps, graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPage: React.FC<{
  data: {
    allMdx: {
      nodes: [
        {
          id: string;
          excerpt: string;
          frontmatter: { title: string; date: string; slug: string };
        }
      ];
    };
  };
}> = ({
  data,
}: {
  data: {
    allMdx: {
      nodes: [
        {
          id: string;
          excerpt: string;
          frontmatter: { title: string; date: string; slug: string };
        }
      ];
    };
  };
}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};
export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export default BlogPage;
export const Head: HeadFC = () => {
  return <Seo title="Blog" />;
};
